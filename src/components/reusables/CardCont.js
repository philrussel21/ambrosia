import React, { useState } from 'react';
import DrinkCard from './DrinkCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AppPagination from './AppPagination';


export default function CardCont({ isLoading, drinks, isError }) {
  const [currentPage, setCurrentPage] = useState(1);
  const DRINKS_PER_PAGE = 10;


  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  const indexOfLastDrink = currentPage * DRINKS_PER_PAGE;
  const indexOfFirstDrink = indexOfLastDrink - DRINKS_PER_PAGE;
  const currentDrinks = drinks.slice(indexOfFirstDrink, indexOfLastDrink);

  return (
    <>
      <Container>
        <Row>
          {isLoading
            ?
            // Skeleton Here
            "Loading"
            :
            isError
              ?
              "Something went wrong."
              :
              currentDrinks.map(drink => (
                <DrinkCard drink={drink} key={drink.idDrink} />
              ))
          }
        </Row>
      </Container>
      {isLoading
        ?
        <> </>
        :
        isError || <AppPagination currentPage={currentPage} drinkPerPage={DRINKS_PER_PAGE} totalDrinks={drinks.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      }
    </>
  );
}
