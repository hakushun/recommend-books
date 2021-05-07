import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CommentEditButton, Props } from '../CommentEditButton';

export default {
  title: 'atoms/CommentEditButton',
  component: CommentEditButton,
} as Meta;

const Template: Story<Props> = (args) => <CommentEditButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: {
    id: '123456',
    content: 'さんぷるこめんと',
    author: null,
    createdAt: 0,
    updatedAt: 0,
  },
  handleEdit: action('handleEdit'),
};
