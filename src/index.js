import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6XphAE-3ivFPiAoeYrz93yZphO2_2RhM",
    authDomain: "cloud-note-a2af0.firebaseapp.com",
    databaseURL: "https://cloud-note-a2af0.firebaseio.com",
    projectId: "cloud-note-a2af0",
    storageBucket: "cloud-note-a2af0.appspot.com",
    messagingSenderId: "359197394406",
    appId: "1:359197394406:web:086a84436981b5f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render( < App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();