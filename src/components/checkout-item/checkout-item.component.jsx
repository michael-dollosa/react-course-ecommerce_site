import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { clearItemFromCart, decreaseItemFromCart, addItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem, decreaseItem, increaseItem}) => {
    
    const {name, imageUrl, price, quantity } = cartItem

    return (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => decreaseItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity} </span>
            <div className="arrow" onClick={() => increaseItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => clearItem(cartItem)} >&#10005;</span>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    decreaseItem: item=>dispatch(decreaseItemFromCart(item)),
    increaseItem: item=>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)