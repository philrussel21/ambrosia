import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function AppPagination({ drinkPerPage, totalDrinks, paginate, nextPage, prevPage }) {

  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalDrinks / drinkPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <>
      <Pagination>
        <Pagination.Item onClick={() => prevPage()}>Previous</Pagination.Item>
        {pageNums.map(p => (
          <Pagination.Item key={p} onClick={() => paginate(p)}>{p}</Pagination.Item>
        ))}
        <Pagination.Item onClick={() => nextPage()}>Next</Pagination.Item>
      </Pagination>
    </>
  );
}
