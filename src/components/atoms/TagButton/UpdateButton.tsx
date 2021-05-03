import React from 'react';
import { BookItem, UpdatePayload } from '../../../redux/modules/book';
import { Tag } from '../../../redux/modules/tags';
import styles from './index.module.scss';

type Props = {
  item: BookItem;
  tags: Tag[];
  handleUpdate: (_: UpdatePayload) => void;
};
export const UpdateButton: React.VFC<Props> = ({
  item,
  tags,
  handleUpdate,
}) => (
  <button
    type="button"
    className={styles.update}
    onClick={() => handleUpdate({ item, tags })}>
    登録
  </button>
);
