import { Box, Center, Container, Flex, Square, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function OnePack() {
    return (
        <Box
            mt='45px'
        >
            <Container maxW='container.xl'>
                <Stack
                    spacing={12}
                    direction='row'
                    justify='center'
                >
                    <Box
                        border='2px solid'
                        borderColor='cyan.500'
                        maxW='410px'
                        maxH='240px'
                        p='65px'
                        textAlign='center'
                    >
                        <Flex>
                            <Center w='100%'>
                                <Box>
                                    <Text
                                        color='cyan.400'
                                        fontSize='5xl'
                                        fontWeight='extrabold'
                                        lineHeight='1'
                                        mb='45px'
                                    >
                                        450.000đ
                                    </Text>
                                    <Text
                                        color='gray.600'
                                        fontSize='xl'
                                        fontWeight='normal'
                                    >
                                        mỗi trẻ em
                                    </Text>
                                </Box>
                            </Center>
                        </Flex>

                    </Box>

                    <Box
                        bg='#288DFF'
                        maxW='410px'
                        h='315px'
                        p='65px'
                        textAlign='center'
                        position='relative'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '6%',
                            left: '6%',
                            width: '88%',
                            height: '88%',
                            border: '2px solid',
                            borderColor: 'white',
                        }}
                    >
                        <Flex>
                            <Center w='100%' h='190px'>
                                <Box>
                                    <Text
                                        color='white'
                                        fontSize='5xl'
                                        fontWeight='extrabold'
                                        lineHeight='1'
                                        mb='45px'
                                    >
                                        550.000đ
                                    </Text>
                                    <Text
                                        color='white'
                                        fontSize='xl'
                                        fontWeight='normal'
                                    >
                                        mỗi người lớn
                                    </Text>
                                </Box>
                            </Center>
                        </Flex>

                    </Box>

                    <Box
                        border='2px solid'
                        borderColor='cyan.500'
                        maxW='410px'
                        maxH='240px'
                        h='auto'
                        p='65px'
                        textAlign='center'
                    >
                        <Flex>
                            <Center w='100%'>
                                <Box>
                                    <Text
                                        color='cyan.400'
                                        fontSize='5xl'
                                        fontWeight='extrabold'
                                        lineHeight='1'
                                        mb='45px'
                                    >
                                        510.000đ
                                    </Text>
                                    <Text
                                        color='gray.600'
                                        fontSize='xl'
                                        fontWeight='normal'
                                    >
                                        mỗi người già
                                    </Text>
                                </Box>
                            </Center>
                        </Flex>

                    </Box>
                </Stack>
            </Container>

        </Box>
    )
}
