import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';


// Mock image imports so tests don't fail due to missing assets
jest.mock('../../assets/healthinsurance.png', () => 'healthinsurance.png');
jest.mock('../../assets/logo.png', () => 'logo.png');

// Optionally, mock Icontext component if it contains logic or context
jest.mock('../icontext/Icontext', () => () => <div>Mocked Icontext</div>);

describe('Footer Component', () => {
  test('renders health insurance image', () => {
    render(<Footer />);
    const img = screen.getByAltText('Health Insurance Illustration');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'healthinsurance.png');
  });

  test('renders logo image', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Beema Assurance Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.png');
  });

  test('renders Icontext component', () => {
    render(<Footer />);
    expect(screen.getByText('Mocked Icontext')).toBeInTheDocument();
  });
});
