import React from 'react';
import { useComment } from '../../hooks/useComment';
import { CommentForm } from '../CommentForm';
import { CommentList } from '../CommentList';
import styles from './index.module.scss';

type Props = {
  bookId: string;
};
export const Comments: React.VFC<Props> = ({ bookId }) => {
  const {
    textAreaRef,
    isLoading,
    handleCreate,
    handleEdit,
    handleDelete,
  } = useComment();
  return (
    <div className={styles.root}>
      <CommentList
        bookId={bookId}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <CommentForm
        bookId={bookId}
        textAreaRef={textAreaRef}
        isLoading={isLoading}
        handleCreate={handleCreate}
      />
    </div>
  );
};
