import React from 'react';
import { useComment } from '../../hooks/useComment';
import styles from './index.module.scss';

type Props = {
  bookId: string;
  id: string;
};
export const DeleteCommentButton: React.VFC<Props> = ({ bookId, id }) => {
  const { handleDelete } = useComment();

  return (
    <button
      type="button"
      aria-label="削除"
      onClick={() => handleDelete({ id, bookId })}
      className={styles.delete}></button>
  );
};
