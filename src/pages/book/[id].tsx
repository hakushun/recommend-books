import React from 'react';
import { useRouter } from 'next/router';
import { useBook } from '../../hooks/useBook';
import { BookDetail } from '../../components/organisms/BookDetail';
import { wrapper } from '../../redux/store';
import { getBook } from '../../libs/cloudFunctions/getBook';
import { set } from '../../redux/modules/book';

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const { id } = query;
    if (typeof id !== 'string') return;
    const book = await getBook(id);
    store.dispatch(set(book));
  },
);

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
      <BookDetail
        book={book}
        isLoading={isLoading}
        handleReact={handleReact}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Book;
