import React from 'react';
import { useComment } from '../../../hooks/useComment';
import { Comments as Presentaional } from './Comments';

type Props = {
  bookId: string;
};
export const Comments: React.VFC<Props> = ({ bookId }) => {
  const {
    textAreaRef,
    comment,
    isLoading,
    handleCreate,
    handleEdit,
    handleUpdate,
    handleDelete,
    handleCancel,
  } = useComment();
  return (
    <Presentaional
      bookId={bookId}
      textAreaRef={textAreaRef}
      comment={comment}
      isLoading={isLoading}
      handleCreate={handleCreate}
      handleEdit={handleEdit}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      handleCancel={handleCancel}
    />
  );
};
