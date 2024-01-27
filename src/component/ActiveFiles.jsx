import { CloseIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeFile } from '../features/file/fileSlice'

const ActiveFiles = () => {
    const files = useSelector(state=> state.file.activeFiles);
    const currentFile = useSelector(state=> state.file.currentFile);
    const dispatch = useDispatch();
    console.log("active files", files);
    console.log("currentFile files", currentFile);

    const handleCloseFile = (file)=>{
        console.log(file);
        dispatch(closeFile(file))
    }
    return (
        <div style={{width:'100%'}}>
            <Flex boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} w={"100%"}>
                {
                    files?.map((file)=>(
                        <button key={file._id} style={{color:"#ffffff", padding:'6px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center'}}>
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