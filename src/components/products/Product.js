import React, {useState} from 'react';
import './product.css';

const Product = (props) => {
    const {id, title, image, mapLink, city, stateAddress} = props.product;

    return (
        <div className="product-container">
            <img 
                src={image} 
                alt="product"
                className="product-img"
            />
            <h3 className="product-title">{title}</h3>
            
            <h5 className="product-location">
                <a className="fas fa-map-marker-alt" src={mapLink}></a>
                {`  ${city}, ${stateAddress}`}
            </h5>
        </div>
    )
};

export default Product;