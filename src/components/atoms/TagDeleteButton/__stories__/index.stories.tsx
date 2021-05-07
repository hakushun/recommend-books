import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TagDeleteButton, Props } from '..';

export default {
  title: 'atoms/TagDeleteButton',
  component: TagDeleteButton,
} as Meta;

const Template: Story<Props> = (args) => <TagDeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: { id: 'react', value: 'React' },
  handleRemove: action('handleRemove'),
};
