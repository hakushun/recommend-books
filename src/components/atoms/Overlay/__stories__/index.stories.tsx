import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Overlay } from '..';

export default {
  title: 'atoms/Overlay',
  component: Overlay,
} as Meta;

const Template: Story = (args) => <Overlay {...args} />;
// Error: Target container is not a DOM element.
export const Default = Template.bind({});
