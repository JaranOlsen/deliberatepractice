import {BillingError} from './billingService.js';
import {BILLING_PROTOCOL} from '../src/data/subscriptionPlans.js';
const uuid=value=>typeof value==='string'&&/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(value);
export function createAiPromotions({store,now=Date.now}){
 function identity(user){if(!uuid(user?.id)||!user.email_confirmed_at||user.is_anonymous)throw new BillingError('sign_in_required',401);}
 async function admin(user){identity(user);if(!await store.isPromoAdmin(user.id))throw new BillingError('admin_required',403);}
 const normalize=value=>typeof value==='string'?value.trim().toUpperCase():'';
 async function redeem(user,input){
  identity(user);if(Object.keys(input??{}).some(k=>k!=='code'))throw new BillingError('invalid_request');
  const code=normalize(input?.code);if(!/^[A-Z0-9-]{8,40}$/.test(code))throw new BillingError('promo_unavailable');
  const value=await store.redeemPromo(user.id,user.email,code);
  if(value.state==='limited')throw new BillingError('promo_limit',429);
  if(!['added','already'].includes(value.state))throw new BillingError('promo_unavailable');
  return {protocol:BILLING_PROTOCOL,...value};
 }
 async function create(user,input){
  await admin(user);
  if(Object.keys(input??{}).some(k=>!['code','label','credits','maxUses','expiresAt','email'].includes(k)))throw new BillingError('invalid_request');
  const code=normalize(input?.code),email=input?.email?.trim().toLowerCase()||null,label=input?.label?.trim()||'';
  const expires=Date.parse(input?.expiresAt);
  if(!/^[A-Z0-9-]{8,40}$/.test(code)||label.length>80||!Number.isInteger(input?.credits)||input.credits<1||input.credits>3600
   ||!Number.isInteger(input?.maxUses)||input.maxUses<1||input.maxUses>1000||!Number.isFinite(expires)||expires<=now()||expires>now()+366*86400000
   ||email&&(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254))throw new BillingError('invalid_promo');
  const result=await store.createPromo(user.id,{code,label,credits:input.credits,maxUses:input.maxUses,expiresAt:new Date(expires).toISOString(),email});
  return {protocol:BILLING_PROTOCOL,promo:result,code};
 }
 async function list(user){await admin(user);return {protocol:BILLING_PROTOCOL,promos:await store.promos()};}
 async function disable(user,input){await admin(user);if(!uuid(input?.id)||Object.keys(input??{}).some(k=>k!=='id'))throw new BillingError('invalid_request');await store.disablePromo(input.id);return {protocol:BILLING_PROTOCOL,disabled:true};}
 return {redeem,create,list,disable};
}
