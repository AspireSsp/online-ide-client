import { CloseIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeFile, switchFile } from '../features/file/fileSlice'

const ActiveFiles = () => {
    const files = useSelector(state=> state.file.activeFiles);
    const currentFileIndex = useSelector(state=> state.file.currentFileIndex);
    const dispatch = useDispatch();

    const handleCloseFile = (file)=>{
        dispatch(closeFile(file))
    }
    return (
        <div className='tabs' style={{width:'100%'}}>
            <Flex boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} w={"100%"}>
                {
                    files?.map((file, index)=>(
                        
                        <button key={file._id} onClick={()=>{dispatch(switchFile(index))}} style={{color:"#ffffff", padding:'6px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', borderBottom: currentFileIndex===index ? '1px solid blue' : '0px'}}>
                            <Text pe={2} >{file.fileName+'.'+file.contentType}</Text>  
                            <CloseIcon w={3} pt={2} onClick={()=>{handleCloseFile(file)}} />
                        </button>
                    ))
                }
                

            </Flex>
        </div>
    )
}

export default ActiveFiles