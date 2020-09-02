import React, { useState } from 'react';
import './products.css';
import {availableEquipment} from '../../testData.js';
import Product from './Product.js';

const Products = (props) => {

    const initialValue = 'Enter Equipment Type, Brand, Name or Location';
    const [searchValue, setSearchValue] = useState(initialValue || '');

    const equipmentList = availableEquipment;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit value', searchValue);
    };

    const handleChange = (event) => {
        const {target} = event;
        const {value} = target;
        event.persist(); // ?
        setSearchValue(value);
    };

    const handleClear = () => {
        setSearchValue('');
    }

    return (
        <div className="products">
            <h2>Available Equipment</h2>
            <div className="products-search-container">
                <form 
                    className="products-search-form"
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="products-search-input"
                        type="text"
                        name="searchValue"
                        onChange={handleChange}
                        onClick={handleClear}
                        value={searchValue}
                    />
                    <button 
                        className="form-submit products-search"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="products-container">
                {equipmentList.map(product => 
                    <Product 
                        key={product.id}
                        id={product.id} 
                        product={product}
                    />
                )}
            </div>
            
        </div>
    );
};

export default Products;