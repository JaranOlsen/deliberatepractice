import {BILLING_PROTOCOL,FULL_ACCESS_PRICES} from '../data/subscriptionPlans.js';
import {BILLING_LEGAL_URLS} from '../data/billingBusiness.js';

const COPY={en:{title:'Full access',month:'Monthly',year:'Yearly',perMonth:'per month',perYear:'per year',benefit:'All cases and group hosting',subscribe:'Subscribe',manage:'Manage subscription',test:'Test checkout',working:'Opening checkout…',checking:'Checking your subscription…',pending:'Payment hasn’t been confirmed yet. Refresh your access in a moment.',refresh:'Refresh access',cancelled:'Checkout was cancelled.',signin:'Sign in above to subscribe.',renews:'Access until {date}',cancel:'Ends on {date}',error:'Checkout could not open. Try again.',notReady:'Subscriptions aren’t ready yet.',attention:'Your subscription needs attention.',active:'Subscription active'},
 no:{title:'Full tilgang',month:'Månedlig',year:'Årlig',perMonth:'per måned',perYear:'per år',benefit:'Alle kasus og vertstilgang for grupper',subscribe:'Abonner',manage:'Administrer abonnement',test:'Testbetaling',working:'Åpner betaling …',checking:'Sjekker abonnementet …',pending:'Betalingen er ikke bekreftet ennå. Oppdater tilgangen om litt.',refresh:'Oppdater tilgang',cancelled:'Betalingen ble avbrutt.',signin:'Logg inn ovenfor for å abonnere.',renews:'Tilgang til {date}',cancel:'Avsluttes {date}',error:'Kunne ikke åpne betalingen. Prøv igjen.',notReady:'Abonnement er ikke tilgjengelig ennå.',attention:'Abonnementet trenger oppfølging.',active:'Abonnementet er aktivt'}};
export function createBillingApi({base,getToken,publishableKey,fetcher=fetch}) {
 async function call(action,body) {
  const token=await getToken();if(body&&!token)throw Error('sign_in_required');
  const response=await fetcher(`${base}/${action}`,{method:body?'POST':'GET',headers:{apikey:publishableKey,
   ...(token?{Authorization:`Bearer ${token}`}:{Authorization:`Bearer ${publishableKey}`}),...(body?{'Content-Type':'application/json'}:{})},
   ...(body?{body:JSON.stringify(body)}:{}),signal:AbortSignal.timeout(65000)});
  const value=await response.json();if(!response.ok)throw Error(value.error||'billing_unavailable');
  if(value.protocol!==BILLING_PROTOCOL)throw Error('billing_unavailable');return value;
 }
 return {status:()=>call('status'),checkout:body=>call('checkout',body),portal:languageId=>call('portal',{languageId})};
}
export function createSubscriptionView({container,api,getUser,getLanguage,getAccess,isAiAdmin,refreshAccess}) {
 const node=(tag,text='',className='')=>{const e=document.createElement(tag);e.textContent=text;e.className=className;return e;};
 const element=node('section','','subscription-section');element.id='billing-section';container.prepend(element);
 let status=null,interval='month',busy=false,message='',generation=0;
 COPY.en.busyCheckout='Checkout is already opening. Try again in a moment.';
 COPY.no.busyCheckout='Betalingen er allerede på vei til å åpnes. Prøv igjen om litt.';
 COPY.en.ended='Subscription ended.';COPY.no.ended='Abonnementet er avsluttet.';
 COPY.en.paused='Subscription access is paused. Contact support.';COPY.no.paused='Abonnementstilgangen er satt på pause. Kontakt kundestøtte.';
 COPY.en.payment='Manage your subscription to resolve the payment.';COPY.no.payment='Åpne abonnementsadministrasjonen for å ordne betalingen.';
 const c=()=>COPY[getLanguage()==='no'?'no':'en'];
 const money=amount=>new Intl.NumberFormat(getLanguage()==='no'?'nb-NO':'en-GB',{style:'currency',currency:'NOK',maximumFractionDigits:0}).format(amount/100);
 function render() {
  const access=getAccess(),subscription=access?.subscription,user=getUser(),allowed=status?.mode==='live'||status?.mode==='test'&&isAiAdmin();
  element.hidden=!subscription&&!allowed||access?.full_content&&!subscription&&status?.mode!=='test';element.replaceChildren();if(element.hidden)return;
  element.append(node('h4',c().title));
  if(status?.mode==='test')element.append(node('span',c().test,'subscription-test-badge'));
  if(subscription) {
   const paid=Date.parse(subscription.paid_through)>Date.now()&&['active','past_due'].includes(subscription.status),date=paid?new Date(subscription.paid_through).toLocaleDateString(getLanguage()==='no'?'nb-NO':'en-GB'):'';
   element.append(node('p',subscription.access_paused?c().paused:['past_due','unpaid','incomplete','paused'].includes(subscription.status)?c().payment:!paid?c().ended:subscription.cancel_at_period_end?c().cancel.replace('{date}',date):c().renews.replace('{date}',date)));
   if(status?.portalAvailable){const manage=node('button',c().manage,'ghost-button');manage.type='button';manage.id='billing-manage';manage.disabled=busy;manage.addEventListener('click',()=>void openPortal());element.append(manage);}
  }
  if(!subscription || ['canceled','incomplete_expired'].includes(subscription.status)) {
   element.append(node('p',c().benefit,'response-hint'));
   const options=node('div','','subscription-options');options.setAttribute('role','group');options.setAttribute('aria-label',c().title);
   for(const value of ['month','year']){const b=node('button','','ghost-button');b.type='button';b.dataset.billingInterval=value;b.setAttribute('aria-pressed',String(interval===value));
    b.append(node('span',c()[value]),node('strong',money(FULL_ACCESS_PRICES[value])));b.disabled=busy;b.addEventListener('click',()=>{interval=value;render();element.querySelector(`[data-billing-interval="${value}"]`).focus();});options.append(b);}
   element.append(options);
   element.append(node('p',getLanguage()==='no'?`Fornyes automatisk ${interval==='month'?'hver måned':'hvert år'}. Si opp når som helst.`:`Renews automatically ${interval==='month'?'monthly':'yearly'}. Cancel anytime.`,'subscription-renewal'));
   if(user){const b=node('button',busy?c().working:c().subscribe,'primary-button');b.type='button';b.id='billing-subscribe';b.disabled=busy;b.addEventListener('click',()=>void subscribe());element.append(b);}
   else element.append(node('p',c().signin,'response-hint'));
  }
  const links=node('nav','','subscription-legal');links.setAttribute('aria-label',getLanguage()==='no'?'Vilkår og personvern':'Terms and privacy');
  for(const [key,label] of [['terms',getLanguage()==='no'?'Vilkår':'Terms'],['privacy',getLanguage()==='no'?'Personvern':'Privacy']]){const link=node('a',label);link.href=`${BILLING_LEGAL_URLS[key]}?lang=${getLanguage()==='no'?'no':'en'}`;link.target='_blank';link.rel='noopener';links.append(link);}element.append(links);
  const note=node('p',c()[message]||'', 'form-status');note.id='billing-status';note.setAttribute('role','status');note.hidden=!message;element.append(note);
  if(message==='pending'){const b=node('button',c().refresh,'ghost-button');b.type='button';b.id='billing-refresh';b.addEventListener('click',()=>void checkReturn());element.append(b);}
 }
 async function refresh(){const current=++generation;try{status=await api.status();}catch{status=null;}if(current===generation)render();}
 async function action(task){if(busy)return;const current=++generation;busy=true;message='';render();try{const result=await task();if(current!==generation)return;
  const target=new URL(result.url);if(!['https://checkout.stripe.com','https://billing.stripe.com'].includes(target.origin))throw Error('billing_unavailable');window.location.assign(target.href);
 }catch(error){if(current===generation){if(error.message==='already_subscribed'){try{await refreshAccess();message=getAccess()?.subscription?'':'pending';}catch{message='pending';}}else message=error.message==='checkout_pending'?'busyCheckout':['billing_unavailable','billing_configuration'].includes(error.message)?'notReady':'error';}}
 finally{if(current===generation){busy=false;render();}}}
 async function subscribe(){const user=getUser();if(!user)return;let attemptId;
  const key=`dp_checkout_${user.id}_${interval}`;try{attemptId=sessionStorage.getItem(key);}catch{}
  if(!/^[0-9a-f-]{36}$/i.test(attemptId||'')){attemptId=crypto.randomUUID();try{sessionStorage.setItem(key,attemptId);}catch{}}
  await action(()=>api.checkout({interval,attemptId,languageId:getLanguage()==='no'?'no':'en'}));
 }
 async function openPortal(){await action(()=>api.portal(getLanguage()==='no'?'no':'en'));}
 async function checkReturn(){if(!getUser())return;const current=++generation;message='checking';render();
  for(let i=0;i<8;i++){try{await refreshAccess();}catch{if(current===generation){message='pending';render();}return;}if(current!==generation)return;const subscription=getAccess()?.subscription;
   if(subscription&&!subscription.access_paused&&['active','past_due'].includes(subscription.status)&&Date.parse(subscription.paid_through)>Date.now()){
    try{for(const value of ['month','year'])sessionStorage.removeItem(`dp_checkout_${getUser().id}_${value}`);}catch{}
    message='';render();return;
   }await new Promise(resolve=>setTimeout(resolve,2500));}
  if(current===generation){message='pending';render();}
 }
 return {element,render,refresh,checkReturn,cancelled(){message='cancelled';render();},reset(){generation++;busy=false;message='';render();}};
}
