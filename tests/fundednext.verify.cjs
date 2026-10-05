const {chromium}=require('@playwright/test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true, ...(process.env.CHROMIUM_PATH ? {executablePath:process.env.CHROMIUM_PATH} : {})}); const page=await browser.newPage(); const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4173');await page.locator('#fundedNextButton').click();
 await page.locator('.fn-page').waitFor();
 assert.match(await page.locator('#fn-limits').innerText(),/480/); assert.match(await page.locator('#fn-limits').innerText(),/5\s?400/);
 await page.locator('#fn-phase').selectOption('2');assert.match(await page.locator('#fn-limits').innerText(),/300/);
 await page.locator('#fn-model').selectOption('one');assert.equal(await page.locator('#fn-phase').inputValue(),'1');assert.match(await page.locator('#fn-limits').innerText(),/180/);
 await page.locator('#fn-model').selectOption('lite');assert.match(await page.locator('#fn-limits').innerText(),/240/);
 await page.locator('#fn-model').selectOption('two');await page.locator('#fn-phase').selectOption('funded');assert.match(await page.locator('#fn-risk').innerText(),/180/);
 await page.locator('#fn-capital').fill('');assert.match(await page.locator('#fn-limits').innerText(),/positif/);
 await page.locator('#fn-capital').fill('15000');assert.match(await page.locator('#fn-risk').innerText(),/450/);
 await page.locator('#fn-model').selectOption('instant');assert.equal(await page.locator('#fn-phase').isDisabled(),true);assert.match(await page.locator('#fn-limits').innerText(),/suiveur/);
 await page.locator('#fn-model').selectOption('two');await page.locator('#fn-capital').fill('6000');
 const winter=await page.evaluate(()=>fundedNextRules.localTime('2026-12-01',2));assert.match(winter,/17:00|17 h 00/);
 const summer=await page.evaluate(()=>fundedNextRules.localTime('2026-09-29',3));assert.match(summer,/17:00|17 h 00/);
 const mismatch=await page.evaluate(()=>fundedNextRules.localTime('2026-10-28',2));assert.match(mismatch,/18:00|18 h 00/);
 fs.mkdirSync('audit/fundednext',{recursive:true});const measurements=[];
 for(const width of [320,375,414,768,1024,1440,1920]){await page.setViewportSize({width,height:1000});const m=await page.evaluate(()=>({viewport:innerWidth,scroll:document.documentElement.scrollWidth}));assert.ok(m.scroll<=width,JSON.stringify(m));measurements.push(m);await page.screenshot({path:`audit/fundednext/${width}.png`,fullPage:true});}
 await page.setViewportSize({width:375,height:850});await page.locator('#fn-home').click();await page.locator('#menuButton').click();await page.locator('#fundedNextButton').click();assert.equal(await page.locator('#menuButton').getAttribute('aria-expanded'),'false');await page.keyboard.press('Tab');assert.ok(await page.evaluate(()=>document.activeElement.closest('.fn-page')));
 await page.setViewportSize({width:1440,height:1000});await page.locator('#brandHomeButton').click();assert.equal(await page.locator('.hero').count(),1);assert.equal(await page.locator('#fundedNextButton').getAttribute('aria-current'),null);
 for(let id=1;id<=30;id++){await page.locator(`#moduleList [data-module="${id}"]`).click();assert.match(await page.locator('.module-kicker').innerText(),new RegExp(`Module ${id}/30`));}
 assert.deepEqual(errors,[]);fs.writeFileSync('audit/fundednext/measurements.json',JSON.stringify({checks:'Navigation, modèles/phases, calculs, validation, horaires été/hiver/transition, 30 modules, retour accueil, clavier et menu mobile',measurements,errors},null,2));await browser.close();console.log('FundedNext : toutes les vérifications réussies, 7 largeurs sans débordement, 30 modules accessibles.');
})().catch(e=>{console.error(e);process.exit(1)});
