import React from 'react';
import styles from './index.module.scss';

type Props = {
  bookId: string;
  isLoading: boolean;
  handleCreate: (_bookId: string) => void;
};
export const CreateCommentButton: React.VFC<Props> = ({
  bookId,
  isLoading,
  handleCreate,
}) => (
  <button
    type="button"
    disabled={isLoading}
    onClick={() => handleCreate(bookId)}
    className={styles.create}>
    登録
  </button>
);
