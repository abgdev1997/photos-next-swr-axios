import React from 'react';
import {Flex, Box} from '@chakra-ui/react'
import Image from 'next/image';


const CardPhoto = ({photoInfo}) => {
    return (
            <Flex w="100%" direction="column" border="1px solid #9C938E" borderRadius="0px 0px 20px 20px">
                <img src={photoInfo?.download_url} alt={photoInfo.id} width="100%" height="200px"/>
                <Flex align="center" justify="center" direction="row" gap={50}>
                    <Box>{photoInfo?.id}</Box>
                    <Box>{photoInfo?.author}</Box>
                </Flex>
            </Flex>
    );
}

export default CardPhoto;
