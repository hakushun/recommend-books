import clsx from 'clsx';
import React from 'react';
import { useBook } from '../../hooks/useBook';
import { Type } from '../../redux/modules/book';
import { SearchResult } from '../../redux/modules/searchResult';
import styles from './index.module.scss';

type Props = {
  type: Type;
  item: SearchResult;
};
export const RegisterButton: React.VFC<Props> = ({ type, item }) => {
  const { isLoading, handleCreate } = useBook();
  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={() => handleCreate(item, type)}
      className={clsx(
        styles.root,
        type === 'read' ? styles.read : styles.want,
      )}>
      {type === 'read' ? '読んだ' : '読みたい'}
    </button>
  );
};
