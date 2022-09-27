import React from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    /* const first = 50;
    const second = 5;
    const total = add(first,second) */
    const cosmetics = [
        {
          "id": "6332889c733522bd4ea23054",
          "price": 164,
          "name": "Buckner Chaney"
        },
        {
          "id": "6332889cc7be41d2503b5ee3",
          "price": 389,
          "name": "Charmaine Nunez"
        },
        {
          "id": "6332889cbb2c9ec370895fa1",
          "price": 150,
          "name": "Gale Fry"
        },
        {
          "id": "6332889ce82509625986a8a0",
          "price": 158,
          "name": "Jewell Maldonado"
        },
        {
          "id": "6332889c972d28dcfe666953",
          "price": 212,
          "name": "Audra Odom"
        },
        {
          "id": "6332889cfa5aac3a38a2ae88",
          "price": 390,
          "name": "Nelson Rowland"
        }
      ]
    return (
        <div>
            <h1>Cosmetics Store</h1>
            {/* <p>total: {total}</p> */}
            {
                cosmetics.map(cosmetic=> <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;