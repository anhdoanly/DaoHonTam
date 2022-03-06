import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PhoneIcon } from '@chakra-ui/icons'

export default function FormContact({ data }) {
    return (
        <Box
            p={['20px', '40px']}
            bg='white'
            borderRadius='20px'
            boxShadow='2xl'
            borderTop='10px solid #0CD3FF'
            w='100%'
        >
            <Text
                fontSize={['lg', '2xl']}
                fontWeight='medium'
                color='gray.600'
                mb='20px'
                textAlign='center'
                lineHeight='1'
            >
                Hãy bắt đầu hành trình ngay hôm nay
            </Text>
            <Text
                fontSize={['3xl', '4xl']}
                fontWeight='semibold'
                color='gray.800'
                mb='50px'
                textAlign='center'
                lineHeight='1'
            >
                Liên hệ với chúng tôi
            </Text>

            <Box
                mb='50px'
            >
                {
                    data.map((item, index) => {
                        return (
                            <Stack
                                direction='row'
                                spacing={[0, 8]}
                                align='center'
                                mb='40px'
                                key={index}
                            >
                                <Box
                                    w={['0', '180px']}
                                    display={['none', 'block']}
                                >
                                    <Text>Số điện thoại:</Text>
                                </Box>
                                <Box w='100%'>
                                    <Button
                                        colorScheme={'cyan'}
                                        size='md'
                                        variant='outline'
                                        w='100%'
                                        leftIcon={<PhoneIcon />}
                                        as='a'
                                        href={`tel:${item.value}`}
                                    >
                                        {item.label}
                                    </Button>
                                </Box>
                            </Stack>
                        )
                    })
                }
                {/* <Stack
                    direction='row'
                    spacing={[0, 8]}
                    align='center'
                    mb='40px'
                >
                    <Box
                        w={['0', '180px']}
                        display={['none', 'block']}
                    >
                        <Text>Số điện thoại 01:</Text>
                    </Box>
                    <Box w='100%'>
                        <Button
                            colorScheme={'cyan'}
                            size='md'
                            variant='outline'
                            w='100%'
                            leftIcon={<PhoneIcon />}
                        >
                            0909.0909.0909
                        </Button>
                    </Box>
                </Stack>
                <Stack
                    direction='row'
                    spacing={[0, 8]}
                    align='center'
                    mb='40px'
                >
                    <Box
                        w={['0', '180px']}
                        display={['none', 'block']}
                    >
                        <Text>Số điện thoại 02:</Text>
                    </Box>
                    <Box w='100%'>
                        <Button
                            colorScheme={'cyan'}
                            size='md'
                            variant='outline'
                            w='100%'
                            leftIcon={<PhoneIcon />}
                        >
                            0909.0909.0909
                        </Button>
                    </Box>
                </Stack>
                <Stack
                    direction='row'
                    spacing={[0, 8]}
                    align='center'
                    mb='40px'
                >
                    <Box
                        w={['0', '180px']}
                        display={['none', 'block']}
                    >
                        <Text>Số điện thoại 03:</Text>
                    </Box>
                    <Box w='100%'>
                        <Button
                            colorScheme={'cyan'}
                            size='md'
                            variant='outline'
                            w='100%'
                            leftIcon={<PhoneIcon />}
                        >
                            0909.0909.0909
                        </Button>
                    </Box>
                </Stack> */}
                <Box
                    justifyContent='center'
                    display={['none', 'flex']}
                >
                    <Button
                        loadingText='Đang gửi...'
                        size={'lg'}
                        bgGradient={'linear(to-r, #0096C6, #0CD3FF)'}
                        color={'white'}
                        borderRadius={'none'}
                        px={'8'}
                        py={'6'}
                        textTransform={'uppercase'}
                        _hover={{ opacity: 0.9 }}
                        _active={{ opacity: 0.9 }}
                        _focus={{
                            outline: 'none',
                        }}
                    >
                        Liên hệ ngay để nhận ưu đãi sớm nhất
                    </Button>
                </Box>
                {/* <FormControl isRequired>
                    <Stack
                        direction='row'
                        spacing={8}
                        align='center'
                        mb='40px'
                    >
                        <Box
                            w='180px'
                        >
                            <FormLabel htmlFor='name'>Tên:</FormLabel>
                        </Box>
                        <Box w='100%'>
                            <Input id='name' type='text' />
                        </Box>
                    </Stack>
                </FormControl>
                <FormControl isRequired>
                    <Stack
                        direction='row'
                        spacing={8}
                        align='center'
                        mb='40px'
                    >
                        <Box
                            w='180px'
                        >
                            <FormLabel htmlFor='phone'>Số điện thoại:</FormLabel>
                        </Box>
                        <Box w='100%'>
                            <Input id='phone' type='text' />
                        </Box>
                    </Stack>
                </FormControl>
                <FormControl>
                    <Stack
                        direction='row'
                        spacing={8}
                        align='center'
                        mb='40px'
                    >
                        <Box
                            w='180px'
                        >
                            <FormLabel htmlFor='email'>Email:</FormLabel>
                        </Box>
                        <Box w='100%'>
                            <Input id='email' type='email' />
                        </Box>
                    </Stack>
                </FormControl>
                <FormControl>
                    <Stack
                        direction='row'
                        spacing={8}
                        align='center'
                        mb='40px'
                    >
                        <Box
                            w='180px'
                        >
                            <FormLabel htmlFor='amount'>Số người:</FormLabel>
                        </Box>
                        <Box w='100%'>
                            <Input id='amount' type='number' />
                        </Box>
                    </Stack>
                </FormControl> */}


            </Box>
        </Box>
    )
}
