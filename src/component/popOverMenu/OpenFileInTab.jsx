import { AddIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsFileEarmarkText } from 'react-icons/bs'
import { openFile } from '../../features/file/fileSlice'
import { useDispatch } from 'react-redux'

const OpenFileInTab = ({file, onClose}) => {
  const dispatch = useDispatch();
  const handleOpenFile = ()=>{
    dispatch(openFile(file));
    onClose()
  }
  return (
    <div>
      <Flex onClick={handleOpenFile} alignItems={'center'} textColor={"#FFFFFF"} background={'#1F2937'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
          <ListIcon as={BsFileEarmarkText} />
            Open File
          <Spacer />
          <Text fontSize={12} fontWeight={'300'} ></Text>
      </Flex>
    </div>
  )
}

export default OpenFileInTab