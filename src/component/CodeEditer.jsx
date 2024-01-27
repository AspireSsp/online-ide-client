import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { useDispatch, useSelector } from 'react-redux';
import { updateCode } from '../features/file/fileSlice';


const CodeEditer = () => {
  const dispatch = useDispatch();
  const currentFile = useSelector(state=> state.file.currentFile);
  const code = "#include <stdio.h>\n\nint main() {\n  printf('Hello World');\n  return 0;\n}"
  // const code = useSelector(state=> state.file?.currentFile?.data)
  console.log('file code', code);
  return (
    <div style={{height:'86vh'}}>
      <CodeMirror
        value={currentFile?.data}
        height="100%"
        maxHeight="86vh"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          // currentFile.data = JSON.stringify(value, null, 2);
          dispatch(updateCode(currentFile))
          console.log('value:',currentFile.data);
        }}
      />
    </div>
  );
}

export default CodeEditer




