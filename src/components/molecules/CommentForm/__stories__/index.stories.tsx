import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CommentForm, Props } from '..';

export default {
  title: 'molecules/CommentForm',
  component: CommentForm,
} as Meta;

const Template: Story<Props> = (args) => <CommentForm {...args} />;

export const Create = Template.bind({});
Create.args = {
  bookId: '123456',
  comment: {
    id: '',
    content: '',
    author: null,
    createdAt: 0,
    updatedAt: 0,
  },
  isLoading: false,
  handleCreate: action('handleCreate'),
  handleUpdate: action('handleUpdate'),
  handleCancel: action('handleCancel'),
};

export const Update = Template.bind({});
Update.args = {
  bookId: '123456',
  comment: {
    id: '123456',
    content: '',
    author: null,
    createdAt: 0,
    updatedAt: 0,
  },
  isLoading: false,
  handleCreate: action('handleCreate'),
  handleUpdate: action('handleUpdate'),
  handleCancel: action('handleCancel'),
};
