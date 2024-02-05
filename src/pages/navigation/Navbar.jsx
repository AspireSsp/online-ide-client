'use client'
import { Box, Flex, Avatar, HStack, Text, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, Image,} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../component/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, logoutUser } from '../../features/user/authSlice'

const Links = [
    {
        key: 'Editer',
        value : 'code'
    },
    {
        key: 'About',
        value : 'about'
    },
    {
        key: 'Contribute',
        value : 'contribute'
    },
]

const NavLink = (props) => {
    const { children } = props
    return (
        <Box
            px={2}
            py={1}
            color={'#FFFFFF'}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('#444c57', '#FFFFFF'),
            }}>
            {children}
        </Box>
    )
}

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector(state=> state.auth.isLogin);
    const user = useSelector(state=> state.auth.user);
    const currentPath = window.location.pathname;
    
    const handleLogout = ()=>{
        dispatch(logoutUser())
        navigate('/login');
    }
    useEffect(() => {
        dispatch(getUser());
    }, [])

    return (
        <>
            <Box bg={useColorModeValue('#1F2937', '#1F2937')} px={4} borderBottom={'1px solid #FFFFFF'}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box width={24}>
                            <Link to='/'>
                                <Image src='https://i.imgur.com/YfLzsPH.png' alt='Logo' />
                            </Link>
                        </Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((item, index) => (
                            <NavLink key={index}>
                                <Link to={item.value}>{item.key}</Link>
                            </NavLink>
                        ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                    {
                        isLogin ?
                            <>
                                <Button
                                    variant={'solid'}
                                    colorScheme={'blue'}
                                    size={'sm'}
                                    mr={4}>
                                    {user?.userName}
                                </Button>
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                                        />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Link 1</MenuItem>
                                        <MenuItem>Link 2</MenuItem>
                                        <MenuDivider />
                                        <MenuItem onClick={handleLogout}>LogOut</MenuItem>
                                    </MenuList>
                                </Menu>
                            </>  :
                            <Stack direction='row' spacing={4} align='center'>
                                <Button colorScheme='blue' variant='solid'>
                                    <Link to='/sign-up'>
                                    Sign Up </Link>
                                </Button>
                                <Button colorScheme='blue' variant='outline'>
                                    <Link to='/login'>
                                        Log In
                                    </Link>
                                </Button>
                            </Stack>
                    }
                    </Flex>
                </Flex>

                {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link, index) => (
                            <NavLink key={index}>
                                <Link to={link.value}>{link.key}</Link>
                            </NavLink>
                        ))}
                    </Stack>
                </Box>
                ) : null}
            </Box>

            <Box>
                <Outlet /> 
                {
                    (currentPath==='/code' || currentPath.includes('code/share')) ? 
                        null : <Footer /> 
                }
            </Box>
        </>
    )
}