
import React from 'react';
import HealthInsurance from './HealthInsurance';

export default {
  title: 'Sections/HealthInsurance',
  component: HealthInsurance,
};

const Template = (args) => <HealthInsurance {...args} />;

export const Default = Template.bind({});
Default.args = {};
