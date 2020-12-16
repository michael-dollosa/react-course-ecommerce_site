//actions are just functions that returns objects
//these objects should be in a correct format based on the reducers

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER', //this is the exact same string from our user-reducer
    payload: user
})