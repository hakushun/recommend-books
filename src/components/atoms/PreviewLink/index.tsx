import React from 'react';
import styles from './index.module.scss';

export type Props = {
  link: string;
};
export const PreviewLink: React.VFC<Props> = ({ link }) => (
  <a
    href={link || '/'}
    target="_blank"
    rel="noreferrer"
    className={styles.root}>
    PREVIEW
  </a>
);
