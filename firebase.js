import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxVVBQIbyW1AUEya8DVOIhIo6DXJlv9zE",
    authDomain: "mobile-project-24429.firebaseapp.com",
    projectId: "mobile-project-24429",
    storageBucket: "mobile-project-24429.appspot.com",
    messagingSenderId: "451965073967",
    appId: "1:451965073967:web:a8cd2e696fa36b46dca4da",
    measurementId: "G-DVQ0M41T8T"
  };

let app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };