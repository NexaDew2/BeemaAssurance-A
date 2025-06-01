
import React from 'react';
import { render, screen } from '@testing-library/react';
import HealthInsurance from './HealthInsurance';
import '@testing-library/jest-dom';

describe('HealthInsurance Component', () => {
  beforeEach(() => {
    render(<HealthInsurance />);
  });

  test('renders section heading', () => {
    expect(screen.getByText(/Benefits of Health Insurance/i)).toBeInTheDocument();
  });

  test('renders all benefit list items', () => {
    expect(screen.getByText(/Cashless Hospitalization/i)).toBeInTheDocument();
    expect(screen.getByText(/Fast Claim Settlement/i)).toBeInTheDocument();
    expect(screen.getByText(/Tax Benefits \(Section 80D\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Coverage for Children and Family/i)).toBeInTheDocument();
    expect(screen.getByText(/Free Health Check-up/i)).toBeInTheDocument();
  });

  test('renders the benefits image', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('benifits'));
  });
});
