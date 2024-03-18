# expo-todo

Simple todo app with user authentication.

## Add Firebase
Create a file `firebaseConfig.js` and include your firebase credentials.
```
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FIRESTORE_DB = getFirestore(app);

export { FIRESTORE_DB };
```