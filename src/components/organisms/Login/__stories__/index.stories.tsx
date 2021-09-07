import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Login, Props } from '../Login';

export default {
  title: 'organisms/Login',
  component: Login,
} as Meta;

const Template: Story<Props> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  signinWithGoogle: () => Promise.resolve(),
};
