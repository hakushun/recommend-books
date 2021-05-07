import React from 'react';
import { Tag } from '../../../redux/modules/tags';
import { TagDeleteButton } from '../../atoms/TagDeleteButton';
import styles from './index.module.scss';

type Props = {
  tags: Tag[];
  handleRemove: (_id: string) => void;
};
export const TagsEditList: React.VFC<Props> = ({ tags, handleRemove }) => (
  <ul className={styles.list}>
    {tags.map((tag) => (
      <li key={tag.id} className={styles.item}>
        {tag.value}
        <TagDeleteButton tag={tag} handleRemove={handleRemove} />
      </li>
    ))}
  </ul>
);
