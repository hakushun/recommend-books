import clsx from 'clsx';
import React from 'react';
import { BookItem, Type } from '../../../redux/modules/book';
import styles from './index.module.scss';

export type Props = {
  type: Type;
  item: BookItem;
  isLoading: boolean;
  handleReact: (_item: BookItem, _type: Type) => void;
};
export const BookReactionButton: React.VFC<Props> = ({
  type,
  item,
  isLoading,
  handleReact,
}) => (
  <button
    type="button"
    disabled={isLoading}
    onClick={() => handleReact(item, type)}
    className={clsx(
      styles.reaction,
      type === 'read' ? styles.read : styles.want,
    )}>
    {type === 'read' ? '読んだ' : '読みたい'}
  </button>
);
