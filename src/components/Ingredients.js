import React, { useState, useEffect } from 'react';
import { alphaSort, getStringData } from '../helpers/data_helpers';
import { getAllIng } from '../services/api';
import SelectionCont from './reusables/SelectionCont';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getAllIng()
      .then(data => {
        const { drinks } = data;
        const ingArr = getStringData(drinks);
        const sortedIngArr = alphaSort(ingArr);
        setIngredients(sortedIngArr);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="content">
      {/* Heading */}
      <div>
        <h1 className="display-4 text-center">
          Ingredients
        </h1>
        <p className="lead">
          Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      </div>

      <SelectionCont isLoading={isLoading} data={ingredients} />
    </div>
  );
}
