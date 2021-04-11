import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './index.module.scss';

export const Layout: React.FC = ({ children }) => (
  <div className={styles.root}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);
