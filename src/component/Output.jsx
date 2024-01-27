import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { clearOutput } from '../features/file/fileSlice';

const Output = () => {
  const containerRef = useRef();
  const outputList = useSelector(state=>state.file.outputList);
  const dispatch = useDispatch();
  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [outputList]);

  return (
    <div style={{color:'#ffffff'}}>
        <div style={{borderBottom:'1px solid black'}}>
          <Flex>
              <Box p={2} >
                <h1><b>OUTPUT</b></h1>
              </Box>
              <Spacer />
              <Box p={2} >
                  <Button height={8} colorScheme='blue' onClick={()=>{dispatch(clearOutput())}}>CLEAR</Button>
              </Box>
          </Flex>
        </div>
        <div ref={containerRef} style={{padding:'8px', overflowY: 'scroll', height: "84vh", scrollBehavior: 'smooth'}}>
            {
              outputList?.map((output, index)=>(
                <div style={{ whiteSpace: 'pre' }} key={index}>{output}</div>
              ))
            }
        </div>
    </div>
  )
}

export default Output