import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAdnSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import CheckOutPage from './pages/checkout/checkout.component';

class App extends React.Component {

  
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props
    //methods in auth library from firebase //inside is a function where the param is the user state
    //if there is a change of state (user signed in)
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => { 
      if(userAuth) {
        //if userAuth has obj returned, use createUserProfileDocument we imported from firebase util
        const userRef = await createUserProfileDocument(userAuth) // createUserProfileDocument always return an object -> this will be stored under const userRef

        
        //send snapShot object of the data that is currently in our database
        userRef.onSnapshot(snapShot => {
          //updated current user state based on snapShot object
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data() //we need to use .data() to see the data under the snapShot obj
          })
        })
      }
      //updated current user state
      setCurrentUser(userAuth)
    })            
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAdnSignUpPage />)} />
        </Switch>
    
      </div>
      
    );
  }
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //for redux to know that whatever you are passing me is going to be an action object that will be passed to ALL reducers
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
