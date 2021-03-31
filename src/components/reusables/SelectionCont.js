import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AppPagination from './AppPagination';
import SelectionCard from './SelectionCard';

export default function SelectionCont({ isLoading, data, isError }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ING_PER_PAGE = 20;


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
            isError
              ?
              "Something went wrong"
              :
              currentData.map((el, i) => (
                <SelectionCard data={el} key={i} />
              ))
          }
        </Row>
      </Container>
      {isLoading
        ?
        <></>
        :
        isError || <AppPagination currentPage={currentPage} drinkPerPage={ING_PER_PAGE} totalDrinks={data.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      }
    </>
  );
}
