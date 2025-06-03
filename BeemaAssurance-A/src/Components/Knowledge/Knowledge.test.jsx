
import React from 'react';
import { render, screen } from '@testing-library/react';
import Knowledge from './Knowledge';
import '@testing-library/jest-dom';

describe('Knowledge Component', () => {
  beforeEach(() => {
    render(<Knowledge />);
  });

  test('renders the Rich Dad message', () => {
    expect(
      screen.getByText(/If Rich Dad Poor Dad were written for Indian Audience/i)
    ).toBeInTheDocument();
  });

  test('renders Our Offerings heading', () => {
    expect(screen.getByText(/Our Offerings/i)).toBeInTheDocument();
  });

  test('renders all offerings in list', () => {
    const offerings = [
      'Full Claim Support',
      'Complete Transparency',
      'Best Advisory',
      'No Spam Calls',
      'Comprehensive Support',
      'Personalized Recommendation',
    ];

    offerings.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('renders both images with correct alt text', () => {
    expect(screen.getByAltText(/Rich Dad Indian Health Insurance/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Our Offerings/i)).toBeInTheDocument();
  });
});
