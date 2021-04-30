import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { BookItem } from '../../../redux/modules/book';
import styles from './index.module.scss';

export type Props = {
  item: BookItem;
  isLoading: boolean;
  handleDelete: (_item: BookItem) => void;
};
export const DeleteBookButton: React.VFC<Props> = ({
  item,
  isLoading,
  handleDelete,
}) => {
  const { user } = useUser();

  // 作成者以外には表示しない
  if (user?.id !== item.registeredBy?.id) return null;

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={() => handleDelete(item)}
      className={styles.delete}>
      削除する
    </button>
  );
};
