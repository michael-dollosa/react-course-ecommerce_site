//this is needed to create the store

import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist' //allows browser to cache the store
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = []

//to only show logger in dev env and not on prod
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

export default { store, persistor }