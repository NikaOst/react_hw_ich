import { createStore } from 'redux';
import userReducer from '../redux/reducer/index';

const store = createStore(userReducer);
export default store;
