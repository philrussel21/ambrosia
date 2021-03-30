import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinksFromIng } from '../../services/api';
import CardCont from './CardCont';

export default function Ingredient() {
  const { ingredient } = useParams();
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getDrinksFromIng(ingredient)
      .then(data => {
        const { drinks } = data;
        setDrinks(drinks);
        setIsLoading(false);
      });
  }, [ingredient]);

  return (
    <div className="content">
      {/* Heading */}
      <div>
        <h1 className="display-4 text-center">
          {ingredient}
        </h1>
        <p className="lead">
          Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      </div>

      <CardCont isLoading={isLoading} drinks={drinks} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
