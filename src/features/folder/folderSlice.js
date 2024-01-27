import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get, post } from '../../apis/api';

export const getFoldersList = createAsyncThunk('getfolders', async (requestData) => {
  try {
    const res = await get('folder/all/files');
    console.log('all files-->', res.data.data);
    return res.data.data;
  } catch (error) {
    throw error;
  }
});
export const addFolder = createAsyncThunk('addFolder', async (requestData) => {
  try {
    const res = await post('folder/add', requestData);
    console.log(res);
    return res.data.folder;
  } catch (error) {
    throw error;
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
                console.log("Error->",action.payload);
            })
            builder.addCase(getFoldersList.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.data = action.payload;
            });

            builder.addCase(addFolder.fulfilled, (state, action)=>{
                state.isLoading = false;
            });

        }
    }
)

export default folderSlice.reducer;