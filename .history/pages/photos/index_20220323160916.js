import axios from 'axios';
import React from 'react';
import { Grid } from '@chakra-ui/react'
import Image from 'next/image'
import useSWR from 'swr'
import CardPhoto from '../../components/cardPhoto';

const Index = () => {
    const { data, error } = useSWR('https://picsum.photos/v2/list?limit=30', fetcher);
    console.log(data)

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    return (
        <Flex width="100%" height="100%" direction="column">
            {data.map((photo, index) => <CardPhoto photoInfo={photo} key={index}></CardPhoto>)}
        </Flex>
    );
}

export const fetcher =  async (url) => {
    const req = await axios.get(url).then(res => res.data)
    return req;
};

export default Index;
