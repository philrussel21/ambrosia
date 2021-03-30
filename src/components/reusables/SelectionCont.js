import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AppPagination from './AppPagination';
import SelectionCard from './SelectionCard';

export default function SelectionCont({ isLoading, data, currentPage, setCurrentPage }) {
  const ING_PER_PAGE = 20;


  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const indexOfLastIng = currentPage * ING_PER_PAGE;
  const indexOfFirstIng = indexOfLastIng - ING_PER_PAGE;
  const currentData = data.slice(indexOfFirstIng, indexOfLastIng);
  return (
    <>
      <Container>
        <Row>
          {isLoading
            ?
            // Skeleton comp here
            "Loading"
            :
            currentData.map((el, i) => (
              <SelectionCard data={el} key={i} />
            ))
          }
        </Row>
      </Container>
      <AppPagination drinkPerPage={ING_PER_PAGE} totalDrinks={data.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
    </>
  );
}
