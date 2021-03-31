import React, { useEffect, useState } from 'react';
import { removeOriginFromPath } from '../../helpers/url_helpers';
import { getDrinksFromCat } from '../../services/api';

import CardCont from './CardCont';

export default function Category({ location }) {
  let category = location.pathname;
  const originPath = "/categories";
  category = removeOriginFromPath(originPath, category);

  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getDrinksFromCat(category)
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

      <CardCont isLoading={isLoading} drinks={drinks} isError={isError} />
    </div>
  );
}
