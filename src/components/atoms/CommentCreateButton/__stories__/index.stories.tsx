import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CommentCreateButton, Props } from '..';

export default {
  title: 'atoms/CommentCreateButton',
  component: CommentCreateButton,
} as Meta;

const Template: Story<Props> = (args) => <CommentCreateButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  bookId: '123456',
  isLoading: false,
  handleCreate: action('handleCreate'),
};
