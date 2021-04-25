import React from 'react';
import { useRouter } from 'next/router';
import { useBook } from '../../hooks/useBook';
import { BookDetail } from '../../components/BookDetail';
import { Loading } from '../../components/Loading';

const Book: React.VFC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { book, isLoading, handleReact, handleDelete } = useBook(
    typeof id === 'string' ? id : '',
  );

  if (!book) {
    router.push('/');
    return null;
  }

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
