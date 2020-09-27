import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCbzrHblS-fT84kqcApSlNcRWla26mg5So",
  authDomain: "cart-7b0f0.firebaseapp.com",
  databaseURL: "https://cart-7b0f0.firebaseio.com",
  projectId: "cart-7b0f0",
  storageBucket: "cart-7b0f0.appspot.com",
  messagingSenderId: "1065598203228",
  appId: "1:1065598203228:web:2b209f44dc77d5e245fd99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  //<React.StrictMode>
    <App />,
 // </React.StrictMode>,
  document.getElementById('root')
);