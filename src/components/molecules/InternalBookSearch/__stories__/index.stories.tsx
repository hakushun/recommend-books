import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { InternalBookSearch, Props } from '../InternalBookSearch';

export default {
  title: 'molecules/InternalBookSearch',
  component: InternalBookSearch,
} as Meta;

const Template: Story<Props> = (args) => <InternalBookSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchword: '',
  handleSearch: action('handleSearch'),
};
