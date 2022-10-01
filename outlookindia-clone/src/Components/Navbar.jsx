import React from 'react'
import {Flex,Box,Image, Text, Spacer, HStack, useDisclosure, Button, FormControl, FormLabel, Input, InputLeftAddon, InputGroup} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useState } from 'react'

const Navbar = () => {
    const week=['Sunday','Monaday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentDate = date.getDate()
    const currentMonth = date.getMonth() + 1; 
    const today = date.getDay();
    const dateValue=week[today]+","+currentMonth+"/"+currentDate+"/"+currentYear;
    // console.log(week[today]+","+currentMonth+"/"+currentDate+"/"+currentYear)
    

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loginText,setLoginText] = useState("LOGIN");
    const [userName,setUserName] = useState("")
    const handleLogin = () =>{
        setLoginText("Hi"+" "+userName)
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
                <Link to="/">
                <Image src='https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg' alt='logo' />
                </Link>
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
            <Text fontSize='sm' onClick={onOpen}>{loginText}</Text>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal
            isOpen={isOpen}
            onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Image boxSize='100px' ml="170px" mt="60px" src='https://conscent-public.s3.ap-south-1.amazonaws.com/prod/Outlook%20India%20/paywall-brandlogo/601a8ea4f2149f089782814f-b73040' />
                <ModalHeader ml="120px">OUTLOOK INDIA</ModalHeader>
                {/* <Text ml="100px">Enter Mobile No. For Verification</Text> */}
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                {/* <FormLabel>First name</FormLabel> */}
                        {/* <InputGroup>
                        <InputLeftAddon children='+91' /> */}
                        <Input placeholder='Enter Username' name='username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        {/* </InputGroup> */}
                    </FormControl>
                </ModalBody>

                    <ModalFooter>
                    <Button colorScheme='blue'mr="150px" onClick={handleLogin}>
                        LOGIN
                    </Button>
                    {/* <Button onClick={onClose}>Cancel</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Text color='red.500'>|</Text>
            <Text fontSize='sm' ><Link to='/subscribe'>SUBSCRIBE</Link></Text>
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
      <hr
        style={{
          background: 'red',
          height: '1px',
        }}
      />
    </div>

    </>
  )
}

export default Navbar