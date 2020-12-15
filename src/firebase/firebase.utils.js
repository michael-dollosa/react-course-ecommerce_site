import firebase from 'firebase/app' //importing firebase
import 'firebase/firestore' //importing firestore - this will be imported under firebase in line 1
import 'firebase/auth' //importing auth - this will be imported under firebase in line 1

//this is our application config in firebase
const config = {
    apiKey: "AIzaSyDEw9U9RcYASOipif1-8invPH15oBv9yr4",
    authDomain: "crwn-db-854ea.firebaseapp.com",
    projectId: "crwn-db-854ea",
    storageBucket: "crwn-db-854ea.appspot.com",
    messagingSenderId: "59517056010",
    appId: "1:59517056010:web:622df4879b2a589a7d5bf3",
    measurementId: "G-9NWBCX7TRT"
  };

//we created an async function to create Document (data)
export const createUserProfileDocument = async(userAuth, additionalData) => {
    //userAuth comes from signIn if null, return none, if it has an object, continue through
    if(!userAuth) return

    //firestore.doc would help us query in firestore the "user/user.uid" if it is existing.
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get() //.get() method to see if it is existing

    //if does not exist, create record
    if(!snapShot.exist) {
        const { displayName, email } = userAuth //deconstruct
        const createdAt = new Date() //current date when this was invoked

        //error handling since this is under async function
        try {
            //if we want to create data, we need to use documentRef (userRef) - .set() is the create method
            await userRef.set({ //create user using data from userAuth obj
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef //we return data in case userRef should be used elsewhere

}

firebase.initializeApp(config) //this is to initialize firebase using config variable above

//exported auth and firestore so we can use it elsewhere
export const auth = firebase.auth()
export const firestore = firebase.firestore()

//there are a lot of providers (see docs) but in this app, we will only use Google Auth
const provider = new firebase.auth.GoogleAuthProvider()
//we set the "prompt window" parameters of Google auth 
provider.setCustomParameters({ prompt: 'select_account'}) 
//we always want to trigger google popup when we use google login. we use export so we can use this elsewhere
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase //usual export of whole firebase util