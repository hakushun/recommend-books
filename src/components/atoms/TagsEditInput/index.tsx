import React, { MutableRefObject } from 'react';
import { options } from './options';
import { Tag } from '../../../redux/modules/tags';
import styles from './index.module.scss';

export type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  tags: Tag[];
  handleKeyDown: (_e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export const TagsEditInput: React.VFC<Props> = ({
  inputRef,
  tags,
  handleKeyDown,
}) => (
  <>
    <input
      list="tags"
      type="text"
      placeholder="タグを最大5つまで入力"
      ref={inputRef}
      disabled={tags.length >= 5}
      onKeyDown={handleKeyDown}
      className={styles.input}
    />
    <datalist id="tags">
      {Array.from(new Set(options))
        .filter((option) => !tags.find((tag) => tag.value === option))
        .sort()
        .map((option) => (
          <option key={option}>{option}</option>
        ))}
    </datalist>
  </>
);
