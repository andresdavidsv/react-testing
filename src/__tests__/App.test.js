import { act, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../App';

test('renders Learn Testing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Testing/i);
  expect(linkElement).toBeInTheDocument();
});

test('can receive a new user and show it on a list', () => {
  render(<App />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    user.click(nameInput);
    user.keyboard('paz');
    user.click(emailInput);
    user.keyboard('paz@email.com');
    user.click(button);
  });

  // screen.debug();
  const name = screen.getByRole('cell', { name: 'paz' });
  const email = screen.getByRole('cell', { name: 'paz@email.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
