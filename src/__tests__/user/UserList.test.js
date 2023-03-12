import { render, screen, within } from '@testing-library/react';
import UserList from '../../user/UserList';

const renderComponent = () => {
  const users = [
    { name: 'andres', email: 'andres@email.com' },
    { name: 'david', email: 'david@email.com' },
  ];
  // Render the component
  const { container } = render(<UserList users={users} />);
  return { users, container };
};

test('render one row per user, with test id', () => {
  renderComponent();
  // Find all the rows in the table
  // screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});
test('render one row per user, without test id', () => {
  const { container } = renderComponent();
  // Find all the rows in the table
  // screen.logTestingPlaygroundURL(); // Example
  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');
  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});
test('render the email and name of each user', () => {
  const { users } = renderComponent();
  // screen.logTestingPlaygroundURL();
  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
