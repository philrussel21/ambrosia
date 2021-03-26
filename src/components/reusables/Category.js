import React, { useEffect, useState } from 'react';
import { removeOriginFromPath } from '../../helpers/url_helpers';
import { getDrinksFromCat } from '../../services/api';

import CardCont from './CardCont';

export default function Category({ location }) {
  let category = location.pathname;
  const originPath = "/categories";
  category = removeOriginFromPath(originPath, category);

  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // const DRINKS_PER_PAGE = 10;

  useEffect(() => {
    setIsLoading(true);
    getDrinksFromCat(category)
      .then(data => {
        const { drinks } = data;
        setDrinks(drinks);
        setIsLoading(false);
      });
  }, [category]);

  return (
    <div className="content">
      {/* Heading */}
      <div>
        <h1 className="display-4 text-center">
          {category}
        </h1>
        <p className="lead">
          Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      </div>

      <CardCont isLoading={isLoading} drinks={drinks} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
