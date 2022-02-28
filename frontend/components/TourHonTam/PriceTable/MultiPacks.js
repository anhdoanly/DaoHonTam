import { Box, Button, Container, Divider, Flex, List, ListIcon, ListItem, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function MultiPacks() {
    return (
        <Box
            mt='45px'
        >
            <Container maxW='container.xl'>
                <Stack
                    spacing={[12, 5]}
                    direction={['column', 'row']}
                    justify='center'
                    align='center'
                >
                    <Box
                        borderRadius='50px'
                        boxShadow='2xl'
                        bg='white'
                        px='6'
                        py='10'
                        w='330px'
                        minH='435px'
                        position='relative'
                    >
                        <Text
                            fontSize='4xl'
                            fontWeight='bold'
                            color='#00b5d8'
                            mb='20px'
                            textAlign='center'
                            lineHeight='1'
                        >
                            Gói tắm bùn 1
                        </Text>
                        <Flex
                            mb='20px'
                        >
                            <Box
                                flex='start'
                            >
                                <Text
                                    fontSize='lg'
                                    fontWeight='normal'
                                    color='cyan.400'
                                    textAlign='center'
                                    mb='1'
                                >
                                    Người lớn
                                </Text>
                                <Text
                                    fontSize='3xl'
                                    fontWeight='semibold'
                                    color='gray.500'
                                    textAlign='center'
                                >
                                    550.000
                                </Text>
                            </Box>
                            <Spacer />
                            <Box
                                flex='end'
                            >
                                <Text
                                    fontSize='3xl'
                                    fontWeight='semibold'
                                    color='gray.500'
                                    textAlign='center'
                                >
                                    385.000
                                </Text>
                                <Text
                                    fontSize='lg'
                                    fontWeight='normal'
                                    color='cyan.400'
                                    textAlign='center'
                                    mb='1'
                                >
                                    Trẻ em
                                </Text>
                            </Box>
                        </Flex>
                        <Divider
                            borderColor='gray.300'
                        />
                        <List spacing={3} mt='20px'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Tắm bùn
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Ăn trưa
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Cano vận chuyển 2 chiều
                            </ListItem>
                        </List>
                        <Box
                            position='absolute'
                            bottom='-5'
                            right='10'
                        >
                            <Button
                                size='lg'
                                bg='#288dff'
                                color='white'
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                _active={{
                                    bg: 'blue.500',
                                }}
                                _focus={{
                                    boxShadow: 'outline',
                                }}
                            >
                                Đặt ngay
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        borderRadius='50px'
                        boxShadow='2xl'
                        bg='cyan.500'
                        px='6'
                        py='10'
                        w='330px'
                        minH='435px'
                        position='relative'
                    >
                        <Text
                            fontSize='4xl'
                            fontWeight='bold'
                            color='white'
                            mb='20px'
                            textAlign='center'
                            lineHeight='1'
                        >
                            Gói tắm bùn 2
                        </Text>
                        <Flex
                            mb='20px'
                        >
                            <Box
                                flex='start'
                            >
                                <Text
                                    fontSize='lg'
                                    fontWeight='normal'
                                    color='white'
                                    textAlign='center'
                                    mb='1'
                                >
                                    Người lớn
                                </Text>
                                <Text
                                    fontSize='3xl'
                                    fontWeight='semibold'
                                    color='yellow.200'
                                    textAlign='center'
                                >
                                    450.000
                                </Text>
                            </Box>
                            <Spacer />
                            <Box
                                flex='end'
                            >
                                <Text
                                    fontSize='3xl'
                                    fontWeight='semibold'
                                    color='yellow.200'
                                    textAlign='center'
                                >
                                    315.000
                                </Text>
                                <Text
                                    fontSize='lg'
                                    fontWeight='normal'
                                    color='white'
                                    textAlign='center'
                                    mb='1'
                                >
                                    Trẻ em
                                </Text>
                            </Box>
                        </Flex>
                        <Divider
                            borderColor='gray.300'
                        />
                        <List spacing={3} mt='20px' color='white'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Tắm bùn
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Ăn trưa
                            </ListItem>
                        </List>
                        <Box
                            position='absolute'
                            bottom='-5'
                            right='10'
                        >
                            <Button
                                size='lg'
                                bg='#288dff'
                                color='white'
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                _active={{
                                    bg: 'blue.500',
                                }}
                                _focus={{
                                    boxShadow: 'outline',
                                }}
                            >
                                Đặt ngay
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        borderRadius='50px'
                        boxShadow='2xl'
                        bg='white'
                        px='6'
                        py='10'
                        w='330px'
                        minH='435px'
                        position='relative'
                    >
                        <Text
                            fontSize='4xl'
                            fontWeight='bold'
                            color='#00b5d8'
                            mb='20px'
                            textAlign='center'
                            lineHeight='1'
                        >
                            Gói tắm bùn 3
                        </Text>
                        <Flex
                            mb='20px'
                        >
                            <Box
                                flex='start'
                            >
                                <Text
                                    fontSize='lg'
                                    fontWeight='normal'
                                    color='cyan.400'
                                    textAlign='center'
                                    mb='1'
                                >
                                    Người lớn
                                </Text>
                                <Text
                                    fontSize='3xl'
                                    fontWeight='semibold'
                                    color='gray.500'
                                    textAlign='center'
                                >
                                    350.000
                                </Text>
                            </Box>
                            <Spacer />
                            <Box
                                flex='end'
                            >
                                <Text
                                    fontSize='3xl'
                                    fontWeight='semibold'
                                    color='gray.500'
                                    textAlign='center'
                                >
                                    245.000
                                </Text>
                                <Text
                                    fontSize='lg'
                                    fontWeight='normal'
                                    color='cyan.400'
                                    textAlign='center'
                                    mb='1'
                                >
                                    Trẻ em
                                </Text>
                            </Box>
                        </Flex>
                        <Divider
                            borderColor='gray.300'
                        />
                        <List spacing={3} mt='20px'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Tắm bùn
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Cano vận chuyển 2 chiều
                            </ListItem>
                        </List>
                        <Box
                            position='absolute'
                            bottom='-5'
                            right='10'
                        >
                            <Button
                                size='lg'
                                bg='#288dff'
                                color='white'
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                _active={{
                                    bg: 'blue.500',
                                }}
                                _focus={{
                                    boxShadow: 'outline',
                                }}
                            >
                                Đặt ngay
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        borderRadius='50px'
                        boxShadow='2xl'
                        bg='cyan.500'
                        px='6'
                        py='10'
                        w='330px'
                        minH='435px'
                        position='relative'
                    >
                        <Text
                            fontSize='4xl'
                            fontWeight='bold'
                            color='white'
                            mb='20px'
                            textAlign='center'
                            lineHeight='1'
                        >
                            Gói tắm bùn 4
                        </Text>
                        <Flex
                            mb='20px'
                        >
                            <Box
                                flex='start'
                            >
                                <Text
                                    fontSize='lg'
                                    fontWeight='normal'
                                    color='white'
                                    textAlign='center'
                                    mb='1'
                                >
                                    Người lớn
                                </Text>
                                <Text
                                    fontSize='3xl'
                                    fontWeight='semibold'
                                    color='yellow.200'
                                    textAlign='center'
                                >
                                    250.000
                                </Text>
                            </Box>
                            <Spacer />
                            <Box
                                flex='end'
                            >
                                <Text
                                    fontSize='3xl'
                                    fontWeight='semibold'
                                    color='yellow.200'
                                    textAlign='center'
                                >
                                    175.000
                                </Text>
                                <Text
                                    fontSize='lg'
                                    fontWeight='normal'
                                    color='white'
                                    textAlign='center'
                                    mb='1'
                                >
                                    Trẻ em
                                </Text>
                            </Box>
                        </Flex>
                        <Divider
                            borderColor='gray.300'
                        />
                        <List spacing={3} mt='20px' color='white'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Tắm bùn
                            </ListItem>
                        </List>
                        <Box
                            position='absolute'
                            bottom='-5'
                            right='10'
                        >
                            <Button
                                size='lg'
                                bg='#288dff'
                                color='white'
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                _active={{
                                    bg: 'blue.500',
                                }}
                                _focus={{
                                    boxShadow: 'outline',
                                }}
                            >
                                Đặt ngay
                            </Button>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
