import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "pinit-b066c.firebaseapp.com",
  projectId: "pinit-b066c",
  storageBucket: "pinit-b066c.appspot.com",
  messagingSenderId: "154729771933",
  appId: "1:154729771933:web:621f7e80431702f2087574",
  measurementId: "G-QYBYMNCCX2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
