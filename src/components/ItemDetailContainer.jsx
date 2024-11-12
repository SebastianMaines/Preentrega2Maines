// src/components/ItemDetailContainer.jsx

import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { getItemById } from '../mock/fetchData';



function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [successMessage, setSuccessMessage] = useState(false); // Estado para el mensaje de éxito
    const navigate = useNavigate(); // Para navegar a la página principal

    useEffect(() => {
        getItemById(id).then(setItem);
    }, [id]);

    const handleAddToCart = () => {
        addToCart(item);
        setSuccessMessage(true); // Muestra el mensaje de éxito
        setTimeout(() => setSuccessMessage(false), 2000); // Oculta el mensaje después de 2 segundos
    };

    if (!item) return <p>Cargando producto...</p>;

    return (
        <div className="container item-detail">
            <img src={item.image} alt={item.name} />
            <div className="item-detail-content">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p className="price">Precio: ${item.price}</p>
                <button onClick={handleAddToCart}>Agregar al Carrito</button>

                {successMessage && (
                    <div className="success-message">
                        Producto agregado al carrito con éxito.
                    </div>
                )}

                <button onClick={() => navigate('/')} className="back-button">
                    Volver a la página principal
                </button>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
