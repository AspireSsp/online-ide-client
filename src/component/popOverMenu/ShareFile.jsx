import { AddIcon } from '@chakra-ui/icons'
import { Flex, ListIcon, Spacer, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import React from 'react'
import { IoShareSocialOutline } from 'react-icons/io5'
import { copy } from '../../utills/copyText'
import { baseUrlClient } from '../../apis/api'

const ShareFile = ({file}) => {
  const toast = useToast();
  const shareCode = ()=>{
    const url = `${baseUrlClient}code/share/${file._id}`;
    copy(url);
    toast({
        title: 'Code link copied to clipboard',
        description: url,
        status: 'info',
        duration: 9000,
        isClosable: true,
      })
  }
  return (
    <div>
      <Flex onClick={shareCode} alignItems={'center'} p={2}  borderRadius={8} _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}>
          <ListIcon as={IoShareSocialOutline} />
          Share File
          <Spacer />
      </Flex>
    </div>
  )
}

export default ShareFile