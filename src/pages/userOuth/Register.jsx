import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { signupUser } from '../../features/authSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignUp = async()=>{
        if(fname == ""){
            toast({
                title: "Error",
                description: 'first name is required!',
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'top'
            })
        }else{
            const signup = await dispatch(signupUser({name: fname+" "+lname, email, mobile, password}));
            if(signup.type === 'signup/fulfilled'){
                navigate('/')
            }else if(signup.type === 'signup/rejected'){
                toast({
                    title: signup.payload.response.data.error,
                    description: signup.payload.response.data.message,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                    position: 'top'
                })
            }
        }
    }
    
  return (
    <div>
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" onChange={(e)=>setFname(e.target.value)} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" onChange={(e)=>setLname(e.target.value)} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl id="mobile" isRequired>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input type="number" onChange={(e)=>setMobile(e.target.value)}/>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)}/>
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={handleSignUp}
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link to='/login' color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    </div>
  )
}

export default Register;



