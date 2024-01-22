import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import AddModel from './AddModel'

const YourFiles = () => {
  return (
    <div>
        <Flex color={'#ffffff'} alignItems={'center'}>
            <Box>
                <h1 style={{color:"#FFFFFF",fontWeight:"900px" }}><b>YOUR FILES</b></h1>
            </Box>
            <Spacer />
            <Box >
                {/* <Button pt={0} m={0} variant='gost'>
                    <AddIcon />
                </Button> */}
                <AddModel />
            </Box>
        </Flex>
    </div>
  )
}

export default YourFiles