import React, { useState, useEffect } from 'react';
import { alphaSort } from '../helpers/data_helpers';
import { getAllDrinks } from '../services/api';
import CardCont from './reusables/CardCont';

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllDrinks()
      .then(data => {
        const { drinks: nonAlcDrinks } = data[0];
        const { drinks: alcDrinks } = data[0];
        const allDrinks = [...nonAlcDrinks, ...alcDrinks];
        // Not necessary since .sort is destructive??
        const sortedDrinks = alphaSort(allDrinks);
        setDrinks(sortedDrinks);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);
  return (
    <div className="content">
      {/* Heading */}
      <div>
        <h1 className="display-4 text-center">
          All Drinks
        </h1>
        <p className="lead">
          Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      </div>

      <CardCont isLoading={isLoading} drinks={drinks} isError={isError} />
    </div>
  );
}
