/* Comptes élèves : SDK chargé seulement si un projet est configuré. */
(() => {
 const config=window.DJONIA_ACCOUNT_CONFIG||{};
 const keys=['djoniaCompleted','djoniaCompletedLessons','djoniaJournal','djoniaExamScores','djoniaQuizScores','djoniaLastModule'];
 const defaults={djoniaCompleted:[],djoniaCompletedLessons:[],djoniaJournal:[],djoniaExamScores:{},djoniaQuizScores:{},djoniaLastModule:null};
 const clone=x=>JSON.parse(JSON.stringify(x));
 const localRead=safeStorage.read.bind(safeStorage),localWrite=safeStorage.write.bind(safeStorage);
 let client=null,user=null,cache=clone(defaults),revision=0,dirty=false,saving=false,blocked=false,ready=false,epoch=0,authChecked=false;
 let status='Connexion requise pour accéder à la formation';
 const configured=!!(config.url&&config.publishableKey);
 function announce(message){status=message;document.getElementById('accountStatus').textContent=message;}
 function hydrate(data){
  state.completedLessons=new Set(Array.isArray(data.djoniaCompletedLessons)?data.djoniaCompletedLessons:[]);
  state.completed=new Set(modules.filter(m=>m.lessons.every((_,i)=>state.completedLessons.has(`${m.id}:${i}`))).map(m=>m.id));
  state.journal=Array.isArray(data.djoniaJournal)?data.djoniaJournal:[];
  state.examScores=data.djoniaExamScores||{};state.quizScores=data.djoniaQuizScores||{};
  state.activeModule=null;stopExamTimer();renderSidebar();renderDashboard();
 }
 function localSnapshot(){return Object.fromEntries(keys.map(k=>[k,localRead(k,clone(defaults[k]))]));}
 safeStorage.read=(key,fallback)=>user&&keys.includes(key)?clone(cache[key]??fallback):localRead(key,fallback);
 safeStorage.write=(key,value)=>{
  if(!user||!keys.includes(key))return localWrite(key,value);
  if(!ready)return false;
  cache[key]=clone(value);dirty=true;announce('Modifications en attente de synchronisation');void flush();return true;
 };
 async function flush(){
  if(!user||!ready||saving||blocked||!dirty)return;
  saving=true;const ticket=epoch;
  try{
   while(dirty&&ticket===epoch){
    dirty=false;const payload=clone(cache);
    const {data,error}=await client.rpc('save_learning_state',{expected_revision:revision,new_payload:payload});
    if(ticket!==epoch)return;
    if(error){dirty=true;blocked=true;throw error;}
    revision=Number(data);announce('Progression synchronisée avec ton compte');
   }
  }catch(e){if(ticket===epoch)announce('Non synchronisé : connexion interrompue ou modification sur un autre appareil. Ouvre Mon compte pour réessayer ou exporter.');}
  finally{if(ticket===epoch)saving=false;}
 }
 async function loadAccount(session){
  const ticket=++epoch;ready=false;user=session.user;cache=clone(defaults);revision=0;dirty=false;saving=false;blocked=false;
  hydrate(cache);announce('Chargement du compte…');
  const {data,error}=await client.from('learning_state').select('payload,revision').eq('user_id',user.id).maybeSingle();
  if(ticket!==epoch)return;
  if(error){user=null;hydrate(localSnapshot());announce('Chargement impossible. Déconnecte-toi puis réessaie ; progression du compte non disponible.');renderAccount();return;}
  cache={...clone(defaults),...(data?.payload||{})};revision=data?.revision||0;ready=true;hydrate(cache);announce('Compte connecté · progression synchronisée');renderAccount();
 }
 async function getClient(){
  if(client)return client;
  if(!configured)throw Error('Configuration Supabase manquante.');
  if(!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(config.url))throw Error('URL Supabase invalide.');
  if(config.publishableKey.startsWith('sb_secret_'))throw Error('Utilise uniquement la clé publique publishable.');
  if(!window.supabase) await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.2/dist/umd/supabase.js';script.onload=resolve;script.onerror=()=>{script.remove();reject(Error('Impossible de charger le service de connexion.'));};document.head.append(script);});
  client=window.supabase.createClient(config.url,config.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  return client;
 }
 async function signInWithGoogle(){
  try{
   const c=await getClient();
   const {error}=await c.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.href.split('#')[0]}});
   if(error)throw error;
   announce('Redirection vers Google…');
  }catch{announce('Connexion Google impossible. Vérifie la configuration Supabase et Google OAuth.');renderAccount();}
 }
 async function sendPasswordReset(email){
  const c=await getClient();
  return c.auth.resetPasswordForEmail(email,{redirectTo:location.href.split('#')[0]+'#reset-password'});
 }
 async function updatePassword(password){
  const c=await getClient();
  return c.auth.updateUser({password});
 }
 async function logout(){
  if(dirty&&!confirm('Des modifications ne sont pas synchronisées. Exporte-les dans Mon compte avant de quitter. Quitter quand même ?'))return;
  ++epoch;user=null;ready=false;cache=clone(defaults);dirty=false;saving=false;blocked=false;hydrate(localSnapshot());announce('Connexion requise pour accéder à la formation');renderAccount();
  if(client){try{await client.auth.signOut({scope:'local'});}catch{}}
 }
 function exportData(){const blob=new Blob([JSON.stringify({version:1,progress:cache},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='djonia-ma-progression.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 function renderAccount(){
  stopExamTimer();state.activeModule=null;setActiveNav('account');if(innerWidth<=900)setSidebarOpen(false);
  const total=modules.reduce((n,m)=>n+m.lessons.length,0);
  const done=modules.reduce((n,m)=>n+m.lessons.filter((_,i)=>state.completedLessons.has(`${m.id}:${i}`)).length,0);
  const mastered=modules.filter(m=>Number(state.quizScores?.[m.id])>=80).length;
  content.innerHTML=`<section class="account-page"><h1>${user?'Mon compte élève':'Connexion obligatoire'}</h1><p>${user?esc(user.email):'Connecte-toi pour accéder à la formation, enregistrer ta progression et protéger ton parcours.'}</p>
   <div class="account-metrics"><article><h2>Parcours terminé</h2><strong>${done}/${total} leçons · ${Math.round(done/total*100)} %</strong><progress max="${total}" value="${done}" aria-label="Leçons terminées"></progress></article><article><h2>Modules réussis au quiz</h2><strong>${mastered}/${modules.length}</strong><progress max="${modules.length}" value="${mastered}" aria-label="Modules réussis au quiz"></progress><p>Meilleur score ≥ 80 %. Indicateur d’entraînement, pas une certification ; les cas intégrés restent à réussir.</p></article></div>
   <p role="status" id="accountMessage">${esc(status)}</p>
   ${user?`<p>Ta progression, tes scores, ta dernière leçon et ton journal sont enregistrés dans ton compte.</p><div class="account-actions"><button id="accountResume">Reprendre mon parcours</button><button id="accountRetry">Réessayer la synchronisation</button><button id="accountExport">Exporter mes données</button><button id="accountReload">Recharger la version du compte</button><button id="accountLogout">Me déconnecter</button></div><details class="account-password"><summary>Modifier mon mot de passe Supabase</summary><p>Les comptes Google changent leur mot de passe directement chez Google. Cette option sert aux comptes email/mot de passe Supabase.</p><form id="accountPasswordForm"><label>Nouveau mot de passe<input name="password" type="password" autocomplete="new-password" required minlength="8" maxlength="72"></label><button>Mettre à jour le mot de passe</button></form></details>`:
   configured?`<div class="account-login-panel"><p>L’accès aux modules demande une connexion. Utilise ton compte Google pour continuer.</p><button id="accountGoogleLogin" class="account-google" type="button">Continuer avec Google</button></div><details class="account-password"><summary>Mot de passe oublié ?</summary><p>Si tu utilises Google, réinitialise ton mot de passe depuis ton compte Google. Si Djonia t’a créé un compte email/mot de passe Supabase, demande un lien de réinitialisation ici.</p><form id="accountResetForm"><label>Adresse courriel<input name="email" type="email" autocomplete="email" required maxlength="254"></label><button>Recevoir un lien de réinitialisation</button></form><form id="accountRecoveryForm" hidden><label>Nouveau mot de passe<input name="password" type="password" autocomplete="new-password" required minlength="8" maxlength="72"></label><button>Enregistrer le nouveau mot de passe</button></form></details><p>Les données nécessaires au compte seront traitées par le service Supabase configuré par Djonia.</p>`:
   `<p><strong>Les comptes en ligne attendent leur activation.</strong> Le propriétaire doit renseigner account-config.js et installer supabase/schema.sql. Les cours restent accessibles en mode invité. Aucun compte fictif n’est créé.</p>`}
   ${user||!configured?'<button id="accountHome">Retour à l’accueil</button>':''}</section>`;
  const message=t=>{announce(t);const el=document.getElementById('accountMessage');if(el)el.textContent=t;};
  document.getElementById('accountHome')?.addEventListener('click',renderDashboard);
  if(user){
   document.getElementById('accountLogout').onclick=logout;
   document.getElementById('accountExport').onclick=exportData;
   document.getElementById('accountRetry').onclick=async()=>{blocked=false;await flush();message(status);};
   document.getElementById('accountReload').onclick=async()=>{if(confirm('Remplacer la version affichée par celle du compte ? Exporte les modifications non synchronisées avant de continuer.')){const {data}=await client.auth.getSession();if(data.session)await loadAccount(data.session);}};
   document.getElementById('accountResume').onclick=()=>{const id=cache.djoniaLastModule;openModule(modules.some(m=>m.id===id)?id:(modules.find(m=>lessonProgress(m.id).pct<100)?.id||1));};
   document.getElementById('accountPasswordForm').onsubmit=async event=>{
    event.preventDefault();const button=event.currentTarget.querySelector('button');button.disabled=true;
    try{const {error}=await updatePassword(event.currentTarget.elements.password.value);if(error)throw error;event.currentTarget.reset();message('Mot de passe mis à jour.');}
    catch{message('Modification impossible. Pour un compte Google, utilise la récupération Google.');}finally{button.disabled=false;}
   };
  }else if(configured){
   document.getElementById('accountGoogleLogin').onclick=signInWithGoogle;
   const recoveryForm=document.getElementById('accountRecoveryForm');
   if(location.hash==='#reset-password')recoveryForm.hidden=false;
   document.getElementById('accountResetForm').onsubmit=async event=>{
    event.preventDefault();const button=event.currentTarget.querySelector('button');button.disabled=true;
    try{const {error}=await sendPasswordReset(event.currentTarget.elements.email.value.trim());if(error)throw error;message('Si ce compte existe, un lien de réinitialisation vient d’être envoyé.');}
    catch{message('Impossible d’envoyer le lien de réinitialisation pour le moment.');}finally{button.disabled=false;}
   };
   recoveryForm.onsubmit=async event=>{
    event.preventDefault();const button=event.currentTarget.querySelector('button');button.disabled=true;
    try{const {error}=await updatePassword(event.currentTarget.elements.password.value);if(error)throw error;location.hash='';message('Mot de passe mis à jour. Connecte-toi avec ton compte.');}
    catch{message('Lien expiré ou modification impossible. Demande un nouveau lien.');}finally{button.disabled=false;}
   };
  }
  content.focus();
 }
 function gateNavigation(event){
  if(!configured||user)return;
  const target=event.target.closest?.('button,a,input,select,textarea,summary');
  if(!target||target.closest('.account-page'))return;
  if(target.id==='accountButton'||target.id==='profileButton')return;
  event.preventDefault();event.stopPropagation();announce('Connecte-toi avec Google pour accéder à la formation.');renderAccount();
 }
 async function initAuth(){
  if(!configured){authChecked=true;return;}
  try{
   const c=await getClient();
   const {data}=await c.auth.getSession();
   authChecked=true;
   if(data.session)await loadAccount(data.session);else renderAccount();
   c.auth.onAuthStateChange((_event,session)=>{if(session?.user)void loadAccount(session);else if(authChecked)logout();});
  }catch{authChecked=true;announce('Connexion indisponible. Vérifie la configuration Supabase.');renderAccount();}
 }

 const bar=document.createElement('div');bar.className='account-status';bar.id='accountStatus';bar.setAttribute('role','status');document.querySelector('.main').insertBefore(bar,content);announce(status);
 document.getElementById('accountButton').onclick=renderAccount;
 document.getElementById('profileButton').addEventListener('click',renderAccount);
 document.getElementById('profileButton').innerHTML='<span aria-hidden="true">◎</span><span class="profile-copy">Mon compte<small>Parcours personnel</small></span>';
 document.getElementById('profileButton').setAttribute('aria-label','Ouvrir mon compte élève');
 window.addEventListener('beforeunload',e=>{if(dirty||saving){e.preventDefault();e.returnValue='';}});
 window.addEventListener('online',()=>{if(dirty){blocked=false;void flush();}});
 document.addEventListener('click',gateNavigation,true);
 window.DjoniaAccounts={render:renderAccount,flush,loadAccount,logout,getClient};
 void initAuth();
})();
