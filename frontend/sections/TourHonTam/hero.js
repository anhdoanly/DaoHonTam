import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
  return (
    <Box
        position={'relative'}
        top='-100px'
        bgImage={`url('/images/baibien-hontam-bg.jpg')`}
        bgSize='cover'
        w='100%'
        minH='930px'
        pt='330px'
        _after={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '290px',
            bgGradient: 'linear(to-t, rgba(255,255,255, 1), rgba(255,255,255, 0))',
        }}
    >
        <Container maxW='container.xl'>
            <Heading
                as='h1'
                fontSize='6xl'
                fontWeight='bold'
                color='white'
            >
                Đảo Hòn Tằm Nha Trang
            </Heading>
            <Text
                as='p'
                fontSize='3xl'
                color='white'
                mt='20px'
                fontWeight={300}
            >
                Tham quan &amp; khám phá Tour đảo Hòn Tằm Nha Trang hàng ngày
            </Text>
            <Button
                size={'lg'}
                mt='50px'
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
                Đặt tour ngay
            </Button>
        </Container>
    </Box>
  )
}
