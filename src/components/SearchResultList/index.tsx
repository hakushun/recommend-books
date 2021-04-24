import React from 'react';
import { SearchResult } from '../../redux/modules/searchResult';
import { Loading } from '../Loading';
import { SearchResultItem } from '../SearchResultItem';
import { SearchResultPagenation } from '../SearchResultPagenation';
import styles from './index.module.scss';

type Props = {
  isLoading: boolean;
  searchResults: SearchResult[];
  pageCount: number;
  handlePagenation: (_selected: { selected: number }) => void;
};
export const SearchResultList: React.VFC<Props> = ({
  isLoading,
  searchResults,
  pageCount,
  handlePagenation,
}) => {
  if (isLoading) return <Loading />;

  return (
    <>
      <ul className={styles.root}>
        {searchResults?.map((result) => (
          <SearchResultItem key={result.id} result={result} />
        ))}
      </ul>
      {searchResults?.length > 0 && (
        <SearchResultPagenation
          pageCount={pageCount}
          handlePagenation={handlePagenation}
        />
      )}
    </>
  );
};
