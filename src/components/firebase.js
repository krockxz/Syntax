import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB_rwSK_el62k-suFC3fsZfNz5obOL7lKI",
  authDomain: "syntaxnest-18fb2.firebaseapp.com",
  projectId: "syntaxnest-18fb2",
  storageBucket: "syntaxnest-18fb2.appspot.com",
  messagingSenderId: "318891065561",
  appId: "1:318891065561:web:f7a01ccec505c9ff2b7ec8",
  measurementId: "G-5T3FM522X3"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
