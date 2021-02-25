// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAHHJTGjvSvPh1ebFx0DJMgvFDLJAwWSkA",
    authDomain: "slack-clone-ac1cc.firebaseapp.com",
    projectId: "slack-clone-ac1cc",
    storageBucket: "slack-clone-ac1cc.appspot.com",
    messagingSenderId: "813859271089",
    appId: "1:813859271089:web:42754e67061ee69cd14d90",
    measurementId: "G-98MF0Q5PED"
  };

  // initialize
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();// firestore is the real time database

export default db;