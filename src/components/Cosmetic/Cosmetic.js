import React from 'react';
import { addTODb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        // console.log('item added',id);
        // localStorage.setItem(id,1)
        addTODb(id);
    }
    // const addToCartWithParam =()=> addToCart(id)
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>id: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            <button onClick={()=>addToCart(id) }>Purchase</button>
        </div>
    );
};

export default Cosmetic; 