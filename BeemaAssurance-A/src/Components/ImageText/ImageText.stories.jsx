import React from 'react';
import ImageText from './ImageText';

const sampleImage = 'https://via.placeholder.com/300x200.png?text=Sample+Image';

export default {
  title: 'Components/ImageText',
  component: ImageText,
  argTypes: {
    reverse: { control: 'boolean' },
    text: { control: 'text' },
    alt: { control: 'text' },
    image: { control: 'text' },
  },
};

const Template = (args) => <ImageText {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: sampleImage,
  alt: 'Sample Image',
  text: 'This is an example of the ImageText component.',
  reverse: false,
};

export const Reversed = Template.bind({});
Reversed.args = {
  image: sampleImage,
  alt: 'Sample Image',
  text: 'This layout is reversed with image on the right.',
  reverse: true,
};
