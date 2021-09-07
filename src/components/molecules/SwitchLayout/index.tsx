import React from 'react';
import { useDisplay } from '../../../hooks/useDisplay';
import { SwitchLayout as Presentational } from './SwitchLayout';

export const SwitchLayout: React.VFC = () => {
  const { checked, handleChange } = useDisplay();
  return <Presentational checked={checked} handleChange={handleChange} />;
};
