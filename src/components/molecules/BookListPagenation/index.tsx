import React from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number;
  handlePagenate: (_selected: { selected: number }) => void;
};
export const BookListPagenation: React.VFC<Props> = ({
  pageCount,
  handlePagenate,
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
    onPageChange={handlePagenate}
  />
);
