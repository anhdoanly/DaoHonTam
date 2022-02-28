import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

export default function Warning() {
    return (
        <Box
            bgImage={`url('/images/bg-warning.jpg')`}
            bgSize='cover'
            bgRepeat='no-repeat'
            bgPosition='center'
            py='160px'
            textAlign='center'
            mt={['0', '200px']}
            position='relative'
            zIndex={0}
            _before={{
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                bgColor: 'rgba(22,22,22,0.3)',
                zIndex: '1'
            }}
        >
            <Container maxW='container.xl'>
                <Box
                    as='h2'
                    fontSize='4xl'
                    fontWeight='semibold'
                    color='white'
                    display={['block', 'inline-block']}
                    lineHeight='1'
                    position='relative'
                    zIndex={2}
                >
                    <Text
                        as='span'
                        bgColor='white'
                        color='black'
                        fontWeight='normal'
                        border='1px solid white'
                        px='2'
                        py='2'
                        display={['block', 'initial']}
                    >
                        Cảnh báo
                    </Text>
                    <Text
                        as='span'
                        border='1px solid white'
                        px='4'
                        py='2'
                        display={['block', 'initial']}
                    >
                        Giả mạo Hòn Tằm để bán dịch vụ
                    </Text>
                </Box>
                <Text
                    as='p'
                    fontSize='2xl'
                    fontWeight='semibold'
                    color='white'
                    mt='50px'
                    position='relative'
                    zIndex={2}
                >
                    Chọn ngay tour hôm nay và bạn sẽ được giảm giá 50%
                    <br />
                    và bạn có thể tin tưởng chúng tôi sẽ hỗ trợ trong vòng chưa đầy 24h
                </Text>
            </Container>
        </Box>
    )
}
