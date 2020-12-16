//actions are just functions that returns objects
//these objects should be in a correct format based on the reducers
import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, //this is the exact same string from our user-reducer
    payload: user
})