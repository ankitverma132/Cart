import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore';

 // Your web app's Firebase configuration


ReactDOM.render(
  //<React.StrictMode>
    <App />,
 // </React.StrictMode>,
  document.getElementById('root')
);