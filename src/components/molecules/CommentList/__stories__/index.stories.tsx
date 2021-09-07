import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { CommentList, Props } from '../CommentList';

export default {
  title: 'molecules/CommentList',
  component: CommentList,
} as Meta;

const Template: Story<Props> = (args) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  bookId: '123456',
  comments: [
    {
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
    {
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
    {
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
  ],
  handleEdit: action('handleEdit'),
  handleDelete: action('handleDelete'),
};
