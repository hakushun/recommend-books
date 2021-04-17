import React from 'react';
import { useUser } from '../../hooks/useUser';
import styles from './index.module.scss';

export const GoogleButton: React.FC = () => {
  const { signinWithGoogle } = useUser();

  return (
    <button
      type="button"
      className={styles.google}
      aria-label="Sign In with Google account"
      onClick={signinWithGoogle}>
      <img
        className={styles.googleImg}
        alt="Google icon"
        src="/icon/google.svg"
        width="18"
        height="18"
      />
      <span className={styles.googleText}>Sign in with Google</span>
    </button>
  );
};
