import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { TagsEditInput, Props } from '..';

export default {
  title: 'atoms/TagsEditInput',
  component: TagsEditInput,
} as Meta;

const Template: Story<Props> = (args) => <TagsEditInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [],
  handleKeyDown: action('handleKeyDown'),
};
