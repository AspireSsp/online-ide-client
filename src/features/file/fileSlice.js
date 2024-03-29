import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deletethis, get, patch, post } from '../../apis/api';


export const addFile = createAsyncThunk('addFile', async (requestData, { rejectWithValue }) => {
  try {
    const res = await post('file/add', requestData);
    return res.data.file;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const compileFile = createAsyncThunk('compileFile', async (requestData, { rejectWithValue }) => {
  try {
    const res = await post('compiler/run', requestData);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
export const saveFile = createAsyncThunk('saveFile', async (requestData, { rejectWithValue }) => {
  try {
    const res = await patch(`file/update/${requestData._id}`, requestData);
    return res.data.updateFile;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const deleteFile = createAsyncThunk('deleteFile', async (requestData, { rejectWithValue }) => {
  try {
    const res = await deletethis(`file/delete/${requestData._id}`);
    return res.data.deleteFile;
  } catch (error) {
    return rejectWithValue(error);
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
      currentFileIndex: null,
      currentCode: "",
      activeFiles: [],
      outputList: [],
    },
    reducers: {
      openFile: (state, action)=>{
          const index = state.activeFiles?.findIndex(ele=>{return ele._id === action.payload._id})
          state.activeFiles = index!==-1 ? state.activeFiles : [action.payload, ...state.activeFiles]
          state.currentFile = action.payload;
          state.currentCode = index !==-1 ? state.activeFiles[index]?.data : action.payload?.data;
          state.currentFileIndex = index !==-1 ? index : 0;  
      },
      closeFile: (state, action)=>{
          state.activeFiles = state?.activeFiles?.filter((file)=>{ return file._id !== action.payload._id});
          state.currentFile = state?.activeFiles[0];
          state.currentCode = state?.activeFiles[0]?.data;
          state.currentFileIndex = 0
      },
      closeAllTabs: (state, action)=>{
          state.activeFiles = [];
          state.currentFile = null;
          state.currentCode = "";
          state.currentFileIndex = null
      },
      updateCode: (state, action)=>{
        state.currentCode = action.payload;
        let files = [...state.activeFiles];
        files[state.currentFileIndex].data = action.payload;
        state.activeFiles = files;
        state.currentFile = files[state.currentFileIndex];
      },
      switchFile: (state, action)=>{
        state.currentFile = state?.activeFiles[action.payload];
        state.currentCode = state?.activeFiles[action.payload]?.data;
        state.currentFileIndex = action.payload;
      },
      clearOutput: (state, action)=>{
        state.outputList = [];
      }
    },
    extraReducers: (builder)=>{
      // add file
      builder.addCase(addFile.pending, (state, action)=>{
          state.isLoading = true;
      });
      builder.addCase(addFile.rejected, (state, action)=>{
          state.isLoading = false;
          state.isError = true;
      });
      builder.addCase(addFile.fulfilled, (state, action)=>{
          state.isLoading = false;
      });

      // compile file
      builder.addCase(compileFile.pending, (state, action)=>{
          state.isLoading = true;
      });
      builder.addCase(compileFile.rejected, (state, action)=>{
          state.isLoading = false;
          state.isError = true;
          state.outputList = [...state.outputList, action.payload?.message];
      });
      builder.addCase(compileFile.fulfilled, (state, action)=>{
          state.isLoading = false;
          state.outputList = [...state.outputList, action.payload?.output];
          // console.log("Error->",action?.payload);
      });
      // save file
      builder.addCase(saveFile.pending, (state, action)=>{
          state.isLoading = true;
      });
      builder.addCase(saveFile.rejected, (state, action)=>{
          state.isLoading = false;
          state.isError = true;
          // console.log("Error->",action.payload);
      });
      builder.addCase(saveFile.fulfilled, (state, action)=>{
        state.isLoading = false;
      });
      // delete file
      builder.addCase(deleteFile.pending, (state, action)=>{
          state.isLoading = true;
        });
        builder.addCase(deleteFile.rejected, (state, action)=>{
          state.isLoading = false;
          state.isError = true;
          // console.log("Error->",action.payload);
        });
        builder.addCase(deleteFile.fulfilled, (state, action)=>{
          console.log(action.payload);
          state.isLoading = false;
          state.activeFiles = state?.activeFiles?.filter((file)=>{ return file._id !== action.payload._id});
          state.currentFile = state?.activeFiles[0];
          state.currentCode = state?.activeFiles[0]?.data;
          state.currentFileIndex = 0
      });
      

    }
  }
)

export default fileSlice.reducer;
export const { openFile, closeFile, closeAllTabs, updateCode, switchFile, clearOutput } = fileSlice.actions