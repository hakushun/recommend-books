import React from 'react';
import {
  CommentItem,
  UpdatePayload,
  RemovePayload,
} from '../../../redux/modules/comment';
import { CommentList } from '../CommentList';
import { CommentForm } from '../CommentForm';
import styles from './index.module.scss';

export type Props = {
  bookId: string;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  comment: CommentItem;
  isLoading: boolean;
  handleCreate: (_bookId: string) => void;
  handleEdit: (_item: CommentItem) => void;
  handleUpdate: (_: UpdatePayload) => void;
  handleDelete: (_: RemovePayload) => void;
  handleCancel: () => void;
};
export const Comments: React.VFC<Props> = ({
  bookId,
  textAreaRef,
  comment,
  isLoading,
  handleCreate,
  handleEdit,
  handleUpdate,
  handleDelete,
  handleCancel,
}) => (
  <div className={styles.root}>
    <CommentList
      bookId={bookId}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
    <CommentForm
      bookId={bookId}
      textAreaRef={textAreaRef}
      comment={comment}
      isLoading={isLoading}
      handleCreate={handleCreate}
      handleUpdate={handleUpdate}
      handleCancel={handleCancel}
    />
  </div>
);
