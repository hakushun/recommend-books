import React from 'react';
import { GoogleButton } from '../../atoms/GoogleButton';
import styles from './index.module.scss';

export type Props = {
  signinWithGoogle: () => Promise<void>;
};
export const Login: React.VFC<Props> = ({ signinWithGoogle }) => (
  <section className={styles.root}>
    <GoogleButton signinWithGoogle={signinWithGoogle} />
  </section>
);
