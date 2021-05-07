import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TagsEditList, Props } from '..';

export default {
  title: 'molecules/TagsEditList',
  component: TagsEditList,
} as Meta;

const Template: Story<Props> = (args) => <TagsEditList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    {
      value: 'Takepepe',
      id: 'takepepe',
    },
    {
      id: 'typescript',
      value: 'TypeScript',
    },
  ],
  handleRemove: action('handleRemove'),
};
