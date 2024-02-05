import React, { Children } from 'react'
import { useDispatch } from 'react-redux';
import { deleteFile } from '../features/file/fileSlice';
import { getFoldersList } from '../features/folder/folderSlice';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';

const DeleteAlert = ({children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef();
    const dispatch = useDispatch();

    const handleDelete = async(file)=>{
        console.log(file);
        await dispatch(deleteFile(file));
        dispatch(getFoldersList());
        onClose();
    }
  return (
    <div>
        <button onClick={onOpen}>
            Delete File
        </button>

        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
            <AlertDialogContent  background={'#1F2937'} color={'#ffffff'}>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete File
                </AlertDialogHeader>

                <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme='red' onClick={()=>{handleDelete(children)}} ml={3}>
                        Delete
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    </div>
  )
}

export default DeleteAlert