import React from 'react';
import { SearchResultList } from '../SearchResultList';
import styles from './index.module.scss';
import { BookRegisterDialog } from '../BookRegisterDialog';
import { useExternalSearch } from '../../hooks/useExternalSearch';

export const SearchResult: React.VFC = () => {
  const { titleRef } = useExternalSearch();

  return (
    <div className={styles.root}>
      <h3 className={styles.title} ref={titleRef} tabIndex={-1}>
        検索結果
      </h3>
      <SearchResultList />
      <BookRegisterDialog />
    </div>
  );
};
