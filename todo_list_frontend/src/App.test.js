import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
  render(<App />);
  const title = screen.getByText(/Ocean Tasks/i);
  expect(title).toBeInTheDocument();
});

test('renders new task input', () => {
  render(<App />);
  const input = screen.getByLabelText(/New task description/i);
  expect(input).toBeInTheDocument();
});
