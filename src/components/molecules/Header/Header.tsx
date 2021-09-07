import Link from 'next/link';
import React from 'react';
import { Userdata } from '../../../redux/modules/user';
import styles from './index.module.scss';

export type Props = {
  user: Userdata;
  logout: () => Promise<void>;
};
export const Header: React.VFC<Props> = ({ user, logout }) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.title}>
        <Link href="/">
          <a className={styles.titleLink}>レコ読</a>
        </Link>
      </h1>
      {user && (
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/books">
                <a className={styles.navLink}>レコ読の追加</a>
              </Link>
            </li>
            <li>
              <button type="button" onClick={logout} className={styles.navLink}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  </header>
);
