import React from 'react';
import {Flex, Box} from '@chakra-ui/react'

const CardPhoto = ({photoInfo}) => {
    return (
            <Flex>
                <img src={photoInfo?.download_url} alt={photoInfo.id}/>
                <Flex>
                    <Box>{photoInfo?.id}</Box>
                    <Box>{photoInfo?.author}</Box>
                </Flex>
            </Flex>
    );
}

export default CardPhoto;
