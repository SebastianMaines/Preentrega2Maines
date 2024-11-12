// src/components/Cart.jsx

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container">
            <h1>Carrito de Compras</h1>
            {cart.length > 0 ? (
                cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                            <h2>{item.name}</h2>
                            <p className="cart-item-price">${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>El carrito está vacío.</p>
            )}
            {cart.length > 0 && (
                <>
                    <div className="cart-total">
                        <p>Total: ${total}</p>
                    </div>
                    <button className="checkout-button">Finalizar Compra</button>
                </>
            )}
        </div>
    );
}

export default Cart;
