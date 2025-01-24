import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqajL9f4JO4i40vhL3mjPR7HLm7fb3j9E",
  authDomain: "vibecart-d28cb.firebaseapp.com",
  projectId: "vibecart-d28cb",
  storageBucket: "vibecart-d28cb.firebasestorage.app",
  messagingSenderId: "187715542276",
  appId: "1:187715542276:web:f81637b122d4c355254451"
};

const app = initializeApp(firebaseConfig);

export default app;