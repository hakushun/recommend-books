import React from 'react';
import { GoogleButton } from '../GoogleButton';
import styles from './index.module.scss';

export const Login: React.VFC = () => (
  <section className={styles.root}>
    <GoogleButton />
  </section>
);
