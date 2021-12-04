import React from 'react';
import './Product.css';

function Product() {
    return (
        <div 
        className='prodcut'>
            <div className="prodcut__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Product;