import { DeleteIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import DeleteAlert from '../DeleteAlert'

const DeleteFile = ({file}) => {
  return (
    <div>
        <Flex alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
            <ListIcon as={DeleteIcon} />
                <DeleteAlert>{file}</DeleteAlert>
            <Spacer />
            <Text fontSize={12} fontWeight={'300'} >Delete</Text>
        </Flex>
    </div>
  )
}

export default DeleteFile