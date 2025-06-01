
import React from 'react';
import Knowledge from './Knowledge';

export default {
  title: 'Sections/Knowledge',
  component: Knowledge,
};

const Template = (args) => <Knowledge {...args} />;

export const Default = Template.bind({});
Default.args = {};
