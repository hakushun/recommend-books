import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { SearchResultPagenation, Props } from '..';

export default {
  title: 'molecules/SearchResultPagenation',
  component: SearchResultPagenation,
} as Meta;

const Template: Story<Props> = (args) => <SearchResultPagenation {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageCount: 70,
  handlePagenation: action('handlePagenation'),
};
