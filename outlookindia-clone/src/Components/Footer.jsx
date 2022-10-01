import { Box, Flex, Heading,Spacer,Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Box w="full" bg='#212020' h="auto" color='white' py='10px'>
            <Flex justifyContent="space-around">
                <Box mt='50px' px='20px' textAlign="left">
                    <Flex direction="column" gap='10px'>
                        <Heading size="sm">Main Stories</Heading>
                        <div>
                            <hr
                                style={{
                                    color:"red",
                                    background: 'red',
                                    height: '1px',
                                }}
                            />
                        </div>
                        <Text fontSize='sm'>Magazine</Text>
                        <Text fontSize='sm'>NATIONAL</Text>
                        <Text fontSize='sm'>INTERNATIONAL</Text>
                        <Text fontSize='sm'>BUSINESS</Text>
                        <Text fontSize='sm'>OPINIONS</Text>
                        <Text fontSize='sm'>BOOK REVIEWS</Text>
                        <Text fontSize='sm'>THE NEWS</Text>
                        <Text fontSize='sm'>SPORTS</Text>
                        <Text fontSize='sm'>ART & ENTERTAINMENT</Text>
                    </Flex>
                </Box>
                <Box mt='50px' textAlign="left">
                    <Flex direction="column" gap='10px'>
                    <Heading size="sm">Traveller</Heading>
                    <div>
                            <hr
                                style={{
                                    color:"red",
                                    background: 'red',
                                    height: '1px',
                                }}
                            />
                        </div>
                    <Text></Text>
                        <Text fontSize='sm'>TRAVELOGUES</Text>
                        <Text fontSize='sm'>WEEKEND BREAKS</Text>
                        <Text fontSize='sm'>HOLIDAYS WITH OT</Text>
                        <Text fontSize='sm'>PHOTO FEATURES</Text>
                        <Text fontSize='sm'>HOTELS</Text>
                        <Text fontSize='sm'>GUIDEBOOKS</Text>
                    </Flex>
                </Box>
                <Box mt='50px' textAlign="left">
                    <Flex direction="column" gap='10px'>
                    <Heading size="sm">Money</Heading>
                    <div>
                            <hr
                                style={{
                                    color:"red",
                                    background: 'red',
                                    height: '1px',
                                }}
                            />
                        </div>
                    <Text></Text>
                        <Text fontSize='sm'>Mutual Funds</Text>
                        <Text fontSize='sm'>Insurance</Text>
                        <Text fontSize='sm'>Equity</Text>
                        <Text fontSize='sm'>Fixed Assets</Text>
                        <Text fontSize='sm'>Banking</Text>
                        <Text fontSize='sm'>ASK</Text>
                    </Flex>
                </Box>
                <Box mt='50px' textAlign="left">
                    <Flex direction="column" gap='10px'>
                    <Heading size="sm">Business</Heading>
                    <div>
                            <hr
                                style={{
                                    color:"red",
                                    background: 'red',
                                    height: '1px',
                                }}
                            />
                        </div>
                    <Text></Text>
                        <Text fontSize='sm'>THE BIG STORY</Text>
                        <Text fontSize='sm'>SPECIALS</Text>
                        <Text fontSize='sm'>PERSPECTIVE</Text>
                        <Text fontSize='sm'>PIXSTORY</Text>
                        <Text fontSize='sm'>ENTERPRISE</Text>
                        <Text fontSize='sm'>STRATEGY</Text>
                        <Text fontSize='sm'>MARKETS</Text>
                        <Text fontSize='sm'>C'EST LAVIE</Text>
                    </Flex>
                </Box>
                <Box mt='50px' textAlign="left">
                    <Flex direction="column" gap='10px'>
                    <Heading size="sm">Social Media</Heading>
                    <div>
                            <hr
                                style={{
                                    color:"red",
                                    background: 'red',
                                    height: '1px',
                                }}
                            />
                        </div>
                    <Text></Text>
                        <Text fontSize='sm'>Facebook</Text>
                        <Text fontSize='sm'>Twitter</Text>
                        <Text fontSize='sm'>Instagram</Text>
                        <Text fontSize='sm'>Youtube</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Footer