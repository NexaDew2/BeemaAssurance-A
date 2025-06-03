
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar'; // Adjust the path if needed
import '@testing-library/jest-dom';

describe('Navbar Component', () => {
  const mockLogoClick = jest.fn();
  const mockClaimsClick = jest.fn();
  const mockHealthClick = jest.fn();
  const mockKnowledgeClick = jest.fn();

  beforeEach(() => {
    render(
      <Navbar
        onLogoClick={mockLogoClick}
        onClaimsClick={mockClaimsClick}
        onHealthClick={mockHealthClick}
        onKnowledgeClick={mockKnowledgeClick}
      />
    );
  });

  test('renders the logo image', () => {
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('calls onLogoClick when logo is clicked', () => {
    const logo = screen.getByAltText(/logo/i);
    fireEvent.click(logo);
    expect(mockLogoClick).toHaveBeenCalled();
  });

  test('renders the Buy Policy button', () => {
    const button = screen.getByRole('button', { name: /buy policy/i });
    expect(button).toBeInTheDocument();
  });

  test('clicking Buy Policy triggers alert', () => {
    // mock alert
    window.alert = jest.fn();
    const button = screen.getByRole('button', { name: /buy policy/i });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Policy purchase flow');
  });

  test('renders Navlinks component with passed props', () => {
    // These interactions will depend on what's inside Navlinks.
    // You might mock Navlinks or check for specific link labels if known.
    // Example (if Navlinks renders a "Claims" link):
    const claimsLink = screen.getByText(/claims/i);
    fireEvent.click(claimsLink);
    expect(mockClaimsClick).toHaveBeenCalled();
  });
});
