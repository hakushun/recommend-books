import Link from 'next/Link';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import { ReadButton } from '../ReadButton';
import { WantButton } from '../WantButton';

export const BookItem: React.VFC = () => (
  <li className={styles.item}>
    <Link href="/">
      <a className={styles.link}>
        <div>
          <h3 className={styles.title}>
            達人プログラマー(第2版): 熟達に向けたあなたの旅
          </h3>
          <span className={styles.author}>Andrew Hunt and David Thomas</span>
        </div>
        <div className={styles.img}>
          <Image src="/img/dummy.jpg" width="100" height="150" />
        </div>
        <div className={styles.info}>
          <span>０人に読まれてます</span>
          <span>０人が気になってます</span>
        </div>
      </a>
    </Link>
    <div className={styles.action}>
      <ReadButton />
      <WantButton />
    </div>
  </li>
);
