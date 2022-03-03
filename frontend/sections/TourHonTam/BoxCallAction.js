import { Box, Container, Flex, HStack, Icon, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai'

export default function BoxCallAction({ data }) {
    return (
        <Box
            display={['none', 'none', 'none', 'block']}
            mt='80px'
        >
            <Container maxW='container.xl'>
                <Box
                    as='section'
                    bgImage={`url('/images/bg-boxcallaction.jpg')`}
                    bgSize='cover'
                    bgRepeat='no-repeat'
                    bgPosition='center'
                    px='45px'
                    py='80px'
                    borderRadius='30px'
                    position='relative'
                    zIndex='1'
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.32)',
                        borderRadius: '30px',
                        zIndex: '2',
                    }}
                >
                    <Flex
                        align='center'
                        position='relative'
                        zIndex='3'
                    >
                        <Box
                            as='p'
                            fontSize='3xl'
                            fontWeight='semibold'
                            color='white'
                            maxW='215px'
                        >
                            Liên hệ ngay để nhận {' '}
                            <Text
                                as='span'
                                color='cyan.400'
                            >
                                ưu đãi
                            </Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <HStack
                                spacing={8}
                            >
                                {
                                    data.map((item, index) => {
                                        return (
                                            <Box key={index}>
                                                <HStack
                                                    spacing={3}
                                                >
                                                    <Box
                                                        w='70px'
                                                        h='70px'
                                                        bg='whiteAlpha.800'
                                                        borderRadius='50%'
                                                        overflow='hidden'
                                                        textAlign='center'
                                                        pt='3'
                                                    >
                                                        <Icon as={AiOutlinePhone} color={item.color} w='45px' h='45px' />
                                                    </Box>
                                                    <VStack
                                                        spacing={2}
                                                        align='left'
                                                    >
                                                        <Text
                                                            as='a'
                                                            href={`tel:${item.value}`}
                                                            fontSize='xl'
                                                            fontWeight='semibold'
                                                            color='white'
                                                            _hover={{
                                                                color: 'cyan.400',
                                                                textDecoration: 'none',
                                                            }}
                                                        >
                                                            {item.label}
                                                        </Text>
                                                        <Text
                                                            as='p'
                                                            fontSize='md'
                                                            fontWeight='normal'
                                                            color='gray.200'
                                                        >
                                                            <Text
                                                                as='a'
                                                                href={`sms:${item.value}?body=Tourdaohontam, Ngaydi..._Soluong....`}
                                                            >
                                                                SMS
                                                            </Text>
                                                            {' '} + {' '}
                                                            <Text
                                                                as='a'
                                                                href={`http://zalo.me/${item.value}`}
                                                            >
                                                                Zalo
                                                            </Text>
                                                        </Text>
                                                    </VStack>
                                                </HStack>
                                            </Box>
                                        )
                                    })
                                }
                                {/* <Box>
                                    <HStack
                                        spacing={3}
                                    >
                                        <Box
                                            w='70px'
                                            h='70px'
                                            bg='whiteAlpha.800'
                                            borderRadius='50%'
                                            overflow='hidden'
                                            textAlign='center'
                                            pt='3'
                                        >
                                            <Icon as={AiOutlinePhone} color='cyan.400' w='45px' h='45px' />
                                        </Box>
                                        <VStack
                                            spacing={2}
                                            align='left'
                                        >
                                            <Text
                                                as='a'
                                                href='tel:0905861858'
                                                fontSize='xl'
                                                fontWeight='semibold'
                                                color='white'
                                                _hover={{
                                                    color: 'cyan.400',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                0905.86.18.58
                                            </Text>
                                            <Text
                                                as='p'
                                                fontSize='md'
                                                fontWeight='normal'
                                                color='gray.200'
                                            >
                                                <Text
                                                    as='a'
                                                    href='sms:0905861858?body=Tourdaohontam, Ngaydi..._Soluong...."'
                                                >
                                                    SMS
                                                </Text>
                                                {' '} + {' '}
                                                <Text
                                                    as='a'
                                                    href='http://zalo.me/0905861858'
                                                >
                                                    Zalo
                                                </Text>
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </Box>

                                <Box>
                                    <HStack
                                        spacing={3}
                                    >
                                        <Box
                                            w='70px'
                                            h='70px'
                                            bg='whiteAlpha.800'
                                            borderRadius='50%'
                                            overflow='hidden'
                                            textAlign='center'
                                            pt='3'
                                        >
                                            <Icon as={AiOutlinePhone} color='red.400' w='45px' h='45px' />
                                        </Box>
                                        <VStack
                                            spacing={2}
                                            align='left'
                                        >
                                            <Text
                                                as='a'
                                                href='tel:0905861858'
                                                fontSize='xl'
                                                fontWeight='semibold'
                                                color='white'
                                                _hover={{
                                                    color: 'cyan.400',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                0905.86.18.58
                                            </Text>
                                            <Text
                                                as='p'
                                                fontSize='md'
                                                fontWeight='normal'
                                                color='gray.200'
                                            >
                                                <Text
                                                    as='a'
                                                    href='sms:0905861858?body=Tourdaohontam, Ngaydi..._Soluong...."'
                                                >
                                                    SMS
                                                </Text>
                                                {' '} + {' '}
                                                <Text
                                                    as='a'
                                                    href='http://zalo.me/0905861858'
                                                >
                                                    Zalo
                                                </Text>
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </Box>

                                <Box>
                                    <HStack
                                        spacing={3}
                                    >
                                        <Box
                                            w='70px'
                                            h='70px'
                                            bg='whiteAlpha.800'
                                            borderRadius='50%'
                                            overflow='hidden'
                                            textAlign='center'
                                            pt='3'
                                        >
                                            <Icon as={AiOutlinePhone} color='pink.400' w='45px' h='45px' />
                                        </Box>
                                        <VStack
                                            spacing={2}
                                            align='left'
                                        >
                                            <Text
                                                as='a'
                                                href='tel:0905861858'
                                                fontSize='xl'
                                                fontWeight='semibold'
                                                color='white'
                                                _hover={{
                                                    color: 'cyan.400',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                0905.86.18.58
                                            </Text>
                                            <Text
                                                as='p'
                                                fontSize='md'
                                                fontWeight='normal'
                                                color='gray.200'
                                            >
                                                <Text
                                                    as='a'
                                                    href='sms:0905861858?body=Tourdaohontam, Ngaydi..._Soluong...."'
                                                >
                                                    SMS
                                                </Text>
                                                {' '} + {' '}
                                                <Text
                                                    as='a'
                                                    href='http://zalo.me/0905861858'
                                                >
                                                    Zalo
                                                </Text>
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </Box> */}
                            </HStack>
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </Box>
    )
}
