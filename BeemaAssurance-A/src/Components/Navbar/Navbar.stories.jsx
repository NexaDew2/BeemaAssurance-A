import React from 'react';
import Navbar from './Navbar'; // Adjust path if needed

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLogoClick: () => alert('Logo clicked'),
  onClaimsClick: () => alert('Claims clicked'),
  onHealthClick: () => alert('Health clicked'),
  onKnowledgeClick: () => alert('Knowledge clicked'),
  onBuyPolicyClick: () => alert('Buy Policy clicked'),
};
