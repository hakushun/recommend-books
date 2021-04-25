import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { Login as Presentational } from './Login';

export const Login: React.VFC = () => {
  const { signinWithGoogle } = useUser();

  return <Presentational signinWithGoogle={signinWithGoogle} />;
};
