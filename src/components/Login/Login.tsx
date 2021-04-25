import React from 'react';
import { GoogleButton } from '../GoogleButton';
import styles from './index.module.scss';

type Props = {
  signinWithGoogle: () => Promise<void>;
};
export const Login: React.VFC<Props> = ({ signinWithGoogle }) => (
  <section className={styles.root}>
    <GoogleButton signinWithGoogle={signinWithGoogle} />
  </section>
);
