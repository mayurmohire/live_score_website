import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 
apiKey: "AIzaSyD5VKDH5EujJTgS8g_rDt95Q-WCyc98dec",
  authDomain: "authentication-aa0c4.firebaseapp.com",
  projectId: "authentication-aa0c4",
  storageBucket: "authentication-aa0c4.appspot.com",
  messagingSenderId: "879914555071",
  appId: "1:879914555071:web:50a3d04451d558c6f7d80a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };