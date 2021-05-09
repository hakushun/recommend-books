import React from 'react';
import ReactPaginate from 'react-paginate';

export type Props = {
  pageCount: number;
  currentPage: number;
  handlePagenation: (_selected: { selected: number }) => void;
};
export const SearchResultPagenation: React.VFC<Props> = ({
  pageCount,
  currentPage,
  handlePagenation,
}) => (
  <ReactPaginate
    forcePage={currentPage}
    previousLabel="←"
    nextLabel="→"
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
