import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { TagFilter, Props } from '../TagFilter';

export default {
  title: 'molecules/TagFilter',
  component: TagFilter,
} as Meta;

const Template: Story<Props> = (args) => <TagFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedTag: 'TypeScript',
  popularTags: ['TypeScript', 'CSS', 'HTTP', 'アーキテクチャ', 'アジャイル'],
  handleSelect: action('handleSelect'),
};
