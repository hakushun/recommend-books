import React, { MutableRefObject } from 'react';
import { Tag } from '../../../redux/modules/tags';
import styles from './index.module.scss';
import { BookItem, UpdatePayload } from '../../../redux/modules/book';
import { TagUpdateButton } from '../../atoms/TagUpdateButton';
import { TagsEditList } from '../TagsEditList';
import { TagsEditInput } from '../../atoms/TagsEditInput';

export type Props = {
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
  <>
    <TagsEditList tags={tags} handleRemove={handleRemove} />
    <div className={styles.field}>
      <TagsEditInput
        inputRef={inputRef}
        tags={tags}
        handleKeyDown={handleKeyDown}
      />
    </div>
    <div className={styles.action}>
      <TagUpdateButton item={item} tags={tags} handleUpdate={handleUpdate} />
    </div>
  </>
);
