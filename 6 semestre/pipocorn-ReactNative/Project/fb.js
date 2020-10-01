import * as firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB7dOTYANr1f_euxmcmXZlzGl-brZKsMXU",
    authDomain: "blog-37559.firebaseapp.com",
    databaseURL: "https://blog-37559.firebaseio.com",
    projectId: "blog-37559",
    storageBucket: "blog-37559.appspot.com",
    messagingSenderId: "432460334423",
    appId: "1:432460334423:web:66c91a5d352c43c74aaa12",
    measurementId: "G-M60X2F1NE6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;