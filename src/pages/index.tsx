import React from 'react';
import { Home } from '../components/organisms/Home';
import { getBooks } from '../libs/cloudFunctions/getBooks';
import { BookItem } from '../redux/modules/book';
import { subscribe } from '../redux/modules/books';
import { wrapper } from '../redux/store';

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const books: BookItem[] = await getBooks();
    store.dispatch(subscribe(books));
  },
);

const index: React.VFC = () => <Home />;

export default index;
