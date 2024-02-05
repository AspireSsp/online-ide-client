import { AddIcon, CopyIcon, DeleteIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons';
import { Button, Flex, List, ListIcon, ListItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoShareSocialOutline, IoTerminalOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFile } from '../features/file/fileSlice';
import { getFoldersList } from '../features/folder/folderSlice';
import InputModel from './InputModel';
import DeleteAlert from './DeleteAlert';
import { copy } from '../utills/copyText';
import { baseUrl, baseUrlClient } from '../apis/api';

const FilepopOver = ({children}) => {

    const dispatch = useDispatch();
    const toast = useToast();
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const [popoverPosition, setPopoverPosition] = useState({ left: 0, top: 0 });

    const handleContextMenu = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setPopoverPosition({ left: mouseX, top: mouseY });
        setPopoverOpen(true);
        event.preventDefault();
    };

    const handleClosePopover = () => {
        setPopoverOpen(false);
    };

    const shareCode = (file)=>{
        const url = `${baseUrlClient}code/share/${file._id}`;
        copy(url);
        toast({
            title: 'code link copied to clipboard',
            description: url,
            status: 'info',
            duration: 9000,
            isClosable: true,
          })
    }

    return (
        <div onContextMenu={handleContextMenu}>
        <Popover isOpen={isPopoverOpen} onClose={handleClosePopover} placement='right' position={popoverPosition}>
            <PopoverTrigger>
            <Link>
                {children.fileName+"."+children.contentType}
            </Link>
            </PopoverTrigger>
            <PopoverContent textColor={"#FFFFFF"} background={'#1F2937'} w={56} border={'1px solid gray'}>
            <PopoverArrow />
            <List>
                    <ListItem
                        p={2} 
                        borderRadius={8}
                        _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
                    >
                        <Flex alignItems={'center'}>
                            <ListIcon as={AddIcon} />
                            New Tab
                            <Spacer />
                            <Text fontSize={12} fontWeight={'300'} >Ctrl+N</Text>
                        </Flex>
                    </ListItem>
                    <ListItem
                        p={2} 
                        _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
                    >   
                        <Flex alignItems={'center'}>
                            <ListIcon as={IoTerminalOutline} />
                            Run File
                            <Spacer />
                            <Text fontSize={12} fontWeight={'300'} >Ctrl+R</Text>
                        </Flex>
                    </ListItem>
                    <ListItem
                        onClick={()=>{shareCode(children)}}
                        p={2} 
                        _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
                    >
                        <ListIcon as={IoShareSocialOutline} />
                        Share File
                    </ListItem>
                    <ListItem
                        p={2} 
                        _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
                    >   
                        <Flex alignItems={'center'} onClick={()=>{copy(children.data)}}>
                            <ListIcon as={CopyIcon} />
                            Copy
                            <Spacer />
                            <Text fontSize={12} fontWeight={'300'} >Ctrl+C</Text>
                        </Flex>
                    </ListItem>
                    <ListItem
                        p={2} 
                        _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
                    >
                        <Flex alignItems={'center'}>
                            <ListIcon as={EditIcon} />
                            <InputModel>{children}</InputModel>
                            <Spacer />
                            <Text fontSize={12} fontWeight={'300'} >F2</Text>
                        </Flex>

                    </ListItem>
                    <ListItem
                        p={2} 
                        _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
                        borderRadius={8}
                    >   
                        <Flex alignItems={'center'}>
                            <ListIcon as={DeleteIcon} />
                                <DeleteAlert>{children}</DeleteAlert>
                            <Spacer />
                            <Text fontSize={12} fontWeight={'300'} >Delete</Text>
                        </Flex>
                    </ListItem>
                </List>
            </PopoverContent>
        </Popover>
        </div>
    );
};

export default FilepopOver;
