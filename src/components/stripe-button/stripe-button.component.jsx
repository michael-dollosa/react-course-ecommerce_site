import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hzq1mDKvTdCwkWqGreiCVLsNOZZgy15FCrCAam4DKIHljn2OFQor89LUahTP8MEEo3Qlu9KMdqGDJe6JWCSb3ZF00QtWLvyQs'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        /> 
    )
}

export default StripeCheckoutButton