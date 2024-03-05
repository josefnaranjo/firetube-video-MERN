import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPwIWCtrbjsxUu4APDcIcqmpSJov_8ToI",
  authDomain: "web-client-dbc99.firebaseapp.com",
  projectId: "web-client-dbc99",
  storageBucket: "web-client-dbc99.appspot.com",
  messagingSenderId: "904689535939",
  appId: "1:904689535939:web:fc83460493403fa9ff0b76"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;