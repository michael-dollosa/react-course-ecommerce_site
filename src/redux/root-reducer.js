//this root-reducer is the actual base reducer object that represents all the states of our application
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //telling redux persist to use local storage

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //this is an array containing stringnames of any reducer we want to store. no need to persist user since it's in firebase
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})
//we put all the reducers we made into combinedReducer we got from redux library. we export combinedReducer and inputs all our reducer into it
export default persistReducer(persistConfig, rootReducer)