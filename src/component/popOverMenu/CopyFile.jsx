import { CopyIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { copy } from '../../utills/copyText'

const CopyFile = ({file}) => {
  return (
    <div>
        <Flex onClick={()=>{copy(file.data)}} alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
            <ListIcon as={CopyIcon} />
            Copy
            <Spacer />
            <Text fontSize={12} fontWeight={'300'} >Ctrl+C</Text>
        </Flex>
    </div>
  )
}

export default CopyFile