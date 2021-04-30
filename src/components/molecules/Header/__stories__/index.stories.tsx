import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, Props } from '../Header';

export default {
  title: 'molecules/Header',
  component: Header,
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    id: '123456',
    name: 'test user',
    email: 'sample@sample.com',
  },
  logout: () => Promise.resolve(),
};
