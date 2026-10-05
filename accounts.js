/* Comptes élèves : SDK chargé seulement si un projet est configuré. */
(() => {
 const config=window.DJONIA_ACCOUNT_CONFIG||{};
 const keys=['djoniaCompleted','djoniaCompletedLessons','djoniaJournal','djoniaExamScores','djoniaQuizScores','djoniaLastModule'];
 const defaults={djoniaCompleted:[],djoniaCompletedLessons:[],djoniaJournal:[],djoniaExamScores:{},djoniaQuizScores:{},djoniaLastModule:null};
 const clone=x=>JSON.parse(JSON.stringify(x));
 const localRead=safeStorage.read.bind(safeStorage),localWrite=safeStorage.write.bind(safeStorage);
 let client=null,user=null,cache=clone(defaults),revision=0,dirty=false,saving=false,blocked=false,ready=false,epoch=0;
 let status='Mode invité · sauvegarde dans ce navigateur';
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
  client=window.supabase.createClient(config.url,config.publishableKey,{auth:{persistSession:false,autoRefreshToken:true,detectSessionInUrl:false}});
  return client;
 }
 async function logout(){
  if(dirty&&!confirm('Des modifications ne sont pas synchronisées. Exporte-les dans Mon compte avant de quitter. Quitter quand même ?'))return;
  ++epoch;user=null;ready=false;cache=clone(defaults);dirty=false;saving=false;blocked=false;hydrate(localSnapshot());announce('Mode invité · sauvegarde dans ce navigateur');renderAccount();
  if(client){try{await client.auth.signOut({scope:'local'});}catch{}}
 }
 function exportData(){const blob=new Blob([JSON.stringify({version:1,progress:cache},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='djonia-ma-progression.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 function renderAccount(){
  stopExamTimer();state.activeModule=null;setActiveNav('account');if(innerWidth<=900)setSidebarOpen(false);
  const total=modules.reduce((n,m)=>n+m.lessons.length,0);
  const done=modules.reduce((n,m)=>n+m.lessons.filter((_,i)=>state.completedLessons.has(`${m.id}:${i}`)).length,0);
  const mastered=modules.filter(m=>Number(state.quizScores?.[m.id])>=80).length;
  content.innerHTML=`<section class="account-page"><h1>Mon compte élève</h1><p>${user?esc(user.email):'Invité — ce parcours appartient au navigateur, pas à une personne identifiée.'}</p>
   <div class="account-metrics"><article><h2>Parcours terminé</h2><strong>${done}/${total} leçons · ${Math.round(done/total*100)} %</strong><progress max="${total}" value="${done}" aria-label="Leçons terminées"></progress></article><article><h2>Modules réussis au quiz</h2><strong>${mastered}/${modules.length}</strong><progress max="${modules.length}" value="${mastered}" aria-label="Modules réussis au quiz"></progress><p>Meilleur score ≥ 80 %. Indicateur d’entraînement, pas une certification ; les cas intégrés restent à réussir.</p></article></div>
   <p role="status" id="accountMessage">${esc(status)}</p>
   ${user?`<p>Ta progression, tes scores, ta dernière leçon et ton journal sont enregistrés dans ton compte. La session reste en mémoire : reconnecte-toi après avoir fermé ou rechargé la page.</p><div class="account-actions"><button id="accountResume">Reprendre mon parcours</button><button id="accountRetry">Réessayer la synchronisation</button><button id="accountExport">Exporter mes données</button><button id="accountReload">Recharger la version du compte</button><button id="accountLogout">Me déconnecter</button></div>`:
   configured?`<p>Connexion ou création de compte par code reçu par courriel. Aucune progression invité n’est importée automatiquement.</p><form id="accountEmailForm"><label>Adresse courriel<input name="email" type="email" autocomplete="email" required maxlength="254"></label><button>Recevoir mon code</button></form><form id="accountCodeForm" hidden><label>Code reçu par courriel<input name="code" inputmode="numeric" autocomplete="one-time-code" required pattern="[0-9]{6,10}" minlength="6" maxlength="10"></label><button>Me connecter</button></form><p>Les données nécessaires au compte (courriel, progression, scores et journal saisi) seront traitées par le service Supabase configuré par Djonia.</p>`:
   `<p><strong>Les comptes en ligne attendent leur activation.</strong> Le propriétaire doit renseigner account-config.js et installer supabase/schema.sql. Les cours restent accessibles en mode invité. Aucun compte fictif n’est créé.</p>`}
   <button id="accountHome">Retour à l’accueil</button></section>`;
  const message=t=>{announce(t);const el=document.getElementById('accountMessage');if(el)el.textContent=t;};
  document.getElementById('accountHome').onclick=renderDashboard;
  if(user){
   document.getElementById('accountLogout').onclick=logout;
   document.getElementById('accountExport').onclick=exportData;
   document.getElementById('accountRetry').onclick=async()=>{blocked=false;await flush();message(status);};
   document.getElementById('accountReload').onclick=async()=>{if(confirm('Remplacer la version affichée par celle du compte ? Exporte les modifications non synchronisées avant de continuer.')){const {data}=await client.auth.getSession();if(data.session)await loadAccount(data.session);}};
   document.getElementById('accountResume').onclick=()=>{const id=cache.djoniaLastModule;openModule(modules.some(m=>m.id===id)?id:(modules.find(m=>lessonProgress(m.id).pct<100)?.id||1));};
  }else if(configured){
   let email='';
   document.getElementById('accountEmailForm').onsubmit=async event=>{
    event.preventDefault();email=event.currentTarget.elements.email.value.trim();const button=event.currentTarget.querySelector('button');button.disabled=true;
    try{const c=await getClient();const {error}=await c.auth.signInWithOtp({email,options:{shouldCreateUser:true}});if(error)throw error;message('Si l’envoi est autorisé, un code arrive par courriel. Vérifie aussi les indésirables.');document.getElementById('accountCodeForm').hidden=false;}
    catch{message('Envoi impossible. Vérifie la connexion et la configuration, puis réessaie.');}finally{button.disabled=false;}
   };
   document.getElementById('accountCodeForm').onsubmit=async event=>{
    event.preventDefault();const token=event.currentTarget.elements.code.value;const button=event.currentTarget.querySelector('button');button.disabled=true;
    try{const {data,error}=await client.auth.verifyOtp({email,token,type:'email'});if(error||!data.session)throw error;await loadAccount(data.session);}
    catch{message('Code invalide ou expiré, ou connexion indisponible. Demande un nouveau code si nécessaire.');}finally{button.disabled=false;}
   };
  }
  content.focus();
 }

 const bar=document.createElement('div');bar.className='account-status';bar.id='accountStatus';bar.setAttribute('role','status');document.querySelector('.main').insertBefore(bar,content);announce(status);
 document.getElementById('accountButton').onclick=renderAccount;
 document.getElementById('profileButton').addEventListener('click',renderAccount);
 document.getElementById('profileButton').innerHTML='<span aria-hidden="true">◎</span><span class="profile-copy">Mon compte<small>Parcours personnel</small></span>';
 document.getElementById('profileButton').setAttribute('aria-label','Ouvrir mon compte élève');
 window.addEventListener('beforeunload',e=>{if(dirty||saving){e.preventDefault();e.returnValue='';}});
 window.addEventListener('online',()=>{if(dirty){blocked=false;void flush();}});
 window.DjoniaAccounts={render:renderAccount,flush,loadAccount,logout,getClient};
})();
