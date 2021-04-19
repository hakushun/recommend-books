import React from 'react';
import { useUser } from '../../hooks/useUser';
import { BookList } from '../BookList';
import { InternalBookSearch } from '../InternalBookSearch';
import { Loading } from '../Loading';
import styles from './index.module.scss';

export const Home: React.VFC = () => {
  const { isLoading } = useUser();

  if (isLoading) return <Loading />;

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>みんなが読んだ/読みたい本</h2>
      <InternalBookSearch />
      <BookList />
    </section>
  );
};
