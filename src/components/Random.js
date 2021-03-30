import React, { useEffect, useState } from 'react';
import { getRandDrink } from '../services/api';
import { Card, Button } from 'react-bootstrap';
import { extractIngsAndMeas } from '../helpers/data_helpers';
import IngRow from './reusables/IngRow';

export default function Random() {
  const [drink, setDrink] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandDrink()
      .then(data => {
        const { drinks } = data;
        // The variable drinks returns an array with one el
        setDrink(drinks[0]);
        setIsLoading(false);
      });
  }, []);

  // An array consisting of objects with ing and respective
  // measurement. [{ing: 'sample', meas: '2'}]
  const ingredients = extractIngsAndMeas(drink);

  return (
    <>
      {isLoading
        ?
        // Skeleton Here
        "Loading"
        :
        <div>
          {/* <Card style={{ width: '18rem' }}> */}
          {console.log(drink)}
          <Card >
            <Card.Img variant="top" src={drink.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{drink.strDrink}</Card.Title>

              <Card.Title>Instructions</Card.Title>
              <Card.Text>
                {drink.strInstructions}
              </Card.Text>

              <Card.Title>Ingredients</Card.Title>

              {ingredients.map((ing, i) => (
                <IngRow ing={ing} key={i} />
              ))}

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      }
    </>
  );
}
