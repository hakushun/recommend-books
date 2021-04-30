import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BookListPagenation, Props } from '..';

export default {
  title: 'molecules/BookListPagenation',
  component: BookListPagenation,
} as Meta;

const Template: Story<Props> = (args) => <BookListPagenation {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageCount: 3,
  handlePagenate: action('handlePagenate'),
};
