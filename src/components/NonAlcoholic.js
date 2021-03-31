import React, { useState, useEffect } from 'react';
import { getAllNonAlcDrinks } from '../services/api';
import CardCont from './reusables/CardCont';

export default function NonAlcoholic() {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllNonAlcDrinks()
      .then(data => {
        const { drinks } = data;
        setDrinks(drinks);
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
      <h1 className="display-4 text-center">
        Non-Alcoholic
      </h1>
      <p className="lead">
        Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      <CardCont isLoading={isLoading} drinks={drinks} isError={isError} />
    </div>
  );
}
