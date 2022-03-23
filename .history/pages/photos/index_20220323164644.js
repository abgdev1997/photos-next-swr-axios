import axios from 'axios';
import React from 'react';
import { Grid, Spinner } from '@chakra-ui/react'
import Image from 'next/image'
import useSWR, { SWRConfig } from 'swr'
import CardPhoto from '../../components/cardPhoto';

const Index = ({photos}) => {
    return (
        <SWRConfig value={{fallback}}>
            <Article />
        </SWRConfig>
    );
}

export async function getStaticProps () {
    const article = await getArticleFromAPI()
    return {
      props: {
        fallback: {
          'https://picsum.photos/v2/list?limit=30': article
        }
      }
    }
  }

function Article() {
    const { data, error } = useSWR('https://picsum.photos/v2/list?limit=30', fetcher);

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
    )
}

export const fetcher =  async (url) => {
    const req = await axios.get(url).then(res => res.data)
    return req;
};

export default Index;
