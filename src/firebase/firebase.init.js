import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlyzVzKMBhucOmGPUnFxlM3foO-BcVxyo",
  authDomain: "b-portal-5fe7b.firebaseapp.com",
  projectId: "b-portal-5fe7b",
  storageBucket: "b-portal-5fe7b.appspot.com", // Note: Updated the URL format for the storage bucket
  messagingSenderId: "724433498853",
  appId: "1:724433498853:web:1f4e25d821f58f531f5a0c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
