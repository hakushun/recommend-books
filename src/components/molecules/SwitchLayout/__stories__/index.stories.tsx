import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { SwitchLayout, Props } from '../SwitchLayout';

export default {
  title: 'molecules/SwitchLayout',
  component: SwitchLayout,
} as Meta;

const Template: Story<Props> = (args) => <SwitchLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
  handleChange: action('handleChange'),
};
