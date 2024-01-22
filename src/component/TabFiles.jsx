import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import ActiveFiles from './ActiveFiles'

const TabFiles = () => {
  return (
    <div>
        <Flex>
            <Box >
                <ActiveFiles />
            </Box>
            <Spacer />
            <Box pe={2}>
                <Button colorScheme='blue'>RUN</Button>
            </Box>
        </Flex>
    </div>
  )
}

export default TabFiles