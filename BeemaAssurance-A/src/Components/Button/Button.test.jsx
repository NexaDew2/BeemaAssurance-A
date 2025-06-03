
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button'; // Adjust the path if needed
import '@testing-library/jest-dom';

describe('Button Component', () => {
  test('renders with label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('triggers onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Submit" onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with custom styles', () => {
    render(
      <Button
        label="Styled Button"
        bgColor="bg-green-600"
        textColor="text-yellow-200"
        width="w-48"
        height="h-12"
        borderRadius="rounded-full"
      />
    );
    const button = screen.getByRole('button', { name: /styled button/i });
    expect(button).toHaveClass('bg-green-600');
    expect(button).toHaveClass('text-yellow-200');
    expect(button).toHaveClass('w-48');
    expect(button).toHaveClass('h-12');
    expect(button).toHaveClass('rounded-full');
  });

  test('renders icon when provided', () => {
    render(<Button label="With Icon" icon="/icon.png" />);
    const img = screen.getByRole('img', { hidden: true }); // hidden because button has text
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/icon.png');
  });
});
