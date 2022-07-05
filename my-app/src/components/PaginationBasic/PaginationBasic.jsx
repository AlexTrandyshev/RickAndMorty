import React from "react";
import { useState } from "react";
import {Pagination} from 'react-bootstrap';

export const PaginationBasic = ({countPages, onClick}) => {
  const [currentPage, setCurrentPage] = useState(1);
  let items = [];
  const firstPage = 1;
  const lastPage = countPages;
  const maxPaginationItem = 5;

  const onItemClick = (number) => {
    setCurrentPage(number);
    onClick(number);
  }

  const onNextPage = (e) => {
    let page = currentPage !== lastPage ? currentPage + firstPage : lastPage
    setCurrentPage(page);
    onClick(page);
  }

  const onPrevPage = (e) => {
    let page = currentPage !== firstPage ? currentPage - firstPage : firstPage
    setCurrentPage(page);
    onClick(page);
  }

  for (let number = currentPage, i = 1; number <= countPages; ++number, ++i) {
    // let isActivePrevEllipsis = false;
    // let isActiveNextEllipsis = false;

    let item = <Pagination.Item key={number} active={number === currentPage} onClick={() => onItemClick(number)}>
                  {number}
                </Pagination.Item>;

    // if (number === firstPage ) {
    //   isActiveNextEllipsis = true;
    //   isActivePrevEllipsis = false;
    // }

    // if (number ===  lastPage) {
    //   isActiveNextEllipsis = false;
    //   isActivePrevEllipsis = true;
    // }

    // if (number > maxPaginationItem && i === 3) {
    //   isActivePrevEllipsis = true;
    // }
    // if (number > maxPaginationItem && i === 7) {
    //   isActiveNextEllipsis = true;
    // }

    // if (isActivePrevEllipsis) {
    //   item = <Pagination.Ellipsis key={number} onClick={() => onItemClick(number)} />;
    // }

    // if (isActiveNextEllipsis && i === 9) {
    //   item = <Pagination.Ellipsis key={number} onClick={() => onItemClick(number)} />;
    // }
    
    items.push(item);

    if (i === maxPaginationItem) {
      break;
    }
  }

  return  <Pagination size="lg">
            <Pagination.First onClick={() => onItemClick(firstPage)} />
            <Pagination.Prev onClick={onPrevPage} />

            {items}

            <Pagination.Next onClick={onNextPage} />
            <Pagination.Last onClick={() => onItemClick(lastPage)} />
          </Pagination>
}