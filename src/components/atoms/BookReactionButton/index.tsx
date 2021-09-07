import clsx from 'clsx';
import React from 'react';
import { getBookButtonLabel } from '../../../libs/utils/getBookButtonLabel';
import { haveReacted } from '../../../libs/utils/userReaction';
import { BookItem, Type } from '../../../redux/modules/book';
import { Userdata } from '../../../redux/modules/user';
import styles from './index.module.scss';

export type Props = {
  user: Userdata;
  type: Type;
  item: BookItem;
  isLoading: boolean;
  handleReact: (_item: BookItem, _type: Type) => void;
};
export const BookReactionButton: React.VFC<Props> = ({
  user,
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
      styles[type],
      haveReacted({ item, user, type }) && styles.reacted,
    )}>
    {getBookButtonLabel(type)}
  </button>
);
