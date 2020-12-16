//it gets a state object (current state from the redux store) and action
//the action is an object that has a type and payload

/*
//sample action
{
    type: SET_UP_TYPE_NAME,
    payload: //this can be anything - it can be an object to update state etc..
}
*/

//since when component first mounts, the state in our reducer will be null. so we need to initialize it first
//we create an object to initialize state and give it a initial value under userReducer
const INITIAL_STATE = {
    currentUser:null
}


const userReducer = (state = INITIAL_STATE, action)  => {
    //we need a switch statement so we can setup the action of the function based on action
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer