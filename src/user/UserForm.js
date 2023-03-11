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
        <label>Name: </label>
        <input value={name} onChange={({ target }) => setName(target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};
export default UserForm;
