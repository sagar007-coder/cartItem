import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
 import firebase from 'firebase/compat/app';


const firebaseConfig = {
  apiKey: "AIzaSyDxoHcHC4Pxpk8wbfOb0i9psJo-AJegft4",
  authDomain: "cart-40d55.firebaseapp.com",
  projectId: "cart-40d55",
  storageBucket: "cart-40d55.appspot.com",
  messagingSenderId: "387236037930",
  appId: "1:387236037930:web:ffce870c9931b1eae54a53"
};
// Initialize Firebaseco
// console.log("Firebase connected");
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default getFirestore;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// firebase.initializeApp(firebaseConfig);

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();