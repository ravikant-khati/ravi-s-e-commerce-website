import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUp3mSwA2SJF2eaS1PmcAXGce52DVgubA",
  authDomain: "myfirstapp-132cf.firebaseapp.com",
  projectId: "myfirstapp-132cf",
  storageBucket: "myfirstapp-132cf.appspot.com",
  messagingSenderId: "47221464262",
  appId: "1:47221464262:web:341fc0cb555045a6844bc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
