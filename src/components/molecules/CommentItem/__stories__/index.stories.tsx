import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { CommentItem, Props } from '..';

export default {
  title: 'molecules/CommentItem',
  component: CommentItem,
} as Meta;

const Template: Story<Props> = (args) => <CommentItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  bookId: '123456',
  comment: {
    id: '123456',
    content: 'サンプルコメント',
    author: {
      name: '中野駿',
      id: '315X13qvz7N847FJPYpDg6KLUMz1',
      email: 'shun.nakano@nijibox.co.jp',
    },
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  handleEdit: action('handleEdit'),
  handleDelete: action('handleDelete'),
};
