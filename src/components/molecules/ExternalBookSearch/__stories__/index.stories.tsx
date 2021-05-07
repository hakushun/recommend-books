import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ExternalBookSearch, Props } from '..';

export default {
  title: 'molecules/ExternalBookSearch',
  component: ExternalBookSearch,
} as Meta;

const Template: Story<Props> = (args) => <ExternalBookSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleSubmit: () => Promise.resolve(),
};
