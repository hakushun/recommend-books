import React from 'react';
import { SearchResultList } from '../SearchResultList';
import { SearchResult as typeSearchResult } from '../../redux/modules/searchResult';
import styles from './index.module.scss';
import { BookRegisterDialog } from '../BookRegisterDialog';

type Props = {
  results: typeSearchResult[];
};
export const SearchResult: React.VFC<Props> = ({ results }) => (
  <div className={styles.root}>
    <h3 className={styles.title}>検索結果</h3>
    <SearchResultList results={results} />
    <BookRegisterDialog />
  </div>
);
