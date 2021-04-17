import React from 'react';
import { useBook } from '../../hooks/useBook';
import { BookItem } from '../../redux/modules/book';
import styles from './index.module.scss';

type Props = {
  item: BookItem;
};
export const DeleteButton: React.VFC<Props> = ({ item }) => {
  const { isLoading, handleDelete } = useBook();
  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={() => handleDelete(item)}
      className={styles.root}>
      削除する
    </button>
  );
};
