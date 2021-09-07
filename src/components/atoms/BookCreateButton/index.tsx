import clsx from 'clsx';
import React from 'react';
import { getBookButtonLabel } from '../../../libs/utils/getBookButtonLabel';
import { Type } from '../../../redux/modules/book';
import { SearchResult } from '../../../redux/modules/searchResult';
import styles from './index.module.scss';

export type Props = {
  type: Type;
  item: SearchResult;
  isLoading: boolean;
  handleCreate: (_item: SearchResult, _type: Type) => void;
};
export const BookCreateButton: React.VFC<Props> = ({
  type,
  item,
  isLoading,
  handleCreate,
}) => (
  <button
    type="button"
    disabled={isLoading}
    onClick={() => handleCreate(item, type)}
    className={clsx(styles.create, styles[type])}>
    {getBookButtonLabel(type)}
  </button>
);
