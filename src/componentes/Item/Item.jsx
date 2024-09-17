import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='product-card'>
            <img src={img} alt={nombre} />
            <div className='product-card-info'>
                <h3>{nombre}</h3>
                <p>Precio: ${precio}</p>
                <p>ID: {id}</p>
                <Link className='product-card-button' to={`/item/${id}`}>Ver Detalles</Link>
            </div>
        </div>
    );
}

export default Item;
