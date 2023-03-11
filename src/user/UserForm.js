import { useState } from 'react';

const UserForm = ({ onUserAdd }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const handleSumbit = (event) => {
    event.preventDefault();
    onUserAdd({ name, email });
  };
  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Enter Email: </label>
        <input
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};
export default UserForm;
