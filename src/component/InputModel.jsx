import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveFile } from '../features/file/fileSlice';
import { getFoldersList } from '../features/folder/folderSlice';

const InputModel = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [fileName, setFileName] = useState('');
    const [key, setKey] = useState(false);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const dispatch = useDispatch();
    const currentFile = useSelector(state=> state.file.currentFile);
    const handleSave = async(file)=>{
        const body = {
            fileName : fileName,
            _id : file._id,
        }
        await dispatch(saveFile(body));
        dispatch(getFoldersList());
        setKey(false);
        onClose();
    }

    useEffect(() => {
        document.onkeydown = function (e) {
          // e.preventDefault();      
          if ((e.key === 'F2')) {
            onOpen();
            setKey(true);
          }
        };
    }, [])
    
    
  return (
    <div>
        <button onClick={onOpen} >Rename File</button>

        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent background={'#1F2937'} color={'#ffffff'}>
                <ModalHeader>Rename File {key ? currentFile.fileName+"."+currentFile.contentType : children.fileName+"."+children.contentType}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                    <FormLabel> name</FormLabel>
                    <Input value={fileName} onChange={(e)=>{setFileName(e.target.value)}} placeholder='E.g. Server-Files' />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={()=>{key ? handleSave(currentFile) : handleSave(children)}}>
                    Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
  )
}

export default InputModel