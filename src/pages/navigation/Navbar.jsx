'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../component/Footer'



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
      as="a"
      px={2}
      py={1}
      color={'#FFFFFF'}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('#444c57', '#FFFFFF'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
                {Links.map((item) => (
                    <NavLink>
                        <Link to={item.value}>{item.key}</Link>
                    </NavLink>
                ))}
                </HStack>
            </HStack>
            <Flex alignItems={'center'}>
                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='blue' variant='solid'>
                        <Link to='/sign-up'>
                        Sign Up </Link>
                    </Button>
                    <Button colorScheme='blue' variant='outline'>
                    <Link to='login'>
                        Log In
                    </Link>
                    </Button>
                </Stack>
                {/* <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'sm'}
                mr={4}
                leftIcon={<AddIcon />}>
                Action
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
                    src={
                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Link 3</MenuItem>
                </MenuList>
                </Menu> */}
            </Flex>
            </Flex>

            {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                ))}
                </Stack>
            </Box>
            ) : null}
        </Box>

        <Box>
            <Outlet /> 
            <Footer />
        </Box>
    </>
  )
}