import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyBTATt4ckjNes0tvpPoSeLs8dBaaHoV2Ac",
    authDomain: "netflix-clone-74b49.firebaseapp.com",
    databaseURL: "https://netflix-clone-74b49-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-74b49",
    storageBucket: "netflix-clone-74b49.appspot.com",
    messagingSenderId: "464693240837",
    appId: "1:464693240837:web:6569b63e7a81cdbe12686c"
  }

const firebase = window.firebase.initializeApp(config);


ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
