import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CommentUpdateButton, Props } from '..';

export default {
  title: 'atoms/CommentUpdateButton',
  component: CommentUpdateButton,
} as Meta;

const Template: Story<Props> = (args) => <CommentUpdateButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  bookId: '12345',
  item: {
    id: '123456',
    content: 'さんぷるこめんと',
    author: null,
    createdAt: 0,
    updatedAt: 0,
  },
  isLoading: false,
  handleUpdate: action('handleUpdate'),
};
