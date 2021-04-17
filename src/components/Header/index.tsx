import Link from 'next/Link';
import React from 'react';
import { useUser } from '../../hooks/useUser';
import styles from './index.module.scss';

export const Header: React.VFC = () => {
  const { user, logout } = useUser();

  return (
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
              <li className={styles.navItem}>
                <Link href="/books">
                  <a className={styles.navLink}>レコ読の追加</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <button
                  type="button"
                  onClick={logout}
                  className={styles.navLink}>
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
