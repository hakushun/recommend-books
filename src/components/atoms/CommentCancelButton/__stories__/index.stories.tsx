import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { CommentCancelButton, Props } from '..';

export default {
  title: 'atoms/CommentCancelButton',
  component: CommentCancelButton,
} as Meta;

const Template: Story<Props> = (args) => <CommentCancelButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  handleCancel: action('handleCancel'),
};
