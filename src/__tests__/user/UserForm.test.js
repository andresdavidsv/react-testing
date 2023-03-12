/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from '../../user/UserForm';

test('it show two inputs and a button', () => {
  // Render the component
  render(<UserForm />);
  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');
  // Assertion - make sure the component is doing
  // What we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

// test('it calls onUserAdd when the form is submitted, bad implementation', () => {
//   // NOT THE BEST IMPLEMENTATION
//   const argList = [];
//   const callback = (...args) => {
//     argList.push(args);
//   };
//   // Try to render my component
//   render(<UserForm onUserAdd={callback} />);
//   // Find the two inputs
//   const [nameInput, emailInput] = screen.getAllByRole('textbox');
//   // Simulate typing in a name
//   user.click(nameInput);
//   user.keyboard('andres');
//   // Simulate typing in an email
//   user.click(emailInput);
//   user.keyboard('andres@email.com');
//   // Find the button
//   const button = screen.getByRole('button');
//   // Simulate clicking the button
//   user.click(button);
//   // Assertion to make sure 'onUserAdd' gets called with email/name
//   expect(argList).toHaveLength(1);
//   expect(argList[0][0]).toEqual({ name: 'andres', email: 'andres@email.com' });
// });

test('it calls onUserAdd when the form is submitted, best practices', () => {
  const mock = jest.fn();
  // Try to render my component
  render(<UserForm onUserAdd={mock} />);
  // Find the two inputs
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  // Simulate typing in a name
  act(() => {
    user.click(nameInput);
    user.keyboard('andres');
  });
  // Simulate typing in an email
  act(() => {
    user.click(emailInput);
    user.keyboard('andres@email.com');
  });
  // Find the button
  const button = screen.getByRole('button');
  // Simulate clicking the button
  act(() => {
    user.click(button);
  });
  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'andres',
    email: 'andres@email.com',
  });
});

test('empties thw two inputs when form is submitted', () => {
  // Try to render my component
  render(<UserForm onUserAdd={() => {}} />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  // Simulate typing in a name
  act(() => {
    user.click(nameInput);
    user.keyboard('andres');
  });
  // Simulate typing in an email
  act(() => {
    user.click(emailInput);
    user.keyboard('andres@email.com');
  });
  // Simulate clicking the button
  act(() => {
    user.click(button);
  });

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
