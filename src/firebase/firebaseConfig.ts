// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "influ-connect.firebaseapp.com",
  projectId: "influ-connect",
  storageBucket: "influ-connect.appspot.com",
  messagingSenderId: "219476626049",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-LK1YJN632Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();
// provider.addScope('user_birthday')

export { auth, provider };
