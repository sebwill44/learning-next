import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Title } from '../ui/atoms/Title';

export default {
  title: 'Example/Title',
  component: Title,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    text: 'default text',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const SomeText = Template.bind({});
SomeText.args = {
    text: 'Hello 1'
}
export const MoreText = Template.bind({});
MoreText.args = {
    text: 'Hello 2'
}
