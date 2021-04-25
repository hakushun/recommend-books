import React from 'react';
import { Footer } from '../../molecules/Footer';
import { Header } from '../../molecules/Header';
import styles from './index.module.scss';

export const Layout: React.FC = ({ children }) => (
  <div id="app" className={styles.root}>
    <Header />
    <main id="main" className={styles.main} tabIndex={-1}>
      {children}
    </main>
    <Footer />
  </div>
);
