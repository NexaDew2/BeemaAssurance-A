
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from './Homepage';
import '@testing-library/jest-dom';

describe('Homepage Component', () => {
  beforeEach(() => {
    render(<Homepage />);
  });

  test('renders Whatsapp icon', () => {
    const whatsappIcon = screen.getByAltText(/whatsapp icon/i);
    expect(whatsappIcon).toBeInTheDocument();
  });

  test('renders Whatsapp Us button', () => {
    const whatsappButton = screen.getByRole('button', { name: /whatsapp us/i });
    expect(whatsappButton).toBeInTheDocument();
  });

  test('renders Umbrella image', () => {
    const umbrellaImage = screen.getByAltText(/family under umbrella/i);
    expect(umbrellaImage).toBeInTheDocument();
  });

  test('renders BeemaAssurance logo banner', () => {
    const logoImage = screen.getByAltText(/beemaassurance logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  test('clicking on Whatsapp button opens WhatsApp in new tab', () => {
    // Mock window.open
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => {});
    const button = screen.getByRole('button', { name: /whatsapp us/i });
    fireEvent.click(button);
    expect(openSpy).toHaveBeenCalledWith('https://wa.me/+918453739878', '_blank');
    openSpy.mockRestore();
  });

  test('clicking on WhatsApp icon opens WhatsApp in new tab', () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => {});
    const icon = screen.getByAltText(/whatsapp icon/i);
    fireEvent.click(icon);
    expect(openSpy).toHaveBeenCalledWith('https://wa.me/+918453739878', '_blank');
    openSpy.mockRestore();
  });
});
