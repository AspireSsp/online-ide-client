import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { closeAllTabs } from '../../features/file/fileSlice'

const CloseAllFiles = ({onClose}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Flex onClick={()=>{dispatch(closeAllTabs()); onClose()}} alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
        <ListIcon as={FaRegWindowClose} />
          Close All File
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} ></Text>
      </Flex>
    </div>
  )
}

export default CloseAllFiles