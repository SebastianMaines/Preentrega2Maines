import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


function Navbar() {
    const { cart } = useContext(CartContext);

    return (
        <nav>
            <Link to="/">Inicio</Link>
            <div className="nav-links">
                <Link to="/category/electronica">Electrónica</Link>
                <Link to="/category/libros">Libros</Link>
                <Link to="/category/ropa">Ropa</Link>
                <Link to="/cart">Carrito ({cart.length})</Link>
            </div>
        </nav>
    );
}

export default Navbar;
