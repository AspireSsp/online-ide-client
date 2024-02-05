import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get, post } from '../../apis/api';

export const getFoldersList = createAsyncThunk('getfolders', async (requestData, { rejectWithValue }) => {
  try {
    const res = await get('folder/all/files');
    return res.data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const addFolder = createAsyncThunk('addFolder', async (requestData, { rejectWithValue }) => {
  try {
    const res = await post('folder/add', requestData);
    return res.data.folder;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const getFile = createAsyncThunk('getFile', async (requestData, { rejectWithValue }) => {
  try {
    const res = await get(`file/get/${requestData}`);
    return res.data.file;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const folderSlice = createSlice(
    {
        name: 'folder',
        initialState: {
            isLoading: false,
            data: null,
            isError: false,
        },
        extraReducers: (builder)=>{
            builder.addCase(getFoldersList.pending, (state, action)=>{
                state.isLoading = true;
            });
            builder.addCase(getFoldersList.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                // console.log("Error->",action.payload);
            })
            builder.addCase(getFoldersList.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.data = action.payload;
            });

            builder.addCase(addFolder.fulfilled, (state, action)=>{
                state.isLoading = false;
            });

            // get file
            builder.addCase(getFile.pending, (state, action)=>{
              state.isLoading = true;
            });
            builder.addCase(getFile.rejected, (state, action)=>{
              state.isLoading = false;
              state.isError = true;
              // console.log("Error->",action.payload);
            });
            builder.addCase(getFile.fulfilled, (state, action)=>{
              state.isLoading = false;
              state.data = [action.payload]
            });
        }
    }
)

export default folderSlice.reducer;