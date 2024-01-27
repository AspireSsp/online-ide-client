import React from 'react'
import Files from '../component/Files'
import CodeEditer from '../component/CodeEditer'
import Output from '../component/Output'
import TabFiles from '../component/TabFiles'
import YourFiles from '../component/YourFiles'
import { useSelector } from 'react-redux'
import { Button } from '@chakra-ui/react'
import AddModel from '../component/AddModel'


const Codeped = () => {
  const selectedFile = useSelector(state=>state.file.currentFile)
  return (
    <div>
        <div style={{width : "100%", background:'#1F2937', display:'flex', height:'91vh' }}>
            <div style={{width: '60%', display:'flex', border:'1px solid black'}}>
                {/* files  */}
                <div style={{width:"180px", border:"1px solid black"}}>
                  <div>
                    <YourFiles />
                  </div>
                  <div>
                    <Files />
                  </div>
                </div>
                <div style={{width:'100%'}}>
                  <div tyle={{width: '100%'}}>
                    <TabFiles />
                  </div>
                  <div style={{background: selectedFile ? '#1e1e1e' : '#1F2937', height: '86vh'}} onClick={()=>{console.log('clicked')}}>
                    {
                        selectedFile ? 
                          <CodeEditer /> : 
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'80%', flexDirection:'column'}}>
                              <h2 style={{color: '#ffffff'}}>Select a File or Create New File</h2>
                              <AddModel />
                            </div>
                    }
                  </div>
                </div>
            </div>
                {/* <Compiler /> */}
            <div style={{width: '40%',border:'1px solid black'}}>
              <Output />
            </div>
        </div>
    </div>
  )
}

export default Codeped