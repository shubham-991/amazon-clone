import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGAIlf0W9J1LEIs__ACHQn8wWWUBMY3N0",
  authDomain: "clone-1f60f.firebaseapp.com",
  projectId: "clone-1f60f",
  storageBucket: "clone-1f60f.appspot.com",
  messagingSenderId: "539695226588",
  appId: "1:539695226588:web:d227f00e32177177929e19"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};