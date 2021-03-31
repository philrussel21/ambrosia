import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function AppPagination({ currentPage, drinkPerPage, totalDrinks, paginate, nextPage, prevPage }) {

  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalDrinks / drinkPerPage); i++) {
    pageNums.push(i);
  }

  const lastPage = pageNums[pageNums.length - 1];
  const lastPages = pageNums.slice(Math.max(pageNums.length - 5, 0));

  let pages = [];
  if (lastPages[0] > 5) {
    // If the current page is included in the last pages array, just print out the last 5 pages.
    if (lastPages.includes(currentPage)) {
      pages = lastPages.map(p => {
        return <Pagination.Item key={p} onClick={() => paginate(p)} active={currentPage === p}>{p}</Pagination.Item>;
      });
    }
    else {

      for (let i = currentPage - 1; i < (currentPage + 4); i++) {
        const p = pageNums[i];
        const item = <Pagination.Item key={p} onClick={() => paginate(p)} active={currentPage === p}>{p}</Pagination.Item>;
        pages.push(item);
      }
    }
  }
  // Less than 5 result pages
  else {
    pages = pageNums.map(p => {
      return <Pagination.Item key={p} onClick={() => paginate(p)} active={currentPage === p}>{p}</Pagination.Item>;
    });
  }

  return (
    <>
      <Pagination>
        <Pagination.Item onClick={() => prevPage()} disabled={currentPage === 1}>Previous</Pagination.Item>
        {/* {pageNums.map(p => (
          <Pagination.Item key={p} onClick={() => paginate(p)} active={currentPage === p}>{p}</Pagination.Item>
        ))} */}
        {pages}
        <Pagination.Item onClick={() => nextPage()} disabled={currentPage === lastPage}>Next</Pagination.Item>
      </Pagination>
    </>
  );
}
