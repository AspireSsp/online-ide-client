import React from 'react'
import Files from '../component/Files'
import ActiveFiles from '../component/ActiveFiles'
import CodeEditer from '../component/CodeEditer'
import Output from '../component/Output'
import TabFiles from '../component/TabFiles'
import YourFiles from '../component/YourFiles'
// import CodeEditer from '../component/CodeEditer'
// import Compiler from '../component/Compiler'

const Codeped = () => {
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
                  <div style={{background:'#1e1e1e'}}>
                  {/* code editer */}
                    <CodeEditer />
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