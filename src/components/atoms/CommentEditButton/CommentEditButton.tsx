import React from 'react';
import { CommentItem } from '../../../redux/modules/comment';
import styles from './index.module.scss';

export type Props = {
  comment: CommentItem;
  handleEdit: (_item: CommentItem) => void;
};
export const CommentEditButton: React.VFC<Props> = ({
  comment,
  handleEdit,
}) => (
  <button
    type="button"
    aria-label="編集"
    onClick={() => handleEdit(comment)}
    className={styles.edit}></button>
);
