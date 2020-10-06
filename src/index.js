import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDOEptWWfzlQAGoHBVSw8NODm5gvMMzuRE",
  authDomain: "ruscht-im-app.firebaseapp.com",
  databaseURL: "https://ruscht-im-app.firebaseio.com",
  projectId: "ruscht-im-app",
  storageBucket: "ruscht-im-app.appspot.com",
  messagingSenderId: "570151019005",
  appId: "1:570151019005:web:7a2ed92a22d0cec2c0f994",
  measurementId: "G-N9MF4VCL7Y",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
