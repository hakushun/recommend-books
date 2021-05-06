import React from 'react';
import { useRouter } from 'next/router';
import { useBook } from '../../hooks/useBook';
import { BookDetail } from '../../components/organisms/BookDetail';
import { Loading } from '../../components/atoms/Loading';

const Book: React.VFC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { book, isLoading, handleReact, handleDelete } = useBook(
    typeof id === 'string' ? id : '',
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <BookDetail
          book={book}
          isLoading={isLoading}
          handleReact={handleReact}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Book;
