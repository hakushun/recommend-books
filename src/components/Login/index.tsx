import React from 'react';
import { useUser } from '../../hooks/useUser';
import { GoogleButton } from '../GoogleButton';
import styles from './index.module.scss';

export const Login: React.VFC = () => {
  const { signinWithGoogle } = useUser();

  return (
    <section className={styles.root}>
      <GoogleButton signinWithGoogle={signinWithGoogle} />
    </section>
  );
};
