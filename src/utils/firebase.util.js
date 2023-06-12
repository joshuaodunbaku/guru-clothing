// Imports the functions you need from the SDKs you need
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
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// 1.1. Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxmuHWAPBoGsQbDmujbyYOHCcUV0Tqp6Q",
  authDomain: "guru-clothing-db.firebaseapp.com",
  projectId: "guru-clothing-db",
  storageBucket: "guru-clothing-db.appspot.com",
  messagingSenderId: "51152621538",
  appId: "1:51152621538:web:04ad2df2074a5945ee73bb",
};

// 1.2. Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);
// 1.3. Google Provider; specific to google sign in interface
const googleProvider = new GoogleAuthProvider(); // It is a class gotten from firebase authentication conected to google auth itself

// to tell the provider the way it should behave
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// 1.4. Returns the Auth instance associated with the provided @firebase/app#FirebaseApp. If no instance exists, initializes an Auth instance with platform-specific default dependencies.
const auth = getAuth();

const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// 1.5||2.1 firestore database Instance
const db = getFirestore();

// 2.2 Storing data in firebase firestore database
const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  fieldName
) => {
  const collectionRef = collection(db, collectionKey);
  console.log(collectionRef);
  const batch = writeBatch(db);
  console.log(batch);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[fieldName].toLowerCase());
    console.log(docRef);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Done");
};

// 2.3 getting/fetching the stored data from firebase firestore
const getCategoriesAndDocuments = async () => {
  console.log("Hello from getCategories");
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q); // returns an object we can get/fetch a snapshot from, A DataSnapshot contains data from a Database location. Any time you read data from the Database, you receive the data as a DataSnapshot
  console.log(querySnapshot);
  // we are reducing it to convert the data to an object
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});

  return categoryMap;
};

// 1.* SIGN IN
// a helper function that calls another function to creates a user profile with email and password
const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//1.* a helper function that calls another function to sign in with user profile email and password
const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// 1.* SIGN OUT
const signOutUser = async () => await signOut(auth);

// 1.* AUTHENTICATION STREAM MONITOR
const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
/**
 * {
 *  next: callback,
 *  error: errorCallback
 *  complete: completeCallback
 *  }
 */

// 1.6. CREATE USER DOCUMENT IN FIRESTORE
// creates user document inside the firestore storage
const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    // const createdAt = new Date();
    const createdAt = Timestamp.fromDate(new Date());

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;

  // If user data exists
  // return back the user reference
  // If user data does not exists
  // create / set the document with the data from user auth
};

export {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  db,
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
};
