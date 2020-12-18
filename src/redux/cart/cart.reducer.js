import { CartActionTypes } from './cart.types'
import { addItemToCart, decreaseItemCount } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //using addItemToCart from utils js
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id //it just means that if action.payload (the specific cart Item) is not in current cart state, then return true
                )
            }
        case CartActionTypes.DECREASE_ITEM_COUNT:
            return{
                ...state,
                cartItems: decreaseItemCount(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer