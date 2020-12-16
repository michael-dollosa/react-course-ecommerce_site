/*
    Util files are used to make code cleaner. It has functions that are used in some files

    //addItemToCart
    cartItems - this is the current state of all the items in the cart
    cartItemToAdd - cart item to add

    function will check if cartItemToAdd already exists in state
*/

export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        // if exisitingCartItem is true, it means cartItemToAdd is already exisiting in the cart (state)
        //so we will return an object that have modified quantity property using .map
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id //checking if iterated cartItem id is equal to the item to be added
            ? { ...cartItem, quantity: cartItem.quantity + 1} //increment of quantity property
            : cartItem //just return cartItem if false
            )
    }

    //if cartItem is not found in the array
    return [...cartItems, {...cartItemToAdd, quantity: 1 }] // pushing the new item to the array (state) with the quantity of 1
}