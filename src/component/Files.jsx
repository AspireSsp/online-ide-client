import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFoldersList } from '../features/folder/folderSlice'
import { CalendarIcon } from '@chakra-ui/icons'
import { openFile } from '../features/file/fileSlice'

const Files = () => {
    const dispatch = useDispatch();
    const folders = useSelector((state)=>state.folders.data);
    useEffect(() => {
        dispatch(getFoldersList());
    }, []);

    const handleOpenFile = (file)=>{
        dispatch(openFile(file));
    }
    
  return (
    <div>
        <Accordion defaultIndex={[0]} allowMultiple textColor={"#FFFFFF"}>
        {
            folders?.map((folder)=>(
                folder.fileName ? 
                <AccordionItem borderTop={"0px"} key={folder._id} >
                    <h2>
                        <Flex>
                            <AccordionButton w={10}>
                                <CalendarIcon />
                            </AccordionButton>
                            <Box as="span" flex='1' textAlign='left' display={'flex'} alignItems={'center'} >
                                <Link onClick={()=>{handleOpenFile(folder)}}>
                                    {folder.fileName+"."+folder.contentType}
                                </Link>
                            </Box>
                        </Flex>
                    </h2>
                   
                </AccordionItem> : 
                <AccordionItem borderTop={"0px"} key={folder._id} >
                    <h2>
                        <Flex>
                            <AccordionButton w={10}>
                                <AccordionIcon />
                            </AccordionButton>
                            <Box as="span" flex='1' textAlign='left' display={'flex'} alignItems={'center'} >
                                {folder.folderName}
                            </Box>
                        </Flex>
                    </h2>
                    <AccordionPanel p={0} >
                        {
                            folder?.files?.map((file)=>(
                                <Flex ps={3} key={file._id}>
                                    <AccordionButton w={10}>
                                        <CalendarIcon />
                                    </AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' display={'flex'} alignItems={'center'}  >
                                    <Link onClick={()=>{handleOpenFile(file)}}>
                                        {file?.fileName+"."+file?.contentType}
                                    </Link>
                                    </Box>
                                </Flex>
                                
                            ))
                        }
                    </AccordionPanel>
                </AccordionItem>
            ))
        }

           
        </Accordion>
    </div>
  )
}

export default Files