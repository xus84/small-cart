import React from 'react';
import { Product } from './Product';
import  './Main.css';

export const Main = (props) => {
    const {products, onAdd} = props;
    return (
        <div className="main">
            <h3>Products</h3>
            <div className="row">
                {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd} />
                ))}
               
            </div>
        </div>
    )
}
