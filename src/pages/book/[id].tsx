import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import { useBook } from '../../hooks/useBook';
import { BookDetail } from '../../components/BookDetail';

const Book: React.VFC = () => {
  const router = useRouter();
  const { id } = router.query;
  // ここのエラーの消し方わからない
  const { book, isLoading } = useBook(id);

  if (!book) {
    router.push('/');
    return null;
  }

  return (
    <Layout>
      {isLoading ? <div>loading </div> : <BookDetail book={book} />}
    </Layout>
  );
};

export default Book;
