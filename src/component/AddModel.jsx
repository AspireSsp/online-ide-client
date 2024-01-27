import { AddIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import ReactSelect from 'react-select'
import { useEffect } from 'react'
import { get } from '../apis/api'
import { useDispatch } from 'react-redux'
import { addFolder, getFoldersList } from '../features/folder/folderSlice'
import { addFile } from '../features/file/fileSlice'
const AddModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [radioValue, setRadioValue] = useState('1');
    const [fileName, setFileName] = useState('');
    const [contentType, setContentType] = useState('');
    const [option, setOption] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState({});
    const [folderName, setFolderName] = useState();
    const dispatch = useDispatch();
    const toast = useToast();


    const getFolderDropdown = async()=>{
        const res = await get('folder/dropdown');
        setOption(res.data.folders);
    }

    useEffect(() => {
      getFolderDropdown();
    }, [])
    const handleSave = async()=>{
        const body = {};
        if(radioValue === '1'){
            body.fileName = fileName;
            body.contentType = contentType;
            body.size = 28;
            body.data = '';
            body.folderId = selectedFolder.value;
            const res = await dispatch(addFile(body))
            if(res.type === 'addFile/fulfilled'){
                dispatch(getFoldersList());
                onClose();
            }else if(res.type === 'addFile/rejected'){
                toast({
                    title: res.payload.response.data.error,
                    description: res.payload.response.data.message,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position: 'top'
                  })
            }
        }else{
            body.folderName = folderName;
            const res = await dispatch(addFolder(body))
            if(res.type === 'addFolder/fulfilled'){
                dispatch(getFoldersList());
                onClose();
            }else if(res.type === 'addFolder/rejected'){
                toast({
                    title: res.payload.response.data.error,
                    description: res.payload.response.data.message,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position: 'top'
                  })
            }
        }
    }
    
    const colourStyles = {
        menuList: styles => ({
            ...styles,
            background: '#1F2937',
            color: '#FFFFFF'
        }),
        option: (styles, {isFocused, isSelected}) => ({
            ...styles,
            background: isFocused
                ? '#3182ce'
                : isSelected
                    ? '#416b93'
                    : undefined,
            zIndex: 1
        }),
        menu: base => ({
            ...base,
            zIndex: 100,
            background : '#1F2937',
            color: '#ffffff'
        })
    }

    return (
      <>
           <Button pt={0} m={0} variant='gost' onClick={onOpen}>
                    <AddIcon color={'#ffffff'} />
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
                            <Select bg="#1F2937" color="#ffffff" value={contentType} onChange={(e)=>{setContentType(e.target.value)}} >
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='xx'>Select One</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='c'>C</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='cpp'>CPP</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='js'>JAVASCRIPT</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='py'>PYTHON</option>
                                <option style={{ color: '#ffffff', background:'#1F2937' }} value='java'>JAVA</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>File Name</FormLabel>
                            <Input value={fileName} onChange={(e)=>{setFileName(e.target.value)}} ref={initialRef} placeholder='e.g. index (write without Extention)' />
                        </FormControl>

                        <FormControl mt={2}>
                            <FormLabel>Folder Name</FormLabel>
                            <ReactSelect value={selectedFolder} onChange={(e)=>{setSelectedFolder(e)}} options={option} styles={colourStyles} />
                        </FormControl>
                    </> :
                    <FormControl mt={2}>
                        <FormLabel>Folder Name</FormLabel>
                        <Input onChange={(e)=>{setFolderName(e.target.value)}} placeholder='E.g. Server-Files' />
                    </FormControl>
            }
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSave} colorScheme='blue' mr={3}>
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

