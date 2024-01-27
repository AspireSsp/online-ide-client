'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
} from '@chakra-ui/react'

import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../features/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignIn = async()=>{
        const login = await dispatch(loginUser({email, password}));
        if(login.type === 'login/fulfilled'){
            navigate('/')
        }else if(login.type === 'login/rejected'){
            toast({
                title: login.payload.response.data.error,
                description: login.payload.response.data.message,
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'top'
              })
        }
    }

  return (
    <div>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" onChange={(e)=>setPassword(e.target.value)} />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Text color={'blue.500'}>Forgot password?</Text>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'} onClick={()=>handleSignIn()}>Sign in</Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                }
                />
            </Flex>
        </Stack>
    </div>
  )
}

export default Login