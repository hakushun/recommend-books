import React from 'react';
import { useUser } from '../../hooks/useUser';
import { Header as Presentational } from './Header';

export const Header: React.VFC = () => {
  const { user, logout } = useUser();

  return <Presentational user={user} logout={logout} />;
};
