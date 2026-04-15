function UserList({ userList }) {
  return (
    <div>
      {userList.map((user) => {
        return (
          <div style={{ display: 'flex', gap: '10px' }} key={user.id}>
            <p>{user.id}: </p>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}
export default UserList;
