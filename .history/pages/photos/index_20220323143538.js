import axios from 'axios';
import React from 'react';
import {Flex, Grid} from '@chakra-ui/react'
import Image from 'next/image'
import useSWR from 'swr';

const Index = ({photo, error}) => {

    return (
        <Grid 
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
        >
            <Flex>
                <Image src={photo.download_url}/>
                <Flex>
                    <Box>{photo.id}</Box>
                    <Box>{photo.author}</Box>
                </Flex>
            </Flex>
            
        </Grid>
    );
}

export async function getStaticProps() {
    const { data, error } = useSWR('picsum.photos/v2/list?limit=30', fetcher('https://picsum.photos/v2/list?limit=30'));
    return {
        props: { 
            photo: data,
            error: error 
        },
    }
}

const fetcher = url => axios.get(url).then(res => res.data);

export default Index;
