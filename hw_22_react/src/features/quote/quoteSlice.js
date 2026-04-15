import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = '/api/random';

export const fetchQuotes = createAsyncThunk('quotes/fetchQuote', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    cur_quote: '',
    author: '',
    status: 'idle', // loading, succeeded, failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cur_quote = action.payload[0].q;
        state.author = action.payload[0].a;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export default quoteSlice.reducer;
