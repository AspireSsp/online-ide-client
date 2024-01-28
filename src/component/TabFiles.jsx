import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import ActiveFiles from './ActiveFiles'
import { useDispatch, useSelector } from 'react-redux'
import { compileFile, saveFile } from '../features/file/fileSlice'

const TabFiles = () => {
  const file = useSelector(state=>state.file);
  const dispatch = useDispatch();

  const handleRun = ()=>{
    const body = {
      code : file.currentCode,
      language : file.currentFile.contentType,
    }
    dispatch(compileFile(body));
  }
  const handleSave = ()=>{
    const body = {
      code : file.currentCode,
      _id : file.currentFile._id,
    }
    dispatch(saveFile(body));
  }
  return (
    <div>
        <Flex>
            <Box >
                <ActiveFiles />
            </Box>
            <Spacer />
            <Box pe={2}>
                <Button height={8} mt={1} me={2} isDisabled={file.currentCode?.length === 0 ? true : false} colorScheme='blue' onClick={handleSave}>SAVE</Button>
                <Button height={8} mt={1} isDisabled={file.currentCode?.length === 0 ? true : false} colorScheme='blue' onClick={handleRun}>RUN</Button>
            </Box>
        </Flex>
    </div>
  )
}

export default TabFiles