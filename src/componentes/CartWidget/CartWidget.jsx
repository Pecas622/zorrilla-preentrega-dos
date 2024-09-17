import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='product-card'>
            <img className='carrito' src="./img/carrito.jpg" alt="Carrito de compras" />
            <strong>7</strong>
        </div>
    )
}

export default CartWidget