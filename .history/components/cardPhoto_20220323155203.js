import React from 'react';
import {Flex, Box} from '@chakra-ui/react'
import Image from 'next/image';


const CardPhoto = ({photoInfo}) => {
    return (
            <Flex w="100%" direction="column">
                <Image src={photoInfo?.download_url} alt={photoInfo.id} width="100%" height="200px"/>
                <Flex>
                    <Box>{photoInfo?.id}</Box>
                    <Box>{photoInfo?.author}</Box>
                </Flex>
            </Flex>
    );
}

export default CardPhoto;
