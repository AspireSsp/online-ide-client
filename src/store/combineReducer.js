import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter';
import userReducer from '../features/user/user';
import todoReducer from '../features/todo/todoSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  todos : todoReducer,
  // Add more reducers as needed
});

export default rootReducer;
