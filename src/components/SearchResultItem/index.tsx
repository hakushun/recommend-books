import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

export const SearchResultItem: React.VFC = () => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
  <li className={styles.root} role="button">
    <div className={styles.img}>
      <Image src="/img/dummy.jpg" width="100" height="150" />
    </div>
    <div className={styles.meta}>
      <span className={styles.title}>
        達人プログラマー(第2版): 熟達に向けたあなたの旅
      </span>
      <span className={styles.author}>Andrew Hunt and David Thomas</span>
      <div className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo
        amet officia! Eaque inventore qui incidunt, aut voluptatem, illum
        suscipit pariatur, rem soluta nemo nihil vero quos debitis quis quidem!
      </div>
    </div>
  </li>
);
