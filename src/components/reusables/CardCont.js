import React from 'react';
import DrinkCard from './DrinkCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AppPagination from './AppPagination';


export default function CardCont({ currentPage, setCurrentPage, isLoading, drinks }) {

  const DRINKS_PER_PAGE = 10;


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
    <>
      <Container>
        <Row>
          {isLoading
            ?
            // Skeleton Here
            "Loading"
            :
            currentDrinks.map(drink => (
              <DrinkCard drink={drink} key={drink.idDrink} />
            ))
          }
        </Row>
      </Container>
      {/* TODO: Disable Previous and Next when onto the first and last page respectively */}
      <AppPagination drinkPerPage={DRINKS_PER_PAGE} totalDrinks={drinks.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
    </>
  );
}
