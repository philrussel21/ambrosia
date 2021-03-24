import React, { useEffect, useState } from 'react';
import { removeOriginFromPath } from '../../helpers/url_helpers';
import { getDrinksFromCat } from '../../services/api';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Category({ location }) {
  let category = location.pathname;
  const originPath = "/categories";
  category = removeOriginFromPath(originPath, category);
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    getDrinksFromCat(category)
      .then(data => {
        const { drinks } = data;
        setDrinks(drinks);
      });
  }, [category]);

  return (
    <div className="content">
      {console.log(drinks)}
      {/* Heading */}
      <div>
        <h1 className="display-4 text-center">
          {category}
        </h1>
        <p className="lead">
          Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      </div>

      {/* Drinks */}
      <Container>
        <Row>
          {drinks
            ?
            drinks.map(drink => (
              <Col xs={12} sm={6} key={drink.idDrink} className='mx-auto mb-3'>
                <Card className="mx-auto">
                  <Card.Img variant="top" src={drink.strDrinkThumb} />
                  <Card.Body>
                    <Card.Text>{drink.strDrink}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))

            :
            // Skeleton Here
            "Loading"}
        </Row>
      </Container>
    </div>
  );
}
