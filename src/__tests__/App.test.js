import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Learn Testing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Testing/i);
  expect(linkElement).toBeInTheDocument();
});
