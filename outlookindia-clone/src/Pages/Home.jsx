import { Badge, Box, Center, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { ExternalLink } from 'react-external-link';
// import { m } from 'framer-motion'

const Home = () => {
    const [headlines,setHeadlines] = useState([]);

    const getData=()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=323ce39e51c34fb9b8701f874fa25371`)
        .then((res)=>setHeadlines(res.data.articles))
    }

    useEffect(()=>{
        getData();
    },[])

    // console.log(headlines)
  return (
    <>
    <Heading>Top Headlines</Heading>
    <div style={{
        width:"90%",
        // border:"1px solid black",
        margin:"auto",
        height:"auto",
        marginTop:"20px",
        display:"grid"
    }}>
        {
            headlines.map((news)=>(
                // <Grid templateColumns="repeat(2,1fr)" gap={6}>
                <Box padding="20px" key={news.publishedAt}>
                    <Center w="100%" h="400px">
                        <Image src={news.urlToImage} alt="pic" w="650px" h="400px" border='1px solid red' padding='5px'/>
                    </Center>
                    <Heading _hover={{color: "red.500"}}>{news.title}</Heading>
                    <Box mt="10px">
                        <Text color="red">{news.author}</Text>
                    </Box>
                    <Text>{news.description}</Text>
                    {/* <Text><Link to={news.url}>Read More...</Link></Text> */}
                    <ExternalLink href={news.url}>
                        <Badge colorScheme="green">Read More...</Badge>
                    </ExternalLink>
                    <div>
                {/* 👇️ colored horizontal line */}
                <hr
                  style={{
                    background: 'red',
                  //   color: 'red',
                  //   borderColor: 'lime',
                    height: '1px',
                  }}
                />
                </div>
                </Box>
                // </Grid>
            ))
        }
    </div>
    </>
  )
}

export default Home