import React from 'react';
import { useBook } from '../../hooks/useBook';
import { useUser } from '../../hooks/useUser';
import { BookItem } from '../../redux/modules/book';
import styles from './index.module.scss';

type Props = {
  item: BookItem;
};
export const DeleteButton: React.VFC<Props> = ({ item }) => {
  const { isLoading, handleDelete } = useBook();
  const { user } = useUser();

  // 作成者以外には表示しない
  if (user?.id !== item.registeredBy?.id) return null;

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
