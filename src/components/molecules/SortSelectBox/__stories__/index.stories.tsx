import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SortSelectBox, Props } from '../SortSelectBox';

export default {
  title: 'molecules/SortSelectBox',
  component: SortSelectBox,
} as Meta;

const Template: Story<Props> = (args) => <SortSelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortKey: 'new',
  handleSort: action('handleSort'),
};
