import {createClient} from '@supabase/supabase-js';

const testAccounts=['jaran.olsen@gmail.com','jaran@ipr.no','jaran.olsen@icloud.com','jaran.olsen@hotmail.com'];
// Explicitly authorized dedicated accounts only. Credentials and one-time links
// stay in process memory and are never printed or included in QA reports.
export async function aiTestAccount(email=process.env.AI_PRACTICE_TEST_ACCOUNT||testAccounts[0]) {
  if(!testAccounts.includes(email))throw Error('Use an authorized dedicated test account');
  const url=process.env.VITE_SUPABASE_URL,publicKey=process.env.VITE_SUPABASE_ANON_KEY;
  const secret=process.env.SUPABASE_SECRET_KEY||process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!url||!publicKey||!secret)throw Error('Local Supabase test configuration required');
  const options={auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}};
  const admin=createClient(url,secret,options),user=createClient(url,publicKey,options);
  const link=await admin.auth.admin.generateLink({type:'magiclink',email});
  if(link.error||!link.data.properties?.hashed_token)throw Error('Test sign-in could not be generated');
  const verified=await user.auth.verifyOtp({token_hash:link.data.properties.hashed_token,type:'email'});
  if(verified.error||!verified.data.session?.access_token)throw Error('Test sign-in failed');
  return {user,admin,userId:verified.data.user.id,token:verified.data.session.access_token,publicKey,url};
}
