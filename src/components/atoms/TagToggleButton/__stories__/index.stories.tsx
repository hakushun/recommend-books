import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { TagToggleButton, Props } from '..';

export default {
  title: 'atoms/TagToggleButton',
  component: TagToggleButton,
} as Meta;

const Template: Story<Props> = (args) => <TagToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isEditable: false,
  handleToggle: action('handleToggle'),
};
