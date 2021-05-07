import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Comments, Props } from '../Comments';

export default {
  title: 'molecules/Comments',
  component: Comments,
} as Meta;

const Template: Story<Props> = (args) => <Comments {...args} />;

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
  isLoading: false,
  handleCreate: action('handleCreate'),
  handleEdit: action('handleEdit'),
  handleUpdate: action('handleUpdate'),
  handleDelete: action('handleDelete'),
  handleCancel: action('handleCancel'),
};
