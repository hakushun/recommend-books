import React from 'react';
import ReactPaginate from 'react-paginate';

export type Props = {
  pageCount: number;
  handlePagenation: (_selected: { selected: number }) => void;
};
export const SearchResultPagenation: React.VFC<Props> = ({
  pageCount,
  handlePagenation,
}) => (
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
