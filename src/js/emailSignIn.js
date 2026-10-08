const KEY='dp_email_signin_v1';
export const SIGNIN_COPY={
  en:{title:'Sign in',intro:'Use your email to sign in or create an account.',continue:'Continue with email',check:'Check your email',destination:'Enter the code sent to {email}.',link:'Open the sign-in link sent to {email}.',code:'Email code',verify:'Sign in',resend:'Send another code',resendLink:'Send another link',wait:'Send again in {seconds}s',change:'Use another email',sending:'Sending…',verifying:'Checking…',expired:'That sign-in link has expired. Request a new code below.',invalid:'That code is invalid or has expired. Check it or request another.',rate:'Please wait a moment before requesting another code.',delivery:'We couldn’t send the email. Try again shortly.',connection:'Could not connect. Your details are still here.',missing:'Enter the code from your email.',access:'Have an access code?'},
  no:{title:'Logg inn',intro:'Bruk e-posten din for å logge inn eller opprette en konto.',continue:'Fortsett med e-post',check:'Sjekk e-posten din',destination:'Skriv inn koden sendt til {email}.',link:'Åpne innloggingslenken sendt til {email}.',code:'E-postkode',verify:'Logg inn',resend:'Send en ny kode',resendLink:'Send en ny lenke',wait:'Send på nytt om {seconds} s',change:'Bruk en annen e-post',sending:'Sender …',verifying:'Sjekker …',expired:'Innloggingslenken er utløpt. Be om en ny kode nedenfor.',invalid:'Koden er feil eller utløpt. Sjekk den eller be om en ny.',rate:'Vent litt før du ber om en ny kode.',delivery:'Kunne ikke sende e-posten. Prøv igjen om litt.',connection:'Kunne ikke koble til. Opplysningene dine er fortsatt her.',missing:'Skriv inn koden fra e-posten.',access:'Har du en tilgangskode?'}
};
export function authCallbackFailure(href) {
  const url=new URL(href),fragment=new URLSearchParams(url.hash.slice(1));
  const code=url.searchParams.get('error_code')||fragment.get('error_code');
  if(!url.searchParams.has('error')&&!fragment.has('error')&&!code)return null;
  const expired=['otp_expired','email_link_expired'].includes(code);
  for(const key of ['error','error_code','error_description','access_token','refresh_token','expires_in','expires_at','token_type','type']){url.searchParams.delete(key);fragment.delete(key);}
  url.hash=fragment.toString();return {code:expired?'expired':'connection',cleanUrl:url.href};
}
export function emailSignInError(error) {
  if(error?.status===429||['over_email_send_rate_limit','over_request_rate_limit'].includes(error?.code))return 'rate';
  if(['otp_expired','invalid_credentials','otp_disabled'].includes(error?.code))return 'invalid';
  if(['email_address_not_authorized','unexpected_failure','email_send_failed'].includes(error?.code))return 'delivery';
  return 'connection';
}
export function createEmailSignIn({container,form,email,submit,intro,status,getLanguage,getMode=()=> 'code',configured,send,verify,onVerified}) {
  const n=(tag,text='')=>{const e=document.createElement(tag);e.textContent=text;return e;};
  const codeForm=n('form');codeForm.id='auth-code-form';codeForm.hidden=true;
  const label=n('label');label.htmlFor='auth-code';label.className='form-label';
  const code=n('input');code.id='auth-code';code.name='code';code.inputMode='numeric';code.autocomplete='one-time-code';code.pattern='[0-9]{6}';code.maxLength=6;code.required=true;code.setAttribute('aria-describedby','auth-signin-status');
  const button=n('button');button.type='submit';button.className='primary-button';button.id='auth-verify';codeForm.append(label,code,button);
  const actions=n('div');actions.className='auth-secondary-actions';actions.hidden=true;
  const resend=n('button'),change=n('button');resend.type=change.type='button';resend.id='auth-resend';change.id='auth-change-email';resend.className=change.className='ghost-button ghost-button--small';actions.append(resend,change);
  container.append(codeForm,actions,status);status.setAttribute('aria-live','polite');email.required=true;email.setAttribute('autocapitalize','none');email.spellcheck=false;
  let pending=null,busy=false,message='',timer=null,generation=0;
  const copy=()=>SIGNIN_COPY[getLanguage()==='no'?'no':'en'];
  try{const saved=JSON.parse(sessionStorage.getItem(KEY)||'null');if(saved&&typeof saved.email==='string'&&saved.email.length<255&&saved.expires>Date.now())pending=saved;}catch{}
  function persist(){try{pending?sessionStorage.setItem(KEY,JSON.stringify(pending)):sessionStorage.removeItem(KEY);}catch{}}
  function paint() {
    const s=copy(),mode=pending?.mode||getMode(),waiting=!!pending;intro.textContent=waiting?(mode==='code'?s.destination:s.link).replace('{email}',pending.email):s.intro;
    if(!container.hidden)document.getElementById('account-heading').textContent=waiting?s.check:s.title;
    form.hidden=waiting;codeForm.hidden=!waiting||mode!=='code';actions.hidden=!waiting;
    submit.textContent=busy?s.sending:s.continue;submit.disabled=busy||!configured();email.disabled=busy;
    label.textContent=s.code;button.textContent=busy?s.verifying:s.verify;button.disabled=busy;code.disabled=busy;
    const remaining=Math.max(0,Math.ceil(((pending?.resendAt||0)-Date.now())/1000));
    resend.textContent=remaining?s.wait.replace('{seconds}',remaining):mode==='code'?s.resend:s.resendLink;resend.disabled=busy||remaining>0;change.textContent=s.change;change.disabled=busy;
    status.textContent=s[message]||'';status.hidden=!message;
    clearTimeout(timer);if(waiting&&remaining)timer=setTimeout(paint,1000);
  }
  async function request(event) {
    event?.preventDefault();if(busy)return;
    const destination=(pending?.email||email.value).trim().toLowerCase();if(!destination||destination.length>254)return;
    const current=++generation;busy=true;message='';paint();
    try {
      const mode=getMode();await send(destination,{mode,languageId:getLanguage()});if(current!==generation)return;
      pending={email:destination,mode,resendAt:Date.now()+60000,expires:Date.now()+30*60000};persist();code.value='';paint();
    }catch(error){if(current===generation)message=emailSignInError(error);}
    finally{if(current===generation){busy=false;paint();if(pending?.mode==='code')code.focus();else if(pending){intro.tabIndex=-1;intro.focus();}}}
  }
  async function check(event) {
    event.preventDefault();if(busy||!pending)return;
    if(!/^\d{6}$/.test(code.value)){message='missing';paint();return;}
    const current=++generation;busy=true;message='';paint();
    try{const session=await verify(pending.email,code.value);if(current!==generation)return;pending=null;persist();code.value='';await onVerified(session);}
    catch(error){if(current===generation){message=emailSignInError(error);code.focus();}}
    finally{if(current===generation){busy=false;paint();if(message)code.focus();}}
  }
  form.addEventListener('submit',request);resend.addEventListener('click',()=>void request());codeForm.addEventListener('submit',check);
  code.addEventListener('input',()=>{code.value=code.value.replace(/\D/g,'').slice(0,6);});
  code.addEventListener('paste',event=>{const digits=(event.clipboardData?.getData('text')||'').replace(/\D/g,'');if(digits){event.preventDefault();code.value=digits.slice(0,6);}});
  change.addEventListener('click',()=>{pending=null;persist();message='';code.value='';paint();email.focus();});
  return {render:paint,focus(){(pending?.mode==='code'?code:email).focus();},hasCode:()=>pending?.mode==='code',
    signedIn(){generation++;pending=null;busy=false;message='';code.value='';persist();clearTimeout(timer);paint();},
    recover(kind='expired'){generation++;pending=null;busy=false;message=kind;code.value='';persist();paint();}};
}
