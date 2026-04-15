import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './features/quote/quoteSlice';

const store = configureStore({
  reducer: {
    quotes: quoteReducer,
  },
});
export default store;
