/*
            --------------------
            initial installation
            --------------------
1.  visit: console.firebase.google.com
2.  create a project (skip google analytics)
3.  register AudioParamMap(create config)
4.  install firebase: npm install firebase
5.  add config file to your project
6.  danger: do not publish or make firebase config to public by pushing those to github
            --------------------
            integration
            --------------------
7.visit: go to doc > build > Authentication > web > get started
8.  export app from firebase.config.js or  firebase.init.js file: export default app
9.  Import in login.jsx file:  import { getAuth } from "firebase/auth";
    & create const auth = getAuth(app);
            --------------------
            provider setup
            --------------------   
10. visit: web > google > then import googleAuthProvider & create new GoogleAuthProvider()
11. use signWithPopup and pass auth & googleAuthProvider
12. Activate signIn method:
    visit: project overview > build > authentication > get started > sign-in method >
    select google > click enable, select email & save
13. 

*/