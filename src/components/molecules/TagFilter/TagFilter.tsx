import clsx from 'clsx';
import React from 'react';
import styles from './index.module.scss';

type Props = {
  selectedTag: string | null;
  popularTags: string[];
  handleSelect: (_id: string) => void;
};
export const TagFilter: React.VFC<Props> = ({
  selectedTag,
  popularTags,
  handleSelect,
}) => (
  <div role="radiogroup" className={styles.root}>
    <span>人気タグ:</span>
    {popularTags.map((tag) => (
      <button
        key={tag}
        role="radio"
        aria-checked={selectedTag === tag}
        className={clsx(selectedTag === tag && styles.selected)}
        onClick={() => handleSelect(tag)}>
        {tag}
      </button>
    ))}
  </div>
);
