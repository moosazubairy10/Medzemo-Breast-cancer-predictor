import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyALfM_aUTdUgvWEnw60paOeFuquBSxszdg",
  authDomain: "astute-atlas-228016.firebaseapp.com",
  databaseURL: "https://astute-atlas-228016.firebaseio.com",
  projectId: "astute-atlas-228016",
  storageBucket: "astute-atlas-228016.appspot.com",
  messagingSenderId: "388797503205",
  appId: "1:388797503205:web:2a096148a9f1dc1792260c"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
