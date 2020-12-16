//this root-reducer is the actual base reducer object that represents all the states of our application
import { combineReducers } from 'redux'

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'

//we put all the reducers we made into combinedReducer we got from redux library. we export combinedReducer and inputs all our reducer into it
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})