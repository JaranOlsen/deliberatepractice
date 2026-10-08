import test from 'node:test';
import assert from 'node:assert/strict';
import {authCallbackFailure,emailSignInError} from '../src/js/emailSignIn.js';

test('expired callback recovery removes auth errors/secrets and preserves the room invitation',()=>{
 const failure=authCallbackFailure('https://example.invalid/app/?room=ABCDEF123456&error_code=otp_expired#error=access_denied&error_description=untrusted&refresh_token=fictional');
 assert.equal(failure.code,'expired');assert.equal(failure.cleanUrl,'https://example.invalid/app/?room=ABCDEF123456');
 assert.equal(authCallbackFailure('https://example.invalid/app/?room=ABCDEF123456'),null);
 assert.equal(authCallbackFailure('https://example.invalid/#error=unknown').code,'connection');
});
test('sign-in errors provide recovery categories without displaying provider messages',()=>{
 assert.equal(emailSignInError({status:429,message:'Private diagnostic'}),'rate');
 assert.equal(emailSignInError({code:'otp_expired'}),'invalid');
 assert.equal(emailSignInError({code:'email_address_not_authorized'}),'delivery');
 assert.equal(emailSignInError(new TypeError('Network unavailable')),'connection');
});
