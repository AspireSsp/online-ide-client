import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Files = () => {
  return (
    <div>
        <Accordion defaultIndex={[0]} allowMultiple textColor={"#FFFFFF"}>
            <AccordionItem borderTop={"0px"} >
                <h2>
                    <Flex>
                        <AccordionButton w={10}>
                            <AccordionIcon />
                        </AccordionButton>
                        <Box as="span" flex='1' textAlign='left' display={'flex'} alignItems={'center'} >
                            JavaScript
                        </Box>
                    </Flex>
                </h2>
                {/* box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1); */}
                <AccordionPanel p={0} >
                    <Text boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"}  ps={12} pb={1}>sanjay.py</Text>
                    <Text boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} ps={12} pb={1}>rahul.py</Text>
                    <Text boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} ps={12} pb={1}>madhav.py</Text>
                    <Text boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} ps={12} pb={1}>gotam.py</Text>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <Flex>
                        <AccordionButton w={10}>
                            <AccordionIcon />
                        </AccordionButton>
                        <Box as="span" flex='1' textAlign='left' display={'flex'} alignItems={'center'}  >
                            Server code
                        </Box>
                    </Flex>
                </h2>
                <AccordionPanel p={0} >
                    <Text boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"}  ps={12} pb={1}>sanjay.py</Text>
                    <Text boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} ps={12} pb={1}>rahul.py</Text>
                    <Text boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} ps={12} pb={1}>madhav.py</Text>
                    <Text boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} ps={12} pb={1}>gotam.py</Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Files