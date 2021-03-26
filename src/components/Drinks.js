import React, { useState, useEffect } from 'react';
import { alphaSort } from '../helpers/data_helpers';
import { getAllDrinks } from '../services/api';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getAllDrinks()
      .then(data => {
        const { drinks: nonAlcDrinks } = data[0];
        const { drinks: alcDrinks } = data[0];
        const allDrinks = [...nonAlcDrinks, ...alcDrinks];
        // Not necessary since .sort is destructive??
        const sortedDrinks = alphaSort(allDrinks);
        setDrinks(sortedDrinks);
      });

    // TODO : Print out cards with pagination for all the drinks
  }, []);
  return (
    <div>
      {console.log(drinks)}
      Drinks Page
    </div>
  );
}
