import { AddIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const Find = () => {
  return (
    <div>
      <Flex alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
        <ListIcon as={IoSearchSharp} />
        Find
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} >Ctrl+F</Text>
      </Flex>
    </div>
  )
}

export default Find