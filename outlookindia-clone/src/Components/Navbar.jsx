import React from 'react'
import {Flex,Box,Image, Text, Spacer, HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const week=['Sunday','Monaday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentDate = date.getDate()
    const currentMonth = date.getMonth() + 1; 
    const today = date.getDay();
    const dateValue=week[today]+","+currentMonth+"/"+currentDate+"/"+currentYear;
    // console.log(week[today]+","+currentMonth+"/"+currentDate+"/"+currentYear)
    const handleLogin = () =>{
        alert("Clicked Login")
    }
    
  return (
    <>
    <Box mx='17' mt='15'>
        <Flex>
            <Box h='10'>
                <Text>{dateValue}</Text>
            </Box>
            <Spacer/>
            <Box boxSize='sm' h='10' w='200px'>
                <Image src='https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg' alt='logo' />
            </Box>
            <Spacer/>
            <Box h='10'>
                <Flex gap={2}>
                    <Image src='https://www.outlookindia.com/images/home_new_v4/facebook_top.svg' alt='facebook_logo'/>
                    <Image src='https://www.outlookindia.com/images/home_new_v4/twitter_top.svg' alt='facebook_logo'/>
                    <Image src='https://www.outlookindia.com/images/home_new_v4/instagram_top.svg' alt='facebook_logo'/>
                    <Image src='https://www.outlookindia.com/images/home_new_v4/youtube_top.svg' alt='facebook_logo'/>
                </Flex>
            </Box>
        </Flex>
    </Box>
    <Box>
        <Flex alignItems='center' justifyContent='center' gap={2}>
            <Text fontSize='sm' onClick={handleLogin}>LOGIN</Text>
            <Text color='red.500'>|</Text>
            <Text fontSize='sm'>SUBSCRIBE</Text>
        </Flex>
    </Box>
    {/* <Box> */}
    <HStack  mx='20px' mt='10px'>
        <Box to='/' _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>
            <Link to="/">HOME</Link></Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>OUTLOOK</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>BUSINESS</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>MONEY</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='60px' padding='5px'>CRYPTO CORNER</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>TRAVEL</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'><Link to="/sports">SPORTS</Link></Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>VIDEOS</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>ENTERTAINMENT</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>PHOTOS</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>MAGAZINE</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>HEALTH</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>STARTUP</Box>
        <Box _hover={{
            background: "blackAlpha.100",
            color: "red.500",
            border:"1px solid gray"
        }} h='50px' padding='5px'>OTHERS</Box>
    </HStack>
    {/* </Box> */}
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
    </>
  )
}

export default Navbar