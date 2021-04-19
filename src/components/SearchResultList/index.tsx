import React from 'react';
import { SearchResult } from '../../redux/modules/searchResult';
import { Loading } from '../Loading';
import { SearchResultItem } from '../SearchResultItem';
import styles from './index.module.scss';

type Props = {
  results: SearchResult[];
  isLoading: boolean;
};
export const SearchResultList: React.VFC<Props> = ({ results, isLoading }) => (
  <>
    {isLoading ? (
      <Loading />
    ) : (
      <ul className={styles.root}>
        {results?.map((result) => (
          <SearchResultItem key={result.id} result={result} />
        ))}
      </ul>
    )}
  </>
);
