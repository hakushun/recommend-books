import clsx from 'clsx';
import React from 'react';
import { Type } from '../../redux/modules/book';
import { SearchResult } from '../../redux/modules/searchResult';
import styles from './index.module.scss';

type Props = {
  type: Type;
  item: SearchResult;
  isLoading: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
};
export const CreateBookButton: React.VFC<Props> = ({
  type,
  item,
  isLoading,
  handleCreate,
}) => (
  <button
    type="button"
    disabled={isLoading}
    onClick={() => handleCreate(item, type)}
    className={clsx(
      styles.create,
      type === 'read' ? styles.read : styles.want,
    )}>
    {type === 'read' ? '読んだ' : '読みたい'}
  </button>
);
