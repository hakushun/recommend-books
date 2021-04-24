import React, { MutableRefObject } from 'react';
import { CommentItem, UpdatePayload } from '../../redux/modules/comment';
import { CancelCommentButton } from '../CommentButton/CancelCommentButton';
import { CreateCommentButton } from '../CommentButton/CreateCommentButton';
import { UpdateCommentButton } from '../CommentButton/UpdateCommentButton';
import styles from './index.module.scss';

type Props = {
  bookId: string;
  textAreaRef: MutableRefObject<HTMLTextAreaElement | null>;
  comment: CommentItem;
  isLoading: boolean;
  handleCreate: (_bookId: string) => void;
  handleUpdate: (_: UpdatePayload) => void;
  handleCancel: () => void;
};
export const CommentForm: React.VFC<Props> = ({
  bookId,
  textAreaRef,
  comment,
  isLoading,
  handleCreate,
  handleUpdate,
  handleCancel,
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
        {comment.id === '' ? (
          <CreateCommentButton
            bookId={bookId}
            isLoading={isLoading}
            handleCreate={handleCreate}
          />
        ) : (
          <>
            <CancelCommentButton
              isLoading={isLoading}
              handleCancel={handleCancel}
            />
            <UpdateCommentButton
              bookId={bookId}
              item={comment}
              isLoading={isLoading}
              handleUpdate={handleUpdate}
            />
          </>
        )}
      </div>
    </form>
  </div>
);
