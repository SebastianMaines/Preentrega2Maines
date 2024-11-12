// src/components/ItemListContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getItemsByCategory } from '../mock/fetchData';


function ItemListContainer() {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getItemsByCategory(id || 'all').then((data) => {
            setItems(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="container">
            <h1>Productos</h1>
            <div className="item-list">
                {items.map(item => (
                    <div key={item.id} className="item-card">
                        <img src={item.image} alt={item.name} />
                        <div className="item-card-content">
                            <h2 className="item-card-title">{item.name}</h2>
                            <p className="item-card-price">${item.price}</p>
                            <Link to={`/item/${item.id}`}>
                                <button>Ver Detalle</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
