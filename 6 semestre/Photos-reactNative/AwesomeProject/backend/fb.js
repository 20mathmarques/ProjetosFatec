import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaxQgHpKjacC2nz06C79tJa-X11MgMBBk",
    authDomain: "photo-36209.firebaseapp.com",
    databaseURL: "https://photo-36209.firebaseio.com",
    projectId: "photo-36209",
    storageBucket: "photo-36209.appspot.com",
    messagingSenderId: "826273822874",
    appId: "1:826273822874:web:ed8e2f2870896d5d1d0723",
    measurementId: "G-SELC9Q0PG4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  export default firebase
