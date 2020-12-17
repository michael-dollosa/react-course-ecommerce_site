import { createSelector } from 'reselect'

//input selector - function that usually takes below structure. It gets the whole state and returns a slice of it
//in below example, it gets selectCart from state
const selectCart = state => state.cart
//const selectCartItems = state => state.selectCartItems

export const selectCartItems = createSelector( //since we used createSelector, it is now eh memoized selector
    [selectCart], //collection of input selectors
    cart => {
        console.log('carItem console log', cart.cartItems)
        return cart.cartItems
    } //function that will return the value we want out of the selector
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
     [selectCartItems],
     cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity,
                0
        )
 )


 export const selectCartTotal = createSelector(
     [selectCartItems],
     cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity * cartItem.price,
                0
        )
 )