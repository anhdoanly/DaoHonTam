import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ChatIcon, PhoneIcon } from '@chakra-ui/icons'

export default function CallBox() {
    return (
        <Box
            p='40px'
            bg='white'
            borderRadius='20px'
            boxShadow='2xl'
            borderTop='10px solid #0CD3FF'
        >
            <Text
                fontSize='4xl'
                fontWeight='semibold'
                color='gray.800'
                mb='50px'
                textAlign='center'
                lineHeight='1'
            >
                Liên hệ ngay với chúng tôi
            </Text>
            <Stack
                direction='row'
                spacing={4}
                align='center'
                justify='center'
                mb='40px'
            >
                <Button
                    bgGradient='linear(to-r, #0096C6, #0CD3FF)'
                    size='lg'
                    px='40px'
                    color='white'
                    _hover={{ opacity: 0.8 }}
                    _active={{ opacity: 0.8 }}
                    _focus={{ outline: 'none' }}
                    leftIcon={<PhoneIcon />}
                >
                    Gọi 0981211948
                </Button>
                <Button
                    bgGradient='linear(to-r, #0096C6, #0CD3FF)'
                    size='lg'
                    px='40px'
                    color='white'
                    _hover={{ opacity: 0.8 }}
                    _active={{ opacity: 0.8 }}
                    _focus={{ outline: 'none' }}
                    leftIcon={<PhoneIcon />}
                >
                    Gọi 0979853348
                </Button>
            </Stack>
            <Text
                fontSize='md'
                fontWeight='normal'
                color='gray.500'
                textAlign='center'
                mb='20px'
            >
                Nếu không có ai nghe máy hoặc máy bận, hãy nhắn tin theo cú pháp bên dưới, chúng tôi sẽ gọi lại ngay!
            </Text>

            <Box
                mb='20px'
                border='1px dashed'
                borderColor='blue.500'
                p='15px 10px'
                bgColor='blue.50'
                color='blue.600'
                textAlign='center'
            >
                <Text
                    fontSize='xl'
                    fontWeight='semibold'
                    lineHeight='1'
                >
                    Tour đảo Hòn Tằm tắm bùn - Ngày đi - Số lượng
                </Text>
            </Box>

            <Box
                textAlign='center'
            >
                <Button
                    bg='white'
                    color='blue.500'
                    leftIcon={<ChatIcon />}
                    boxShadow='0px 4px 15px rgba(0, 0, 0, 0.25);'
                    borderRadius='15px'
                    size='lg'
                    _hover={{
                        bg: 'blue.50',
                    }}
                    _active={{
                        bg: 'blue.50',
                    }}
                    _focus={{
                        outline: 'none',
                    }}
                >
                    Gửi tin nhắn Zalo
                </Button>
            </Box>
        </Box>
    )
}
