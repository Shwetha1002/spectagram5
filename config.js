import firebase from 'firebase';
  const firebaseConfig = {
    apiKey: "AIzaSyCECst99aC2RZomWmMYWap5qv2a2SwSPGM",
    authDomain: "spectagram-7f0fb.firebaseapp.com",
    databaseURL: "https://spectagram-7f0fb-default-rtdb.firebaseio.com",
    projectId: "spectagram-7f0fb",
    storageBucket: "spectagram-7f0fb.appspot.com",
    messagingSenderId: "993378921974",
    appId: "1:993378921974:web:c190f849d59e06c3376bd7",
    measurementId: "G-LTZBNT7SPL"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  
  export default firebase.database();