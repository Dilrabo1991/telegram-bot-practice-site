import React from 'react'
import './Cart.css'
import Button from '../Button'
const Cart = ({ cartItems, onCheckout }) => {

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);



    return (
        <div className='cart__container'>
            {cartItems.length === 0 ? "cart Empty" : ""}

            <br />
            <span className='cart__total'>Total Price: {totalPrice.toFixed(2)}</span>
            <Button title={`${cartItems.length === 0 ? "Order !" : "Checkout"} `}
                type={"checkout"}
                disable={cartItems.length === 0 ? true : false}
                onClick={onCheckout} />
        </div>
    )
}

export default Cart
