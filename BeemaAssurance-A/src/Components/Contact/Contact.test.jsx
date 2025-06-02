import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: 'Success' }),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Contact Component', () => {
  test('renders form inputs and button', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
  });

  test('allows typing in form fields', () => {
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'Akshay' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'akshay@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Your Message/i), { target: { value: 'Hello there!' } });

    expect(screen.getByPlaceholderText(/Name/i)).toHaveValue('Akshay');
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue('akshay@example.com');
    expect(screen.getByPlaceholderText(/Your Message/i)).toHaveValue('Hello there!');
  });

  test('submits form and shows success message (mocked)', async () => {
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'Akshay' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'akshay@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Your Message/i), { target: { value: 'Test message' } });

    fireEvent.click(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() =>
      expect(screen.getByText(/Message sent successfully!/i)).toBeInTheDocument()
    );

    // Form reset after successful submission
    expect(screen.getByPlaceholderText(/Name/i)).toHaveValue('');
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue('');
    expect(screen.getByPlaceholderText(/Your Message/i)).toHaveValue('');
  });

  test('shows error message on failed submission', async () => {
    // Mock fetch to fail
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'Akshay' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'akshay@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Your Message/i), { target: { value: 'Test message' } });

    fireEvent.click(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() =>
      expect(screen.getByText(/Failed to send message. Try again later./i)).toBeInTheDocument()
    );

    // Form should NOT reset on failure
    expect(screen.getByPlaceholderText(/Name/i)).toHaveValue('Akshay');
    expect(screen.getByPlaceholderText(/Email/i)).toHaveValue('akshay@example.com');
    expect(screen.getByPlaceholderText(/Your Message/i)).toHaveValue('Test message');
  });
});
