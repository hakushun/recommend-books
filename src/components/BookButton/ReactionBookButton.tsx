import clsx from 'clsx';
import React from 'react';
import { useBook } from '../../hooks/useBook';
import { BookItem, Type } from '../../redux/modules/book';
import styles from './index.module.scss';

type Props = {
  type: Type;
  item: BookItem;
};
export const ReactionBookButton: React.VFC<Props> = ({ type, item }) => {
  const { isLoading, handleReact } = useBook();
  return (
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
};
