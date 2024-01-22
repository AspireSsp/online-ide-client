import { CloseIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ActiveFiles = () => {
  return (
    <div style={{width:'100%'}}>
        <Flex boxShadow={"0 2px 3px -1px rgba(0, 0, 0, 0.5)"} w={"100%"}>
            <button style={{color:"#ffffff", padding:'6px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Text pe={2} >sanjay.py </Text>  
                <CloseIcon w={3} pt={2} />
            </button>
            <button style={{color:"#ffffff", padding:'6px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Text pe={2} >Rahul.py </Text>  
                <CloseIcon w={3} pt={2} />
            </button>
            <button style={{color:"#ffffff", padding:'6px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Text pe={2} >madhav.py </Text>  
                <CloseIcon w={3} pt={2} />
            </button>
            <button style={{color:"#ffffff", padding:'6px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Text pe={2} >sumit.py </Text>  
                <CloseIcon w={3} pt={2} />
            </button>

        </Flex>
    </div>
  )
}

export default ActiveFiles