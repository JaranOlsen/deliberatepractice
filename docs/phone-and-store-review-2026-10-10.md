# Phone layout and app distribution

Reviewed 10 October 2026.

Keep improving the installed web app first. The current application can provide a browser-bar-free Home Screen experience without a store release. Its cutout problem comes from missing safe-area padding, not from a fundamental limit of web apps. A store version becomes worthwhile when distribution, reminders or native audio integration are concrete priorities.

## Immediate changes

- Honor the device's top, bottom and side safe areas, including landscape. The header stays available while scrolling. Ordinary screens retain compact spacing; centered pages avoid adding redundant cutout padding.
- Size dialogs to the visible viewport as browser bars and keyboards change it. Preserve browser zoom. Keep floating definitions below the header and bottom practice controls above the home indicator.
- Reserve the actual height of the visible practice action bar instead of assuming one fixed size for every role.
- Add a scoped web-app manifest, stable installation identity, icons and standalone launch mode. Keep orientation flexible. No extra installation or fullscreen buttons are added to the practice screens.
- Keep networked accounts, subscriptions, room state and protected content online. This release does not add an offline cache or promise offline group synchronization.

The app can fill the usable screen and request a standalone installed window. Safari/Chrome control their address bars in ordinary tabs; the website cannot reliably force those away. Physical cutouts and the home indicator still need safe-area treatment in a native app. [WebKit safe areas](https://webkit.org/blog/7929/designing-websites-for-iphone-x/), [web-app manifests](https://web.dev/learn/pwa/web-app-manifest), [Chrome installation criteria](https://developer.chrome.com/blog/update-install-criteria).

## Store options

| Route | Benefits for this app | Work and limits |
| --- | --- | --- |
| Installed web app | No browser bars, Home Screen icon, immediate web updates, existing Stripe and account flow | Manual installation on iPhone; browser-managed permissions and suspension; offline features need separate design |
| Capacitor iOS/Android apps | Store discovery and familiar installation; native notifications, haptics and audio integration; reuse the existing UI | Native project setup, signing, device testing, store reviews and updates; platform billing and account-management work |

Capacitor can be added to an existing JavaScript project with an HTML entry point and built assets. This repository meets that basic structure. A prototype is a modest engineering task; a polished store release has substantially more work. That is an assessment of this repository, not a guaranteed schedule. [Capacitor installation](https://capacitorjs.com/docs/getting-started).

Useful native additions would be opt-in practice reminders, better audio interruption handling, platform share sheets for room invitations and deliberately designed offline individual exercises. A wrapper alone does not guarantee faster rendering, uninterrupted background room synchronization or better AI feedback. Mobile operating systems can suspend native apps too.

Notifications are not exclusive to store apps: Home Screen web apps support Web Push on iOS/iPadOS 16.4 and later. Adding opt-in push would require additional service-worker and server work, but does not require caching live rooms or billing responses. [WebKit Web Push](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/).

## Requirements before a store release

1. Decide the subscription route for each storefront. Digital feature subscriptions generally fall under Apple/Google billing rules, with regional exceptions and programs. The current Stripe purchase button and license-code unlock cannot simply be assumed suitable for an unchanged store build. A free companion app with no in-app purchasing or purchase links is another route to assess under Apple's 3.1.3(f), subject to review. If store billing is used, support purchase restoration, cancellations, refunds and server-verified access across providers. [Apple payment guidelines](https://developer.apple.com/app-store/review/guidelines/#business), [Google Play payments](https://support.google.com/googleplay/android-developer/answer/9858738).
2. Package the UI locally, configure the native asset base and explicitly allow the app's native origins at the protected APIs. Test email-code sign-in, external checkout/portal return, room links and foreground reconnection on real phones.
3. Add native microphone/privacy declarations and test recording, playback and interruption by calls. Keep AI eligibility separate from paid library access.
4. Provide in-app account deletion, store privacy disclosures, screenshots, age/content declarations and a review account. Apple expects useful app functionality beyond a repackaged website. The existing practice, rooms and progress provide a credible base; approval is not guaranteed. [Apple review guidelines](https://developer.apple.com/app-store/review/guidelines/).
5. Enroll and maintain developer accounts. Apple lists USD 99 per membership year, with local pricing; Google lists a USD 25 one-time registration fee. New Google personal accounts also have testing and device-verification requirements. No enrollment or purchase was made for this investigation. [Apple enrollment](https://developer.apple.com/programs/enroll/), [Google registration](https://support.google.com/googleplay/android-developer/answer/6112435).

## Validation limits

Browser emulation can exercise actual CSS safe-area values, portrait/landscape geometry, reduced visible height and enlarged text. It cannot certify a particular iPhone's installed WebKit behavior or reproduce every keyboard/audio interruption. The final handset check should cover a freshly reopened Home Screen app, rotation, sign-in, room readiness/ratings, external payment return and microphone playback.
