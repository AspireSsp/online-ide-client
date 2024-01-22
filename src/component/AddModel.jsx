import { AddIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const AddModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [radioValue, setRadioValue] = useState('1');

    return (
      <>
           <Button pt={0} m={0} variant='gost' onClick={onOpen}>
                    <AddIcon />
            </Button>
        {/* <Button onClick={onOpen}>Trigger modal</Button> */}
  
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            background={'#1F2937'}
        >
        <ModalOverlay />
        <ModalContent background={'#1F2937'} color={'#ffffff'}>
          <ModalHeader>ADD NEW FILE/FOLDER:</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <RadioGroup onChange={(e)=>{setRadioValue(e)}} value={radioValue}>
                <Stack direction='row'>
                    <Radio value='1'>File</Radio>
                    <Radio value='2'>Folder</Radio>
                </Stack>
            </RadioGroup>
            {
                radioValue==='1' ? 
                    <>
                        <FormControl mt={2}>
                            <FormLabel>Select Programing Language</FormLabel>
                            <Select bg="#1F2937" color="#ffffff" >
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='c'>C</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='cpp'>CPP</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='javaScript'>JAVASCRIPT</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='python'>PYTHON</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='java'>JAVA</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>File Name</FormLabel>
                            <Input ref={initialRef} placeholder='e.g. index (write without Extention)' />
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>Folder Name</FormLabel>
                            <Input placeholder='E.g. Server-Files' />
                        </FormControl>
                    </> :
                    <FormControl mt={2}>
                        <FormLabel>Folder Name</FormLabel>
                        <Input placeholder='E.g. Server-Files' />
                    </FormControl>
            }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
}

export default AddModel

