import { AddIcon, CopyIcon, DeleteIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons';
import { Button, Flex, List, ListIcon, ListItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spacer, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdExit } from "react-icons/io";
import NewTab from './popOverMenu/NewTab';
import OpenFileInTab from './popOverMenu/OpenFileInTab';
import AddFavorite from './popOverMenu/AddFavorite';
import CloseFile from './popOverMenu/CloseFile';
import CloseAllFiles from './popOverMenu/CloseAllFiles';
import Find from './popOverMenu/Find';
import ShareFile from './popOverMenu/ShareFile';
import CopyFile from './popOverMenu/CopyFile';
import RenameFile from './popOverMenu/RenameFile';
import DeleteFile from './popOverMenu/DeleteFile';
import { openFile } from '../features/file/fileSlice';

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

    const handleOpenFile = (file)=>{
        dispatch(openFile(file));
    }

    const handleClosePopover = () => {
        setPopoverOpen(false);
    };

    return (
        <div onContextMenu={handleContextMenu}>
        <Popover isOpen={isPopoverOpen} onClose={handleClosePopover} placement='right' position={popoverPosition}>
            <PopoverTrigger>
            <Link onClick={()=>{handleOpenFile(children)}}>
                {children.fileName+"."+children.contentType}
            </Link>
            </PopoverTrigger>
            <PopoverContent textColor={"#FFFFFF"} background={'#1F2937'} w={56} border={'1px solid gray'}>
            <PopoverArrow />
                <List>
                    <ListItem>
                        <NewTab onClose={handleClosePopover} />
                    </ListItem>
                    <ListItem>
                        <OpenFileInTab file={children} onClose={handleClosePopover}/>
                    </ListItem>
                    <ListItem>
                        <AddFavorite file={children} />
                    </ListItem>
                    <ListItem>
                        <CloseFile file={children} onClose={handleClosePopover} />
                    </ListItem>
                    <ListItem>
                        <CloseAllFiles onClose={handleClosePopover} />
                    </ListItem>
                    <ListItem>
                        <Find file={children} />
                    </ListItem>
                    <ListItem>
                        <ShareFile file={children} />
                    </ListItem>
                    <ListItem>   
                        <CopyFile file={children} />
                    </ListItem>
                    <ListItem>
                        <RenameFile file={children} />
                    </ListItem>
                    <ListItem> 
                        <DeleteFile file={children} />
                    </ListItem>
                    <ListItem p={2}  _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}} borderRadius={8} onClick={(e)=>{e.preventDefault(); handleClosePopover();}} >   
                        <Flex alignItems={'center'}>
                            <ListIcon as={IoMdExit} />
                            Exit
                        </Flex>
                    </ListItem>
                </List>
            </PopoverContent>
        </Popover>
        </div>
    );
};

export default FilepopOver;


{/* <List>
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
        <ListIcon as={BsFileEarmarkText} />
        Open File
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} ></Text>
    </Flex>
</ListItem>
<ListItem
    p={2} 
    _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
>   
    <Flex alignItems={'center'}>
        <ListIcon as={FiStar} />
        Add Favorite
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} ></Text>
    </Flex>
</ListItem>
<ListItem
    p={2} 
    _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
>   
    <Flex alignItems={'center'}>
        <ListIcon as={RiFileCloseLine} />
        Close File
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} ></Text>
    </Flex>
</ListItem>
<ListItem
    p={2} 
    _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
>   
    <Flex alignItems={'center'}>
        <ListIcon as={FaRegWindowClose} />
        Close All File
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} ></Text>
    </Flex>
</ListItem>
<ListItem
    p={2} 
    _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
>   
    <Flex alignItems={'center'}>
        <ListIcon as={IoSearchSharp} />
        Find
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} >Ctrl+F</Text>
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
>   
    <Flex alignItems={'center'}>
        <ListIcon as={DeleteIcon} />
            <DeleteAlert>{children}</DeleteAlert>
        <Spacer />
        <Text fontSize={12} fontWeight={'300'} >Delete</Text>
    </Flex>
</ListItem>
<ListItem
    p={2} 
    _hover={{textDecoration: 'none',bg: useColorModeValue('#444c57', '#FFFFFF')}}
    borderRadius={8}
    onClick={(e)=>{e.preventDefault(); handleClosePopover();}}
>   
    <Flex alignItems={'center'}>
        <ListIcon as={AddIcon} />
        Exit
    </Flex>
</ListItem>
</List> */}