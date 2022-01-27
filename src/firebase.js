import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARshxXPH5asKo9OBgDGkfBT9jbCFZ-mWU",
  authDomain: "clone-b33cf.firebaseapp.com",
  projectId: "clone-b33cf",
  storageBucket: "clone-b33cf.appspot.com",
  messagingSenderId: "285327051444",
  appId: "1:285327051444:web:16e01671b65320daa1a5e1",
  measurementId: "G-T11JPCWXSW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
