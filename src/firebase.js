import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTj891Cm3LZdxtaiayu9hTgMq0irdnMrI",
    authDomain: "whatsapp-clone-65f8a.firebaseapp.com",
    projectId: "whatsapp-clone-65f8a",
    storageBucket: "whatsapp-clone-65f8a.appspot.com",
    messagingSenderId: "570996590035",
    appId: "1:570996590035:web:9f9166abc99ee6de161b26",
    measurementId: "G-5XYW9MYFJM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;