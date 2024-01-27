import { combineReducers } from '@reduxjs/toolkit';
import dropdownSlice from '../features/folder/dropdownSlice';
import folderSlice from '../features/folder/folderSlice';
import fileSlice from '../features/file/fileSlice';
import authSlice from '../features/user/authSlice';

const rootReducer = combineReducers({
  folders: folderSlice,
  auth: authSlice,
  folderDropdown: dropdownSlice,
  file: fileSlice,
  // Add more reducers as needed
});

export default rootReducer;
