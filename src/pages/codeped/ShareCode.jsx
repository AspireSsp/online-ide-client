import React, { useEffect } from 'react'
import Codeped from './Codeped'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFile } from '../../features/folder/folderSlice';
import { openFile } from '../../features/file/fileSlice';
import { useToast } from '@chakra-ui/react';


const ShareCode = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const toast = useToast();

    const handleFile = async()=>{
        const res = await dispatch(getFile(id));
        if(res.type === 'getFile/fulfilled'){
            dispatch(openFile(res.payload));
        }else if(res.type === 'getFile/rejected'){
            toast({
                title: res.payload.response.data.error,
                description: 'there are some error accured while loading the File..!',
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'top'
            })
        }
    }
    useEffect(async() => {
        handleFile();
    }, [])
    
    return (
        <div>
            <Codeped />
        </div>
    )
}

export default ShareCode