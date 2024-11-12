// src/mock/fetchData.js

import categories from './categories';
import items from './items';

// Función para obtener categorías
export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories);
        }, 500);
    });
};

// Función para obtener los productos de una categoría específica o todos
export const getItemsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId === 'all') {
                resolve(items); // Devuelve todos los productos si la categoría es 'all'
            } else {
                resolve(items.filter(item => item.categoryId === categoryId)); // Filtra por categoría específica
            }
        }, 500);
    });
};

// Función para obtener un producto específico por su id
export const getItemById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(item => item.id === itemId));
        }, 500);
    });
};
