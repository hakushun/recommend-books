import React from 'react';
import { useTags } from '../../../hooks/useTags';
import { BookItem } from '../../../redux/modules/book';
import { BookDataList as Presentaional } from './BookDataList';

type Props = {
  book: BookItem;
};
export const BookDataList: React.VFC<Props> = ({ book }) => {
  const {
    inputRef,
    tags,
    isEditable,
    handleKeyDown,
    handleRemove,
    handleToggle,
    handleUpdate,
  } = useTags();

  return (
    <Presentaional
      book={book}
      inputRef={inputRef}
      tags={tags}
      isEditable={isEditable}
      handleKeyDown={handleKeyDown}
      handleRemove={handleRemove}
      handleToggle={handleToggle}
      handleUpdate={handleUpdate}
    />
  );
};
