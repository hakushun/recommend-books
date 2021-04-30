import React from 'react';
import { formatAuthors } from '../../../libs/utils/formatAuthors';
import { SearchResult } from '../../../redux/modules/searchResult';
import styles from './index.module.scss';

export type Props = {
  result: SearchResult;
  handleSelect: (_result: SearchResult) => void;
};
export const SearchResultItem: React.VFC<Props> = ({
  result,
  handleSelect,
}) => (
  <li
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    role="button"
    tabIndex={0}
    aria-label={`${result.volumeInfo.title}を読んだ/読みたい本に登録するためのダイアログを開く`}
    id={result.id}
    className={styles.root}
    onKeyPress={() => handleSelect(result)}
    onClick={() => handleSelect(result)}>
    <div className={styles.img}>
      <img
        src={result.volumeInfo.imageLinks?.thumbnail || '/img/no-images.png'}
        width="100"
        height="150"
        alt=""
      />
    </div>
    <div className={styles.meta}>
      <span className={styles.title}>{result.volumeInfo.title}</span>
      <span className={styles.author}>
        {formatAuthors(result.volumeInfo.authors)}
      </span>
      <div className={styles.description}>{result.volumeInfo.description}</div>
    </div>
  </li>
);
