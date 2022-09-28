import React from 'react';
import { addTODb, deleteShoppingCartFromDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        
        addTODb(id);
    }
    const removeFromCart = id => {
    //    console.log('removing',id);
        removeFromDb(id);
    }
    const deleteShoppingCart = id => {
        deleteShoppingCartFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Purchase</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={()=>deleteShoppingCart(id) }>Remove from LS</button>
        </div>
    );
};

export default Cosmetic; 