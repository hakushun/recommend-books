import React from 'react';
import {
  CommentItem as typeComment,
  RemovePayload,
} from '../../../redux/modules/comment';
import { CommentItem } from '../CommentItem';

type Props = {
  bookId: string;
  comments: typeComment[];
  handleEdit: (_item: typeComment) => void;
  handleDelete: (_: RemovePayload) => void;
};
export const CommentList: React.VFC<Props> = ({
  bookId,
  comments,
  handleEdit,
  handleDelete,
}) => (
  <ul id="comment_list">
    {comments.map((comment) => (
      <CommentItem
        key={comment.id}
        comment={comment}
        bookId={bookId}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);
