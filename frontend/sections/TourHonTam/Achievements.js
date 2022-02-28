import { Box, Container, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { HiShieldCheck } from 'react-icons/hi'
import { FaAward } from 'react-icons/fa'

export default function Achievements() {
    return (
        <Box
            mt='80px'
            position='relative'
            as="section"
            bgImage={`url('/images/bg-achievements.jpg')`}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            py='35px'
            color='white'
            _before={{
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                bgColor:'rgba(0,0,0,0.5)',
                zIndex: '1'
            }}
        >
            <Container maxW='container.lg'>
                <Stack
                    spacing={20}
                    justifyContent='center'
                    alignItems='center'
                    textAlign='center'
                    direction={['column', 'row']}
                    zIndex='2'
                    position='relative'
                >
                    <Stack
                        spacing={4}
                        maxW='460px'
                        alignItems='center'
                    >
                        <Icon as={FiUserPlus} w='70px' h='70px' />
                        <Text
                            fontSize='4xl'
                            fontWeight='bold'
                        >
                            3579
                        </Text>
                        <Text
                            fontSize='2xl'
                            fontWeight='normal'
                        >
                            Khách hàng mới
                        </Text>
                        <Text
                            fontSize='16px'
                            fontWeight='normal'
                        >
                            Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.
                        </Text>
                    </Stack>

                    <Stack
                        spacing={4}
                        maxW='460px'
                        alignItems='center'
                    >
                        <Icon as={HiShieldCheck} w='70px' h='70px' />
                        <Text
                            fontSize='4xl'
                            fontWeight='bold'
                        >
                            461
                        </Text>
                        <Text
                            fontSize='2xl'
                            fontWeight='normal'
                        >
                            Tour hoàn thành
                        </Text>
                        <Text
                            fontSize='16px'
                            fontWeight='normal'
                        >
                            Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.
                        </Text>
                    </Stack>

                    <Stack
                        spacing={4}
                        maxW='460px'
                        alignItems='center'
                    >
                        <Icon as={FaAward} w='70px' h='70px' />
                        <Text
                            fontSize='4xl'
                            fontWeight='bold'
                        >
                            1684
                        </Text>
                        <Text
                            fontSize='2xl'
                            fontWeight='normal'
                        >
                            Lượt thích
                        </Text>
                        <Text
                            fontSize='16px'
                            fontWeight='normal'
                        >
                            Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
