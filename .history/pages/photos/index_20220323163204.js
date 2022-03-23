import axios from 'axios';
import React from 'react';
import { Grid, Spinner } from '@chakra-ui/react'
import Image from 'next/image'
import useSWR from 'swr'
import CardPhoto from '../../components/cardPhoto';

const Index = ({photos}) => {
    const { data, error } = useSWR('https://picsum.photos/v2/list?limit=30', getStaticProps);
    console.log(photos)

    if (error) return "An error has occurred.";
    if (!data) return <Spinner></Spinner>;

    return (
        <Grid
        width="100%"
        height="100%" 
        templateColumns='repeat(5, 1fr)'
        gap={50}
        >
            {data.map((photo, index) => <CardPhoto photoInfo={photo} key={index}></CardPhoto>)}
        </Grid>
    );
}

export const fetcher =  async (url) => {
    const req = await axios.get(url).then(res => res.data)
    return req;
};

export async function getStaticProps(url) {
    const req = await axios.get(url).then(res => res.data)
    return {
        props: { photos: req },
    }
}

export default Index;
