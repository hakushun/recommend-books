import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CommentDeleteButton, Props } from '../CommentDeleteButton';

export default {
  title: 'atoms/CommentDeleteButton',
  component: CommentDeleteButton,
} as Meta;

const Template: Story<Props> = (args) => <CommentDeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  bookId: '123456',
  comment: {
    id: '123456',
    content: 'さんぷるこめんと',
    author: null,
    createdAt: 0,
    updatedAt: 0,
  },
  handleDelete: action('handleDelete'),
};
