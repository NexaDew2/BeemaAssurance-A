
import React from 'react';
import Button from './Button'; // Adjust path if needed

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    bgColor: { control: 'text' },
    textColor: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    icon: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  bgColor:"bg-green-700"
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Download',
  icon: '/icon.png', // Replace with a real path if needed
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  label: 'Custom Button',
  bgColor: 'bg-green-700',
  textColor: 'text-yellow-100',
  width: 'w-48',
  height: 'h-12',
  borderRadius: 'rounded-full',
};
