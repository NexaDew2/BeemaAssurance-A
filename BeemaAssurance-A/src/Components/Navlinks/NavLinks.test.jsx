
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navlinks from './Navlinks'; // Adjust the path as needed
import '@testing-library/jest-dom';

describe('Navlinks Component', () => {
  const mockClaimsClick = jest.fn();
  const mockHealthClick = jest.fn();
  const mockKnowledgeClick = jest.fn();

  beforeEach(() => {
    render(
      <Navlinks
        onClaimsClick={mockClaimsClick}
        onHealthClick={mockHealthClick}
        onKnowledgeClick={mockKnowledgeClick}
      />
    );
  });

  test('renders all navigation links', () => {
    expect(screen.getByRole('button', { name: /claims/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /health insurance/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /knowledge/i })).toBeInTheDocument();
  });

  test('calls onClaimsClick when "Claims" is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /claims/i }));
    expect(mockClaimsClick).toHaveBeenCalledTimes(1);
  });

  test('calls onHealthClick when "Health Insurance" is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /health insurance/i }));
    expect(mockHealthClick).toHaveBeenCalledTimes(1);
  });

  test('calls onKnowledgeClick when "Knowledge" is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /knowledge/i }));
    expect(mockKnowledgeClick).toHaveBeenCalledTimes(1);
  });
});
