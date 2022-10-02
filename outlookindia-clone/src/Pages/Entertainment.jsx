import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Badge, Box, CircularProgress, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { ExternalLink } from 'react-external-link';


const Entertainment = () => {
  const [headlines,setHeadlines] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
    const getData=()=>{
        setIsLoading(true)
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=323ce39e51c34fb9b8701f874fa25371`)
        .then((res)=>setHeadlines(res.data.articles))
        .catch((err)=>console.log(err))
        .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        getData();
    },[])

    // console.log(headlines)
    if(isLoading){
        return <CircularProgress isIndeterminate color='green.300' />
    }
  return (
    <div>
      <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={10} mt="20px" px='10px'mb="20px">
        {
          headlines?.map((news)=>(
          <Box boxShadow='dark-lg' p='6' rounded='md' key={news.publishedAt}>
            <Image src={news.urlToImage}/>
            <Heading size="md" mt="15px">{news.title}</Heading>
            <Text mt="20px">{news.description}</Text>
            <ExternalLink href={news.url}>
              <Badge colorScheme="green">Read More...</Badge>
            </ExternalLink>
          </Box>
          ))
        }
      </SimpleGrid>
    </div>
  )
}

export default Entertainment