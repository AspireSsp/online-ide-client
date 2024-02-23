import { EditIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import InputModel from '../InputModel'

const RenameFile = ({file}) => {
  return (
    <div>
      <Flex alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
          <ListIcon as={EditIcon} />
          <InputModel>{file}</InputModel>
          <Spacer />
          <Text fontSize={12} fontWeight={'300'} >Fn+F2</Text>
      </Flex>
    </div>
  )
}

export default RenameFile