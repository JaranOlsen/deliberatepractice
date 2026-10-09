import {createBillingService} from './generated/server/billingService.js';
import {createAccountStore,createAccountAuthorizer} from './generated/server/accountServicesStore.js';
import {createAccountServicesHandler} from './generated/server/accountServicesHttp.js';
import {createPracticeContentService,createContentScopeReader} from './generated/server/practiceContentService.js';
import {catalog} from './generated/catalog.js';
const url=Deno.env.get('SUPABASE_URL')!;
const publishableKey=Deno.env.get('SUPABASE_ANON_KEY')||JSON.parse(Deno.env.get('SUPABASE_PUBLISHABLE_KEYS')||'{}').default;
const secretKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')||JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS')||'{}').default;
const store=createAccountStore({url,secretKey});
const billing=createBillingService({secretKey:Deno.env.get('STRIPE_SECRET_KEY'),webhookSecret:Deno.env.get('STRIPE_WEBHOOK_SECRET'),
 monthlyPrice:Deno.env.get('STRIPE_PRICE_MONTHLY'),yearlyPrice:Deno.env.get('STRIPE_PRICE_YEARLY'),portalConfiguration:Deno.env.get('STRIPE_PORTAL_CONFIGURATION'),
 liveEnabled:Deno.env.get('STRIPE_LIVE_ENABLED')==='true',taxEnabled:Deno.env.get('STRIPE_AUTOMATIC_TAX')==='true',apiVersion:Deno.env.get('STRIPE_API_VERSION')||undefined,store});
const content=createPracticeContentService({...catalog,scopeFor:createContentScopeReader({url,publishableKey})});
// Public status and signed Stripe webhooks need no Supabase gateway JWT.
// Every account/content action independently verifies Auth identity in the body.
Deno.serve(createAccountServicesHandler({billing,content,authorize:createAccountAuthorizer({url,publishableKey})}));
