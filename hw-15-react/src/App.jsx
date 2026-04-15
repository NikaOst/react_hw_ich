import './App.css';
import { useCallback, useMemo, useState } from 'react';
import UserList from './components/userList';

const userList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Max' },
  { id: 3, name: 'Anna' },
];

function App() {
  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((filterValue) => {
    return userList.filter((user) => {
      return user.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }, []);

  const memoizedFilteredResult = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div>
      <div>
        <input
          value={filter}
          onInput={(event) => setFilter(event.target.value)}
          type="text"
          placeholder="filter..."
        />
      </div>
      <UserList userList={memoizedFilteredResult} />
    </div>
  );
}

export default App;
