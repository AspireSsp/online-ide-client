import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { useDispatch, useSelector } from 'react-redux';
import { updateCode } from '../features/file/fileSlice';


const CodeEditer = () => {
  const dispatch = useDispatch();
  const currentCode = useSelector(state=> state.file.currentCode);

  const handleOnChange = (value)=>{
    dispatch(updateCode(value))
  }
  
  return (
    <div style={{height:'86vh'}}>
      <CodeMirror
        value={currentCode}
        height="100%"
        maxHeight="86vh"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) =>{handleOnChange(value)}}
      />
    </div>
  );
}

export default CodeEditer




