import React from 'react';
import { SearchResult } from '../../redux/modules/searchResult';
import { SearchResultItem } from '../SearchResultItem';
import styles from './index.module.scss';

type Props = {
  results: SearchResult[];
};
export const SearchResultList: React.VFC<Props> = ({ results }) => (
  <ul className={styles.root}>
    {results.map((result) => (
      <SearchResultItem key={result.id} result={result} />
    ))}
  </ul>
);
