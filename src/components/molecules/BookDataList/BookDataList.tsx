import React from 'react';
import { BookItem, UpdatePayload } from '../../../redux/modules/book';
import { Tag } from '../../../redux/modules/tags';
import { ToggleButton } from '../../atoms/TagButton/ToggleButton';
import { TagsEditField } from '../TagsEditField';
import styles from './index.module.scss';

export type Props = {
  book: BookItem;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  tags: Tag[];
  isEditable: boolean;
  handleKeyDown: (_e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRemove: (_id: string) => void;
  handleToggle: (_boolean: boolean) => void;
  handleUpdate: (_: UpdatePayload) => void;
};
export const BookDataList: React.VFC<Props> = ({
  book,
  inputRef,
  tags,
  isEditable,
  handleKeyDown,
  handleRemove,
  handleToggle,
  handleUpdate,
}) => (
  <dl className={styles.root}>
    <div className={styles.item}>
      <dt>Title</dt>
      <dd>{book.title}</dd>
    </div>
    <div className={styles.item}>
      <dt>Author</dt>
      <dd>{book.authors.join(', ')}</dd>
    </div>
    <div className={styles.item}>
      <dt>Description</dt>
      <dd>{book.description}</dd>
    </div>
    <div className={styles.item}>
      <dt>Registered By</dt>
      <dd>{book.registeredBy?.name}</dd>
    </div>
    <div className={styles.item}>
      <dt>読んだ人</dt>
      <dd>{book.usersHaveRead.map((user) => user?.name).join(', ')}</dd>
    </div>
    <div className={styles.item}>
      <dt>読みたい人</dt>
      <dd>{book.usersWantRead.map((user) => user?.name).join(', ')}</dd>
    </div>
    <div className={styles.item}>
      <dt>
        Tags
        <ToggleButton isEditable={isEditable} handleToggle={handleToggle} />
      </dt>
      <dd>
        {isEditable ? (
          <TagsEditField
            item={book}
            inputRef={inputRef}
            tags={tags}
            handleKeyDown={handleKeyDown}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
          />
        ) : (
          book.tags.map((tag) => tag.value).join(', ')
        )}
      </dd>
    </div>
  </dl>
);
