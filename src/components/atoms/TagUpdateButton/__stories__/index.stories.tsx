import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { TagUpdateButton, Props } from '..';

export default {
  title: 'atoms/TagUpdateButton',
  component: TagUpdateButton,
} as Meta;

const Template: Story<Props> = (args) => <TagUpdateButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [],
  handleUpdate: action('handleUpdate'),
};
