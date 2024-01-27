import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter';
import userReducer from '../features/user/user';
import todoReducer from '../features/todo/todoSlice'

import authSlice from '../features/authSlice';
import dropdownSlice from '../features/folder/dropdownSlice';
import folderSlice from '../features/folder/folderSlice';
import fileSlice from '../features/file/fileSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  todos: todoReducer,
  folders: folderSlice,
  auth: authSlice,
  folderDropdown: dropdownSlice,
  file: fileSlice,
  // Add more reducers as needed
});

export default rootReducer;
