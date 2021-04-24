import React, { MutableRefObject } from 'react';
import { CreateCommentButton } from '../CommentButton/CreateCommentButton';
import styles from './index.module.scss';

type Props = {
  bookId: string;
  textAreaRef: MutableRefObject<HTMLTextAreaElement | null>;
  isLoading: boolean;
  handleCreate: (_bookId: string) => void;
};
export const CommentForm: React.VFC<Props> = ({
  bookId,
  textAreaRef,
  isLoading,
  handleCreate,
}) => (
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
