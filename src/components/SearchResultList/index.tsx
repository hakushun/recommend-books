import React from 'react';
import { useExternalSearch } from '../../hooks/useExternalSearch';
import { Loading } from '../Loading';
import { SearchResultItem } from '../SearchResultItem';
import { SearchResultPagenation } from '../SearchResultPagenation';
import styles from './index.module.scss';

export const SearchResultList: React.VFC = () => {
  const { isLoading, searchResults } = useExternalSearch();

  if (isLoading) return <Loading />;

  return (
    <>
      <ul className={styles.root}>
        {searchResults?.map((result) => (
          <SearchResultItem key={result.id} result={result} />
        ))}
      </ul>
      {searchResults?.length > 0 && <SearchResultPagenation />}
    </>
  );
};
