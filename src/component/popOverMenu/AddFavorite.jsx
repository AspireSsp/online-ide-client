import { AddIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FiStar } from 'react-icons/fi'

const AddFavorite = () => {
  return (
    <div>
      <Flex alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
        <ListIcon as={FiStar} />
        Add Favorite
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} ></Text>
      </Flex>
    </div>
  )
}

export default AddFavorite