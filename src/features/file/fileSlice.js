import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get, post } from '../../apis/api';


export const addFile = createAsyncThunk('addFile', async (requestData) => {
  try {
    const res = await post('file/add', requestData);
    console.log(res);
    return res.data.file;
  } catch (error) {
    throw error;
  }
});

const fileSlice = createSlice(
  {
    name: 'file',
    initialState: {
      isLoading: false,
      data: null,
      isError: false,
      currentFile: null,
      activeFiles: [],
    },
    reducers: {
      openFile: (state, action)=>{
          state.currentFile = action.payload;
          state.activeFiles = [action.payload, ...state.activeFiles]  
      },
      closeFile : (state, action)=>{
          state.activeFiles = state?.activeFiles.filter((file)=>{ return file._id !== action.payload._id});
          state.currentFile = state?.activeFiles[0];
      },
      updateCode : (state, action)=>{
        console.log('file pay ', action.payload);
          state.currentFile = action.payload;
      }
    },
    extraReducers: (builder)=>{

      builder.addCase(addFile.fulfilled, (state, action)=>{
        state.isLoading = false;
      });

    }
  }
)

export default fileSlice.reducer;
export const { openFile, closeFile, updateCode } = fileSlice.actions