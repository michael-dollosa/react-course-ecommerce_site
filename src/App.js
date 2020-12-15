import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAdnSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null
  componentDidMount() {
    //methods in auth library from firebase //inside is a function where the param is the user state
    //if there is a change of state (user signed in)
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => { 
      if(userAuth) {
        //if userAuth has obj returned, use createUserProfileDocument we imported from firebase util
        const userRef = await createUserProfileDocument(userAuth) // createUserProfileDocument always return an object -> this will be stored under const userRef

        
        //send snapShot object of the data that is currently in our database
        userRef.onSnapshot(snapShot => {
          //updated current user state based on snapShot object
          this.setState({
            id: snapShot.id,
            ...snapShot.data() //we need to use .data() to see the data under the snapShot obj
          })
        })
      }
      //updated current user state
      this.setState({ currentUser: userAuth })
    })            
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAdnSignUpPage} />
        </Switch>
    
      </div>
      
    );
  }
  
}


export default App;
