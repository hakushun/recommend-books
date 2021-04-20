import React from 'react';
import ReactPaginate from 'react-paginate';
import { useExternalSearch } from '../../hooks/useExternalSearch';

export const SearchResultPagenation: React.VFC = () => {
  const { pageCount, handlePagenation } = useExternalSearch();

  return (
    <ReactPaginate
      previousLabel="previous"
      nextLabel="next"
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      containerClassName="pagenation"
      pageLinkClassName="pageLink"
      activeLinkClassName="activeLink"
      previousLinkClassName="previousLink"
      nextLinkClassName="nextLink"
      breakLinkClassName="breakLink"
      onPageChange={handlePagenation}
    />
  );
};
