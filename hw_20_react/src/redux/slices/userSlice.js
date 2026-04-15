import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
      { name: 'Charlie', email: 'charlie@example.com' },
    ],
    status: 'idle', // loading, succeeded, failed
    error: null,
  },
  reducers: {},
});
export default usersSlice.reducer;
