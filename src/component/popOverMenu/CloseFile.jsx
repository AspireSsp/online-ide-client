import { AddIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { RiFileCloseLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { closeFile } from '../../features/file/fileSlice'

const CloseFile = ({file, onClose}) => {
  const dispatch = useDispatch();
  const handleClose = async()=>{
    dispatch(closeFile(file));
    onClose();
  }
  return (
    <div>
      <Flex onClick={handleClose} alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
        <ListIcon as={RiFileCloseLine} />
        Close File
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} ></Text>
      </Flex>
    </div>
  )
}

export default CloseFile