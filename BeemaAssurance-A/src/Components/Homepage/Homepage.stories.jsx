
import React from 'react';
import Homepage from './Homepage'; // Adjust path as necessary

export default {
  title: 'Pages/Homepage',
  component: Homepage,
};

const Template = (args) => <Homepage {...args} />;

export const Default = Template.bind({});
Default.args = {};
