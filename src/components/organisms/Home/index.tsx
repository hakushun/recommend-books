import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { Loading } from '../../atoms/Loading';
import { Home as Presentaional } from './Home';

export const Home: React.VFC = () => {
  const { isLoading } = useUser();

  if (isLoading) return <Loading />;

  return <Presentaional />;
};
