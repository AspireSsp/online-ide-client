import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';


const CodeEditer = () => {

  return (
    <div style={{height:'86vh'}}>
      <CodeMirror
        value="console.log('hello world!');"
        height="100%"
        maxHeight="86vh"
        theme={vscodeDark}
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log('value:', value);
        }}
      />
    </div>
  );
}

export default CodeEditer




