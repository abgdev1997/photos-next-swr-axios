import React from 'react';
import {Flex, Box} from '@chakra-ui/react'
import Image from 'next/image';


const CardPhoto = ({photoInfo}) => {
    return (
            <Flex w="auto" h="auto" direction="column" align="center" justify="end" borderBottom="1px solid black">
                <Image loader={photoInfo?.download_url} src={photoInfo?.download_url} alt={photoInfo.id} layout='fill'/>
                <Flex align="center" justify="center" direction="row" gap={50} mt="15px">
                    <Box>{photoInfo?.id}</Box>
                    <Box>{photoInfo?.author}</Box>
                </Flex>
            </Flex>
    );
}

export default CardPhoto;
