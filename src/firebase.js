import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCADaooPEmcj_8B2sL2-QzQSovQoBcsXFs",
  authDomain: "queueoverflow-46db6.firebaseapp.com",
  databaseURL: "https://queueoverflow-46db6.firebaseio.com",
  projectId: "queueoverflow-46db6",
  storageBucket: "queueoverflow-46db6.appspot.com",
  messagingSenderId: "1019630250342"
});

export const db = firebaseApp.firestore();
