import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    return (
        <Box>
            <Heading
                as='h2'
                fontSize='5xl'
                fontWeight='bold'
                color='gray.600'
                textAlign='center'
                transform='uppercase'
                lineHeight='1'
                mb='20px'
            >
                Bảng Giá Tour
            </Heading>
            <Text
                as='p'
                fontSize='xl'
                fontWeight='normal'
                color='gray.600'
                textAlign='center'
                maxW='690px'
                mx='auto'
            >
                Mô tả tóm tắt nội dung về các loại giá của Tour đang cung cấp. Để khách
                hàng biết được thông tin dễ dàng
            </Text>
        </Box>
    )
}
