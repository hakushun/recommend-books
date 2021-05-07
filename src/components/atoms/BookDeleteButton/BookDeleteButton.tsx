import React from 'react';
import { BookItem } from '../../../redux/modules/book';
import styles from './index.module.scss';

export type Props = {
  item: BookItem;
  isLoading: boolean;
  handleDelete: (_item: BookItem) => void;
};
export const BookDeleteButton: React.VFC<Props> = ({
  item,
  isLoading,
  handleDelete,
}) => (
  <button
    type="button"
    disabled={isLoading}
    onClick={() => handleDelete(item)}
    className={styles.delete}>
    削除する
  </button>
);
