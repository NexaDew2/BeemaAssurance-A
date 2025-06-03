import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extra matchers like toBeInTheDocument
import ImageText from './ImageText';  // Adjust the path if needed

describe('ImageText Component', () => {
  const defaultProps = {
    image: 'https://via.placeholder.com/150',
    alt: 'Sample Image',
    text: 'Sample text for ImageText component',
    reverse: false,
  };

  test('renders the text correctly', () => {
    render(<ImageText {...defaultProps} />);
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  test('renders the image with correct src and alt attributes', () => {
    render(<ImageText {...defaultProps} />);
    const image = screen.getByAltText(defaultProps.alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', defaultProps.image);
  });

  test('applies reverse class when reverse prop is true', () => {
    const { container } = render(<ImageText {...defaultProps} reverse={true} />);
    
  });

  test('does not apply reverse class when reverse prop is false', () => {
    const { container } = render(<ImageText {...defaultProps} reverse={false} />);
    expect(container.firstChild).not.toHaveClass('md:flex-row-reverse');
  });
});
