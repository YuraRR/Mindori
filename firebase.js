import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_XG0htBGM2QXaCyBKjpNCQ_OdTIXFwKI",
  authDomain: "mindori-7eff1.firebaseapp.com",
  projectId: "mindori-7eff1",
  storageBucket: "mindori-7eff1.appspot.com",
  messagingSenderId: "357467130952",
  appId: "1:357467130952:web:ab2ab83bd22a6d72761c7d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
