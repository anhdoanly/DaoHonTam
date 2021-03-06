import { Box, Button, Container, Divider, Flex, List, ListIcon, ListItem, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function MultiPacks({ data, phone }) {
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
                    {
                        data.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    borderRadius='50px'
                                    boxShadow='2xl'
                                    bg={item.bgColor}
                                    px='6'
                                    py='10'
                                    w='330px'
                                    minH='435px'
                                    position='relative'
                                >
                                    <Text
                                        fontSize='4xl'
                                        fontWeight='bold'
                                        color={item.bgColor == 'white' ? '#00b5d8' : 'white'}
                                        mb='20px'
                                        textAlign='center'
                                        lineHeight='1'
                                    >
                                        {item.title}
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
                                                color={item.bgColor == 'white' ? 'cyan.400' : 'white'}
                                                textAlign='center'
                                                mb='1'
                                            >
                                                Ng?????i l???n
                                            </Text>
                                            <Text
                                                fontSize='3xl'
                                                fontWeight='semibold'
                                                color={item.bgColor == 'white' ? 'gray.500' : 'yellow.200'}
                                                textAlign='center'
                                            >
                                                {item.priceAdult}
                                            </Text>
                                        </Box>
                                        <Spacer />
                                        <Box
                                            flex='end'
                                        >
                                            <Text
                                                fontSize='3xl'
                                                fontWeight='semibold'
                                                color={item.bgColor == 'white' ? 'gray.500' : 'yellow.200'}
                                                textAlign='center'
                                            >
                                                {item.priceChild}
                                            </Text>
                                            <Text
                                                fontSize='lg'
                                                fontWeight='normal'
                                                color={item.bgColor == 'white' ? 'cyan.400' : 'white'}
                                                textAlign='center'
                                                mb='1'
                                            >
                                                Tr??? em
                                            </Text>
                                        </Box>
                                    </Flex>
                                    <Divider
                                        borderColor='gray.300'
                                    />
                                    <List spacing={3} mt='20px' color={item.bgColor == 'white' ? 'gray.900' : 'white'}>
                                        {
                                            item.services.map((itemService, key) => {
                                                return (
                                                    <ListItem key={key}>
                                                        <ListIcon as={MdCheckCircle} color='yellow.200' />
                                                        {itemService.name}
                                                    </ListItem>
                                                )
                                            })
                                        }
                                        {/* <ListItem>
                                            <ListIcon as={MdCheckCircle} color='yellow.200' />
                                            ??n tr??a
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={MdCheckCircle} color='yellow.200' />
                                            Cano v???n chuy???n 2 chi???u
                                        </ListItem> */}
                                    </List>
                                    <Box
                                        position='absolute'
                                        bottom='-5'
                                        right='10'
                                    >
                                        <Button
                                            as='a'
                                            href={`tel:${phone}`}
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
                                            ?????t ngay
                                        </Button>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                    {/* <Box
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
                            G??i t???m b??n 1
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
                                    Ng?????i l???n
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
                                    Tr??? em
                                </Text>
                            </Box>
                        </Flex>
                        <Divider
                            borderColor='gray.300'
                        />
                        <List spacing={3} mt='20px'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                T???m b??n
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                ??n tr??a
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Cano v???n chuy???n 2 chi???u
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
                                ?????t ngay
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
                            G??i t???m b??n 2
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
                                    Ng?????i l???n
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
                                    Tr??? em
                                </Text>
                            </Box>
                        </Flex>
                        <Divider
                            borderColor='gray.300'
                        />
                        <List spacing={3} mt='20px' color='white'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                T???m b??n
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                ??n tr??a
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
                                ?????t ngay
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
                            G??i t???m b??n 3
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
                                    Ng?????i l???n
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
                                    Tr??? em
                                </Text>
                            </Box>
                        </Flex>
                        <Divider
                            borderColor='gray.300'
                        />
                        <List spacing={3} mt='20px'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                T???m b??n
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                Cano v???n chuy???n 2 chi???u
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
                                ?????t ngay
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
                            G??i t???m b??n 4
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
                                    Ng?????i l???n
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
                                    Tr??? em
                                </Text>
                            </Box>
                        </Flex>
                        <Divider
                            borderColor='gray.300'
                        />
                        <List spacing={3} mt='20px' color='white'>
                            <ListItem>
                                <ListIcon as={MdCheckCircle} color='yellow.200' />
                                T???m b??n
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
                                ?????t ngay
                            </Button>
                        </Box>
                    </Box> */}
                </Stack>
            </Container>
        </Box >
    )
}
