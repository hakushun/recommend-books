import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { Modal, Props } from '../Modal';

export default {
  title: 'molecules/Modal',
  component: Modal,
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  context: '',
  handleToggle: action('handleToggle'),
  handleKeydown: action('handleKeydown'),
};
