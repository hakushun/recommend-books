import React from 'react';
import { Tag } from '../../../redux/modules/tags';
import styles from './index.module.scss';

type Props = {
  tag: Tag;
  handleRemove: (_id: string) => void;
};
export const DeleteButon: React.VFC<Props> = ({ tag, handleRemove }) => (
  <button
    type="button"
    aria-label={`delete ${tag.value}`}
    className={styles.delete}
    onClick={() => handleRemove(tag.id)}></button>
);
