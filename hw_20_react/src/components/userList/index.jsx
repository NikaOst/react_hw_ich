import { useSelector } from 'react-redux';

function UserList() {
  const { users } = useSelector((state) => state.users);
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={Math.random()}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default UserList;
