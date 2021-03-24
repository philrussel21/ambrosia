import React, { useEffect, useState } from 'react';
import { removeOriginFromPath } from '../../helpers/url_helpers';
import { getDrinksFromCat } from '../../services/api';

import { Container, Row, Col, Card } from 'react-bootstrap';
import AppPagination from './AppPagination';

export default function Category({ location }) {
  let category = location.pathname;
  const originPath = "/categories";
  category = removeOriginFromPath(originPath, category);

  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const DRINKS_PER_PAGE = 10;

  useEffect(() => {
    setIsLoading(true);
    getDrinksFromCat(category)
      .then(data => {
        const { drinks } = data;
        setDrinks(drinks);
        setIsLoading(false);
      });
  }, [category]);


  // MOVE THE DRINK CARD COMPONENT TO A SEPERATE COMPONENT



  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const indexOfLastDrink = currentPage * DRINKS_PER_PAGE;
  const indexOfFirstDrink = indexOfLastDrink - DRINKS_PER_PAGE;
  const currentDrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

  return (
    <div className="content">
      {console.log(currentDrinks)}
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
          {isLoading
            ?
            // Skeleton Here
            "Loading"
            :
            currentDrinks.map(drink => (
              <Col xs={12} sm={6} key={drink.idDrink} className='mx-auto mb-3'>
                <Card className="mx-auto">
                  <Card.Img variant="top" src={drink.strDrinkThumb} />
                  <Card.Body>
                    <Card.Text>{drink.strDrink}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
      <AppPagination drinkPerPage={DRINKS_PER_PAGE} totalDrinks={drinks.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}
