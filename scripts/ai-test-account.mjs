import {createClient} from '@supabase/supabase-js';

const testAccounts=['4b5436c6-8b3d-4ebd-8469-b8746ccccd1d','6bf60b23-61d9-4e2e-a3f7-ab80ee0dafed',
  '53a049ad-effc-4f41-a515-2ab88ba97d2e','d2518da8-5f85-4a1d-83f4-402dc89027c6'];
// Explicitly authorized dedicated accounts only. Credentials and one-time links
// stay in process memory and are never printed or included in QA reports.
export async function aiTestAccount(accountIndex=Number(process.env.AI_PRACTICE_TEST_ACCOUNT_INDEX??0)) {
  if(!Number.isInteger(accountIndex)||accountIndex<0||accountIndex>=testAccounts.length)throw Error('Use an authorized dedicated test account');
  const url=process.env.VITE_SUPABASE_URL,publicKey=process.env.VITE_SUPABASE_ANON_KEY;
  const secret=process.env.SUPABASE_SECRET_KEY||process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!url||!publicKey||!secret)throw Error('Local Supabase test configuration required');
  const options={auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}};
  const admin=createClient(url,secret,options),user=createClient(url,publicKey,options);
  const account=await admin.auth.admin.getUserById(testAccounts[accountIndex]);
  if(account.error||!account.data.user?.email)throw Error('Existing dedicated test account required');
  const email=account.data.user.email;
  const link=await admin.auth.admin.generateLink({type:'magiclink',email});
  if(link.error||!link.data.properties?.hashed_token)throw Error('Test sign-in could not be generated');
  const verified=await user.auth.verifyOtp({token_hash:link.data.properties.hashed_token,type:'email'});
  if(verified.error||!verified.data.session?.access_token||verified.data.user?.id!==testAccounts[accountIndex])throw Error('Test sign-in failed');
  return {user,admin,userId:verified.data.user.id,token:verified.data.session.access_token,publicKey,url};
}
