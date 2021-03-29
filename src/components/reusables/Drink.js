import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkFromId } from '../../services/api';
import { extractIngsAndMeas } from '../../helpers/data_helpers';
import { Card, Button } from 'react-bootstrap';
import IngRow from './IngRow';

export default function Drink() {
  const [isLoading, setIsLoading] = useState(true);
  const [drink, setDrink] = useState({});

  // TODO: When random str is put on /drinks/someRandStr route,
  // an error occurs so better catch it and return a different
  // component or like "No Drink Exist"

  // Extracting drinkId object since it was how it was named 
  // in App.js component.
  const { drinkId } = useParams();

  useEffect(() => {
    getDrinkFromId(drinkId)
      .then(data => {
        const { drinks } = data;
        // The variable drinks returns an array with one el
        setDrink(drinks[0]);
        setIsLoading(false);
      });
  }, [drinkId]);

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
