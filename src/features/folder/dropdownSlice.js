import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get } from '../../apis/api';


export const getFolderDropdown = createAsyncThunk('folderDropdown', async (requestData) => {
  try {
    const res = await get('folder/dropdown');
    return res.data.folders;
  } catch (error) {
    throw error;
  }
});

const dropdownSlice = createSlice(
    {
        name: 'folder',
        initialState: {
            isLoading: false,
            data: null,
            isError: false,
        },
        extraReducers: (builder)=>{
            builder.addCase(getFolderDropdown.pending, (state, action)=>{
                state.isLoading = true;
            });
            builder.addCase(getFolderDropdown.rejected, (state, action)=>{
                state.isLoading = false;
                state.isError = true;
                console.log("Error->",action.payload);
            })
            builder.addCase(getFolderDropdown.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.data = action.payload;
            })
        }
    }
)

export default dropdownSlice.reducer;