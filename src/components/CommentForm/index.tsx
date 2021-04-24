import React from 'react';
import { useComment } from '../../hooks/useComment';
import { CreateCommentButton } from '../CommentButton/CreateCommentButton';
import styles from './index.module.scss';

type Props = {
  bookId: string;
};
export const CommentForm: React.VFC<Props> = ({ bookId }) => {
  const { textAreaRef, isLoading, handleCreate } = useComment();

  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <textarea
          name="comment"
          id="comment"
          placeholder="write down your comments ..."
          ref={textAreaRef}
          className={styles.textarea}
        />
        <div className={styles.action}>
          <CreateCommentButton
            bookId={bookId}
            isLoading={isLoading}
            handleCreate={handleCreate}
          />
        </div>
      </form>
    </div>
  );
};
