/**--------------
 * InITIAL SETUP
 * --------------
 * 1. visit: console.firebase.google.com 
 * 2. create project (skip google analytics)
 * 3. register app (create config)
 * 4. install firebase: npm install firebase 
 * 5. add config file to your project
 * 6. Danger: do not publish or make firebase config to public by
 * *--------------
 * INTEGRATION
 * --------------
 * 7. visit: go to docs > build > authentication > web > get started
 * 8. export app from the firebase.config.js file : export defult app
 * 9. Login.jsx import getauth from firebase/auth 
 * 10. create const auth = getauth(app)
 * 
 * *--------------
 * pROVIDER SETUP
 * --------------
 * 11. import googleAuthProvider and create a new provider
 * 12.use signInWithPopUp and pass auth and provider 
 * 13. activate sing-in method (google, facebook ,)
 * 14. [vite]: change 127.0.01  to localhost 
 */