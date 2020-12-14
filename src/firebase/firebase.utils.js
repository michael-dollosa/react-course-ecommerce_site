import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDEw9U9RcYASOipif1-8invPH15oBv9yr4",
    authDomain: "crwn-db-854ea.firebaseapp.com",
    projectId: "crwn-db-854ea",
    storageBucket: "crwn-db-854ea.appspot.com",
    messagingSenderId: "59517056010",
    appId: "1:59517056010:web:622df4879b2a589a7d5bf3",
    measurementId: "G-9NWBCX7TRT"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'}) //we always want to trigger google popup when we use google login
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase