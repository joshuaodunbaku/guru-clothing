// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Timestamp
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxmuHWAPBoGsQbDmujbyYOHCcUV0Tqp6Q",
  authDomain: "guru-clothing-db.firebaseapp.com",
  projectId: "guru-clothing-db",
  storageBucket: "guru-clothing-db.appspot.com",
  messagingSenderId: "51152621538",
  appId: "1:51152621538:web:04ad2df2074a5945ee73bb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

// Returns the Auth instance associated with the provided @firebase/app#FirebaseApp. If no instance exists, initializes an Auth instance with platform-specific default dependencies.
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// S I G N   I N 
// a helper function that calls another function to creates a user profile with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

// a helper function that calls another function to sign in with user profile email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

// S I G N   O U T 
export const signOutUser = async () => await signOut(auth)

// A U T H E N T I C A T I O N   S T R E A M   M O N I T O R
export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);
  /**
   * {
   *  next: callback,
   *  error: errorCallback
   *  complete: completeCallback
   *  }
   */


// C R E A T E   U S E R   D O C   O F   F I R E B A S E
// creates user document inside the firestore storage
export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    // const createdAt = new Date();
    const createdAt = Timestamp.fromDate(new Date());

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error creating the user", error.message)
    }
  }

  return userDocRef;
  
  // If user data exists
  // return back the user reference
  // If user data does not exists
  // create / set the document with the data from user auth
}

