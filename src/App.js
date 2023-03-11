import { useState } from 'react';
import UserForm from './user/UserForm';
import UserList from './user/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <div>Learn Testing</div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
