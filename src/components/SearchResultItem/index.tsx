import React from 'react';
import { useExternalSearch } from '../../hooks/useExternalSearch';
import { SearchResult } from '../../redux/modules/searchResult';
import styles from './index.module.scss';

type Props = {
  result: SearchResult;
};
export const SearchResultItem: React.VFC<Props> = ({ result }) => {
  const { handleSelect } = useExternalSearch();

  return (
    <li
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      tabIndex={0}
      aria-label={`open dialog to register ${result.volumeInfo.title}`}
      className={styles.root}
      onClick={() => handleSelect(result)}
      onKeyDown={() => handleSelect(result)}>
      <div className={styles.img}>
        <img
          src={result.volumeInfo.imageLinks?.thumbnail || '/img/no-images.png'}
          width="100"
          height="150"
          alt="book cover"
        />
      </div>
      <div className={styles.meta}>
        <span className={styles.title}>{result.volumeInfo.title}</span>
        <span className={styles.author}>{result.volumeInfo.authors}</span>
        <div className={styles.description}>
          {result.volumeInfo.description}
        </div>
      </div>
    </li>
  );
};
