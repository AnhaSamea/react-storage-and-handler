import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    //fetching
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setCosmetics(data))
    },[])
    
    return (
        <div>
            <h1>Cosmetics Store</h1>
            {/* <p>total: {total}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;