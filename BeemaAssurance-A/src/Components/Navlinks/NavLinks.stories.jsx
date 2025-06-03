import React, { useState } from 'react';
import Navlinks from './Navlinks'; // Adjust path as needed

export default {
  title: 'Components/Navlinks',
  component: Navlinks,
};

const Template = () => {
  const [clicked, setClicked] = useState('');

  return (
    <Navlinks
      onClaimsClick={() => setClicked('Claims')}
      onHealthClick={() => setClicked('Health Insurance')}
      onKnowledgeClick={() => setClicked('Knowledge')}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.storyName = 'Default with Simulated Click Highlight';
