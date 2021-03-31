import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function AppPagination({ currentPage, drinkPerPage, totalDrinks, paginate, nextPage, prevPage }) {

  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalDrinks / drinkPerPage); i++) {
    pageNums.push(i);
  }

  const lastPage = pageNums[pageNums.length - 1];

  return (
    <>
      <Pagination>
        <Pagination.Item onClick={() => prevPage()} disabled={currentPage === 1}>Previous</Pagination.Item>
        {pageNums.map(p => (
          <Pagination.Item key={p} onClick={() => paginate(p)} active={currentPage === p}>{p}</Pagination.Item>
        ))}
        <Pagination.Item onClick={() => nextPage()} disabled={currentPage === lastPage}>Next</Pagination.Item>
      </Pagination>
    </>
  );
}
