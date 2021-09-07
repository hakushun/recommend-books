import { GetServerSideProps } from 'next';
import React from 'react';
import { useBook } from '../../hooks/useBook';
import { BookDetail } from '../../components/organisms/BookDetail';
import { getBook } from '../../libs/cloudFunctions/getBook';
import { BookItem } from '../../redux/modules/book';
import { useUser } from '../../hooks/useUser';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const book = await getBook(typeof id === 'string' ? id : '');
  return { props: { initialBook: book } };
};
type Props = {
  initialBook: BookItem;
};
const Book: React.VFC<Props> = ({ initialBook }) => {
  const { user } = useUser();
  const { book, isLoading, handleReact, handleDelete } = useBook(initialBook);

  return (
    <BookDetail
      user={user}
      book={book}
      isLoading={isLoading}
      handleReact={handleReact}
      handleDelete={handleDelete}
    />
  );
};

export default Book;
