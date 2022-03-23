import React from 'react';
import {Flex, Box} from '@chakra-ui/react'
import Image from 'next/image';


const CardPhoto = ({photoInfo}) => {
    return (
            <Flex w="100%" h="auto" direction="column" align="center" justify="end" borderBottom="1px solid black">
                <img src={photoInfo?.download_url} alt={photoInfo.id} width="100%" height="auto"/>
                <Flex align="center" justify="center" direction="row" gap={50} mt="15px">
                    <Box>{photoInfo?.id}</Box>
                    <Box>{photoInfo?.author}</Box>
                </Flex>
            </Flex>
    );
}

export default CardPhoto;
