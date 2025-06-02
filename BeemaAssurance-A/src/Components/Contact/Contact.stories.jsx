import React from 'react';
import Contact from './Contact';

// 👇 Default export defines Storybook metadata
export default {
  title: 'Components/Contact',
  component: Contact,
};

// 👇 Template for rendering the component
const Template = (args) => <Contact/>;

// 👇 Primary story using default props
export const Default = Template.bind({});
Default.args = {};
