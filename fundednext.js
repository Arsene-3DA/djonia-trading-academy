/* Référence indépendante, vérification manuelle : 29 septembre 2026. */
window.fundedNextRules = {
  checked: '2026-09-29',
  models: {
    two: {name:'Stellar 2-Step', targets:[8,5], daily:5, total:10, days:5},
    one: {name:'Stellar 1-Step', targets:[10], daily:3, total:6, days:2},
    lite: {name:'Stellar Lite', targets:[8,4], daily:4, total:8, days:5}
  },
  calculate(model, phase, capital) {
    const m = this.models[model];
    if (!m || !Number.isFinite(capital) || capital <= 0 || capital > 10000000) return null;
    const target = phase === 'funded' ? null : m.targets[Number(phase)-1];
    if (phase !== 'funded' && target === undefined) return null;
    return {daily:capital*m.daily/100, total:capital*m.total/100, floor:capital*(1-m.total/100), target:target === null ? null : capital*target/100};
  },
  localTime(date, offset, hour=0) {
    const d = new Date(date+'T00:00:00Z');
    if (!Number.isFinite(d.getTime())) return 'Date invalide';
    d.setUTCHours(hour-Number(offset));
    return new Intl.DateTimeFormat('fr-CA',{timeZone:'America/Toronto',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(d);
  }
};
function renderFundedNext() {
  stopExamTimer(); state.activeModule = null;
  setActiveNav('fundednext'); renderSidebar();
  if (window.innerWidth <= 900) setSidebarOpen(false);
  const help = 'https://help.fundednext.com/en/articles/';
  const source = (url,label='Source officielle') => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} <span class="fn-external">(nouvel onglet)</span></a>`;
  const official = 'https://fundednext.com/general-rules/cfds/';
  content.innerHTML = `<article class="fn-page">
    <header class="fn-header"><p>Référence CFD · Vérifiée le 29 septembre 2026</p><h1>Règles FundedNext</h1><p>Les conditions de ton compte, avant ta prochaine position.</p><p class="fn-disclaimer">Guide indépendant de Djonia, sans affiliation. Synthèse datée, sans mise à jour automatique : les conditions de ton achat et les restrictions de ton tableau de bord doivent être vérifiées. Les comptes Futures ne sont pas couverts.</p></header>
    <section class="fn-section" aria-labelledby="fn-account-title"><h2 id="fn-account-title">Mon compte</h2>
    <div class="fn-fields"><label>Modèle<select id="fn-model"><option value="two">Stellar 2-Step</option><option value="one">Stellar 1-Step</option><option value="lite">Stellar Lite</option><option value="instant">Stellar Instant · fiche officielle</option></select></label>
    <label>Étape<select id="fn-phase"><option value="1">Challenge · Phase 1</option><option value="2">Challenge · Phase 2</option><option value="funded">Compte après validation</option></select></label>
    <label>Capital initial (USD)<input id="fn-capital" type="number" min="1" max="10000000" step="1" value="6000" inputmode="decimal"></label></div>
    <div id="fn-limits" aria-live="polite"></div>
    <p>Seuils contractuels, pas un budget de risque conseillé. Les calculs ne lisent ni ton compte MT5, ni tes positions.</p>
    ${source(official+'trading-objectives','Objectifs et limites par modèle')}</section>
    <section class="fn-section fn-weekend"><h2>Puis-je garder une position le week-end ?</h2><p><strong>Oui, pour les challenges Stellar 1-Step, 2-Step et Lite, ainsi que leurs comptes après validation.</strong> Le maintien la nuit est également autorisé. Les limites de perte restent actives.</p><p>Compte avec swaps : les indices, dont l’US30, ont un triple swap le vendredi selon la FAQ. Vérifie le taux et les sessions de ton symbole dans MT5, clic droit → Spécification. Le swap compte dans les pertes ; un gap peut entraîner une sortie au-delà du Stop prévu. Le maintien autorisé ne garantit pas une exécution au prix demandé.</p>${source(help+'11982358-does-fundednext-allow-holding-trades-over-the-night-weekend')}</section>
    <section class="fn-section"><h2>Perte quotidienne et changement de journée</h2><p>La limite quotidienne comprend les résultats clôturés du jour, le flottant, les swaps et commissions. Les gains clôturés la veille ne compensent plus le flottant dans le calcul du nouveau jour. Une position conservée peut donc entraîner un dépassement à minuit serveur.</p><p>Exemple 2-Step 6 000 $ : 180 $ de pertes clôturées + 110 $ de perte flottante + 15 $ de frais non encore inclus = 305 $, au-delà des 300 $. Ne compte pas deux fois les frais déjà compris dans le résultat.</p>${source(help+'8019811-how-can-i-calculate-the-daily-loss-limit')}</section>
    <section class="fn-section"><h2>Heures de Montréal</h2><p>Choisis la <strong>date côté serveur</strong> et son décalage UTC constaté. Montréal est converti automatiquement avec ses changements d’heure. Le décalage du serveur est à confirmer dans MT5 ; il n’est pas deviné par le site.</p><div class="fn-fields"><label>Date serveur<input id="fn-date" type="date" value="2026-09-29"></label><label>Décalage serveur<select id="fn-offset"><option value="3">UTC+3</option><option value="2">UTC+2</option></select></label></div><p id="fn-time" aria-live="polite"></p><p>La fenêtre de settlement 00 h–02 h serveur fait l’objet d’une surveillance des stratégies exploitant la faible liquidité. Cela ne constitue pas une interdiction générale de conserver toute position pendant ces heures.</p>${source(help+'8394309-when-does-the-daily-loss-limit-reset-with-fundednext-cfd','Remise à zéro quotidienne')} · ${source(help+'8020351-what-are-the-restricted-prohibited-trading-strategies','Settlement et restrictions')}</section>
    <section class="fn-section"><h2>Annonces économiques</h2><p id="fn-news"></p><p>Sur les comptes Stellar concernés après validation : fenêtre de 5 minutes avant et après une annonce majeure répertoriée liée au symbole. Seuls 40 % des bénéfices concernés sont retenus, contre 100 % des pertes. Ouverture, fermeture, SL, TP et fermeture partielle sont concernés ; une fermeture partielle peut affecter l’ordre entier. Le simple maintien est autorisé. Ce traitement précède le partage de récompense.</p>${source(help+'10701447-is-news-trading-allowed-at-fundednext')}</section>
    <section class="fn-section"><h2>Risque cumulé après validation</h2><p>La FAQ des FundedNext Accounts plafonne le risque à 3 % à un instant donné, y compris les entrées fractionnées d’une même idée. Ce n’est pas une limite de 3 % pour chaque ticket. Les paramètres individuels peuvent être plus stricts.</p><p>Première violation : avertissement et déduction des gains concernés. Deuxième violation sur le même compte : plafond permanent ramené à 1 %. Swaps et commissions sont exclus de ce calcul spécifique du risque, mais restent compris dans les limites de perte. Vérifie « Risk Parameters » dans ton tableau de bord.</p><p id="fn-risk" aria-live="polite"></p>${source(help+'14702245-what-are-the-risk-limits-on-a-fundednext-account')}</section>
    <section class="fn-section"><h2>Pratiques à éviter</h2><ul><li>Surlevier, paris all-in et surexposition concentrée.</li><li>HFT, tick scalping, grid trading, arbitrage ou exploitation de latence et de bugs.</li><li>Exploitation du settlement ou de la faible liquidité ; sacrifice répété de comptes.</li><li>Partage de compte ou d’appareil avec d’autres traders, gestion par un tiers et services de passage de challenge.</li></ul><p>Quick Strike : trades clos dans les 30 secondes. Avertissement à 20 % des bénéfices du cycle provenant de ces trades ; violation à partir de 30 %. Challenge : progression suspendue. Après validation : déductions et possible fermeture en fin de cycle selon la procédure.</p>${source(help+'8020351-what-are-the-restricted-prohibited-trading-strategies','Liste et sanctions complètes')}</section>
    <section class="fn-section"><h2>Copie, couverture et outils automatiques</h2><p>Copie entre tes propres challenges seulement sous conditions, jusqu’à 300 000 $ cumulés et avec un compte maître. Copie impliquant un compte après validation, copie d’autrui et services cloud externes interdits. Couverture permise au sein d’un compte, pas entre comptes ou brokers.</p><p>La page générale exige des options payantes EA et VPS sur les petits comptes MT4/MT5. Ne suppose pas qu’elles sont incluses. Certaines FAQ sont moins précises : vérifie ton achat avant utilisation. Trader toi-même sur MT5 après ton analyse TradingView n’est pas un service de copie.</p>${source(official+'what-is-allowed')}</section>
    <section class="fn-section"><h2>Durée, récompenses et contrat</h2><p>Pas de date limite pour réussir le challenge, mais désactivation après 60 jours sans trade. Les jours de maintien d’une seule position ne remplacent pas les jours de trading requis. Consulte le compteur officiel.</p><p>Pour le 2-Step standard : première récompense après 21 jours, puis 14 jours sous conditions. Les options 3 jours et à la demande ont leurs propres critères. Le remboursement des frais et les options doivent être confirmés dans ton achat.</p><p>Vérification d’identité et revue de conformité requises. Le contrat contient des clauses supplémentaires, dont des sanctions et une pénalité contractuelle annoncée de 25 000 USD pour certaines pratiques interdites. Cette fiche ne détermine pas leur applicabilité juridique.</p>${source(help+'9430969-what-is-the-trading-cycle-count-in-my-stellar-2-step-fundednext-account','Cycles 2-Step')} · ${source('https://fundednext.com/cfd-challenge-terms','Conditions contractuelles')}</section>
    <section class="fn-section"><h2>Ma vérification avant une position</h2><p>Conseil pédagogique : ces cases ne certifient pas la conformité de ton compte.</p><div class="fn-checks">${['Mon modèle, ma phase et mes restrictions personnelles sont vérifiés.','Mon risque cumulé et les pertes flottantes restent sous les seuils.','Les annonces, les heures serveur et les swaps sont vérifiés.','Mon Stop et mon objectif sont définis, avec une marge pour les coûts.'].map(t=>`<label><input type="checkbox"> <span>${t}</span></label>`).join('')}</div></section>
    <button class="secondary-button" id="fn-home" type="button">Retour à l’accueil</button>
  </article>`;
  const model=document.getElementById('fn-model'), phase=document.getElementById('fn-phase'), capital=document.getElementById('fn-capital');
  const money=n=>new Intl.NumberFormat('fr-CA',{style:'currency',currency:'USD'}).format(n);
  const update=()=>{
    const instant=model.value==='instant';
    phase.disabled=instant; capital.disabled=instant;
    phase.querySelector('[value="2"]').disabled=model.value==='one';
    if(model.value==='one' && phase.value==='2') phase.value='1';
    const r=fundedNextRules.calculate(model.value,phase.value,Number(capital.value));
    const out=document.getElementById('fn-limits');
    if(instant) out.innerHTML='<p>Stellar Instant possède un drawdown suiveur : aucun plancher statique n’est calculé ici. Consulte la fiche et ton tableau de bord.</p>'+source('https://help.fundednext.com/en/collections/13178489-stellar-instant','Règles Stellar Instant');
    else if(!r) out.textContent='Saisis un capital positif, au maximum 10 000 000 USD.';
    else {const m=fundedNextRules.models[model.value];out.innerHTML=`<div class="fn-metrics">${[['Objectif de phase',r.target===null?'Selon option de récompense':money(r.target)],['Limite quotidienne',money(r.daily)],['Perte totale maximale',money(r.total)],['Plancher initial statique',money(r.floor)]].map(([a,b])=>`<div><span>${a}</span><strong>${b}</strong></div>`).join('')}</div><p>${phase.value==='funded'?'Après validation : consulte les conditions de ton option de récompense.':m.days+' jours distincts minimum dans cette phase.'} Le plancher total n’est pas le seuil quotidien et ne représente pas ta perte encore disponible.</p>`;}
    document.getElementById('fn-news').textContent=instant?'Stellar Instant : consulte sa FAQ dédiée ; ne transpose pas automatiquement les règles de challenge.':phase.value==='funded'?'Étape sélectionnée : la règle de bénéfices autour des annonces s’applique.':'Étape sélectionnée : challenge, sans réduction des bénéfices liée aux annonces selon la FAQ.';
    document.getElementById('fn-risk').textContent=instant?'Instant : confirmer les paramètres propres au compte.':r && phase.value==='funded'?`Repères sur ce capital : 3 % = ${money(Number(capital.value)*.03)} ; 1 % = ${money(Number(capital.value)*.01)}.`:'Le plafond spécifique présenté ici concerne les comptes après validation ; le challenge reste soumis aux interdictions de sur-risque.';
  };
  [model,phase].forEach(el=>el.addEventListener('change',update));capital.addEventListener('input',update);update();
  const times=()=>{const date=document.getElementById('fn-date').value, offset=document.getElementById('fn-offset').value;document.getElementById('fn-time').textContent=`Minuit serveur : ${fundedNextRules.localTime(date,offset)} à Montréal. Fin de fenêtre settlement (02 h serveur) : ${fundedNextRules.localTime(date,offset,2)} à Montréal.`;};
  ['fn-date','fn-offset'].forEach(id=>document.getElementById(id).addEventListener('change',times));times();
  document.getElementById('fn-home').addEventListener('click',renderDashboard);
  content.focus(); window.scrollTo({top:0,behavior:'auto'});
}
document.getElementById('fundedNextButton').addEventListener('click',renderFundedNext);
