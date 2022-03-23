import axios from 'axios';
import React from 'react';
import {Flex, Grid} from '@chakra-ui/react'
import Image from 'next/image'
import useSWR from 'swr'

const Index = () => {
    const { data, error } = useSWR('/photos', fetcher('https://picsum.photos/v2/list?limit=30'));
    return (
        <Grid 
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        >
            <Flex>
                <Image src={data.download_url}/>
                <Flex>
                    <Box>{data.id}</Box>
                    <Box>{data.author}</Box>
                </Flex>
            </Flex>
            
        </Grid>
    );
}

export const fetcher = url => axios.get(url).then(res => res.data);

export default Index;
