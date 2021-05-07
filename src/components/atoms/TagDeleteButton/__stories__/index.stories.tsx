import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TagDeleteButon, Props } from '..';

export default {
  title: 'atoms/TagDeleteButon',
  component: TagDeleteButon,
} as Meta;

const Template: Story<Props> = (args) => <TagDeleteButon {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: { id: 'react', value: 'React' },
  handleRemove: action('handleRemove'),
};
