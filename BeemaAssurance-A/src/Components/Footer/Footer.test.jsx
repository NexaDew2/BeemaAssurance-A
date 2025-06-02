import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { Default } from './Footer.stories';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders the footer container', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders health insurance image with correct alt', () => {
    expect(screen.getByAltText('Health Insurance Illustration')).toBeInTheDocument();
  });

  test('renders Beema Assurance logo', () => {
    expect(screen.getByAltText('Beema Assurance Logo')).toBeInTheDocument();
  });

  test('renders Instagram icon and handle', () => {
    expect(screen.getByAltText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('@beemaassurance')).toBeInTheDocument();
  });

  test('renders phone icon and number', () => {
    expect(screen.getByAltText('Phone')).toBeInTheDocument();
    expect(screen.getByText('+91 84537 39878')).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    expect(screen.getByText('© 2025 BeemaAssurance. All rights reserved.')).toBeInTheDocument();
  });
});

describe('Footer Story', () => {
  test('renders Footer story component', () => {
    render(<Default {...Default.args} />);
  });
});
