import React, { MutableRefObject } from 'react';
import { BookItem, UpdatePayload } from '../../../redux/modules/book';
import { Tag } from '../../../redux/modules/tags';
import { TagsEditField as Presentational } from './TagsEditField';

type Props = {
  item: BookItem;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  tags: Tag[];
  handleKeyDown: (_e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRemove: (_id: string) => void;
  handleUpdate: (_: UpdatePayload) => void;
};
export const TagsEditField: React.VFC<Props> = ({
  item,
  inputRef,
  tags,
  handleKeyDown,
  handleRemove,
  handleUpdate,
}) => (
  <Presentational
    item={item}
    inputRef={inputRef}
    tags={tags}
    handleKeyDown={handleKeyDown}
    handleRemove={handleRemove}
    handleUpdate={handleUpdate}
  />
);
