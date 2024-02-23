import { AddIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { openFile } from '../../features/file/fileSlice'

const NewTab = ({onClose}) => {
  const dispatch = useDispatch();
  const untitleFile = {
    _id: Date.now(),
    fileName: "untitle",
    contentType: "txt",
    size: 28,
    data: "",
    folderId: null,
    userId : null,
    createdAt: new Date(Date.now()),
  }
  useEffect(() => {
    document.onkeydown = function (e) {
      // e.preventDefault();      
      if (e.ctrlKey && (e.key === 'm')) {
        dispatch(openFile(untitleFile));
      }
    };
  }, [])
  
  const handleuntitleFile = ()=>{
    dispatch(openFile(untitleFile));
    onClose()
  }
  return (
    <div>
        <Flex onClick={handleuntitleFile} alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
            <ListIcon as={AddIcon} />
              New Tab
            <Spacer />
            <Text fontSize={12} fontWeight={'300'} >Ctrl+M</Text>
        </Flex>
    </div>
  )
}

export default NewTab