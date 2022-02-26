import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function FormContact() {
    return (
        <Box
            p='40px'
            bg='white'
            borderRadius='20px'
            boxShadow='2xl'
            borderTop='10px solid #0CD3FF'
        >
            <Text
                fontSize='2xl'
                fontWeight='medium'
                color='gray.600'
                mb='20px'
                textAlign='center'
                lineHeight='1'
            >
                Hãy bắt đầu hành trình ngay hôm nay
            </Text>
            <Text
                fontSize='4xl'
                fontWeight='semibold'
                color='gray.800'
                mb='50px'
                textAlign='center'
                lineHeight='1'
            >
                Để lại thông tin liên hệ
            </Text>

            <Box
                mb='50px'
            >
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
                </FormControl>
                <Box
                    display='flex'
                    justifyContent='center'
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

            </Box>
        </Box>
    )
}
