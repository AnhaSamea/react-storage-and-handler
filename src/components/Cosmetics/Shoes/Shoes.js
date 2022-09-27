import React from 'react';
import { multiply } from '../../../utilities/calculate';

const Shoes = () => {
    const first = 45;
    const second = 4;
    const total = multiply(first, second);
    return (
        <div>
            <h3>This is shoe section</h3>
            <p>Total : {total }</p>
        </div>
    );
};

export default Shoes;