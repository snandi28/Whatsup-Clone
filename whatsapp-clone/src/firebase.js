// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAvWU-XEYRiqwtgXsPk_IDpzDH0Kl0q2Q8",
    authDomain: "whatsapp-clone-977a8.firebaseapp.com",
    projectId: "whatsapp-clone-977a8",
    storageBucket: "whatsapp-clone-977a8.appspot.com",
    messagingSenderId: "403701851741",
    appId: "1:403701851741:web:1f352274bbd3fe67fbcfb4",
    measurementId: "G-BQR5N8JHMD"
  };

  const fireBaseApp= firebase.initializeApp(firebaseConfig);
  const db = fireBaseApp.firestore();
  const auth = firebase.auth();
  const provider  = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;