import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ChatIcon, PhoneIcon } from '@chakra-ui/icons'

export default function CallBox({ phone1, phone2, zalo }) {
    return (
        <Box
            px={['20px', '40px']}
            py={['30px', '40px']}
            bg='white'
            borderRadius='20px'
            boxShadow='2xl'
            borderTop='10px solid #0CD3FF'
            w='100%'
        >
            <Text
                fontSize={['3xl', '4xl']}
                fontWeight='semibold'
                color='gray.800'
                mb={['20px', '50px']}
                textAlign='center'
                lineHeight={['1.2', '1']}
            >
                Liên hệ ngay với chúng tôi
            </Text>
            <Stack
                direction={['column', 'row']}
                spacing={4}
                align='center'
                justify='center'
                mb={['20px', '40px']}
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
                    as='a'
                    href={`tel:${phone1}`}
                >
                    Gọi {phone1}
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
                    as='a'
                    href={`tel:${phone2}`}
                >
                    Gọi {phone2}
                </Button>
            </Stack>
            <Text
                fontSize={['sm', 'md']}
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
                    fontSize={['md', 'xl']}
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
                    as='a'
                    href={`http://zalo.me/${zalo}`}
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
