import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Testimonial() {
    return (
        <Box
            as="section"
            mt='80px'
        >
            <Container maxW='container.xl'>
                <Heading
                    as="h2"
                    fontSize='5xl'
                    fontWeight='bold'
                    color='gray.600'
                    textAlign='center'
                    mb='25px'
                    lineHeight='1'
                >
                    15,000+ khách hàng nói về chúng tôi
                </Heading>
                <Text
                    fontSize='lg'
                    fontWeight='normal'
                    color='gray.600'
                    textAlign='center'
                    lineHeight='7'
                >
                    Chúng tôi nỗ lực mỗi ngày để mang đến cho khách hàng sản phẩm và dịch vụ tốt nhất
                </Text>

                <Stack
                    direction='row'
                    justify='center'
                    align='center'
                    spacing='40px'
                    mt='50px'
                >
                    <Box>
                        <Stack
                            direction='row'
                            align='center'
                            spacing='10px'
                        >
                            <Box>
                                <Image src='/images/people-1.jpg' alt='people 1' boxSize='85px' borderRadius='full' />
                            </Box>
                            <Text
                                fontSize='sm'
                                fontWeight='normal'
                                color='gray.600'
                                lineHeight='5'
                                maxW='290px'
                            >
                                Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn
                            </Text>
                        </Stack>
                        <Text
                            fontSize='sm'
                            fontWeight='500'
                            color='gray.900'
                            lineHeight='5'
                            mt='4'
                        >
                            Nguyễn Văn A, Giám đốc Kinh doanh
                        </Text>
                        <Text
                            fontSize='12px'
                            fontWeight='300'
                            color='blue.600'
                            lineHeight='16px'
                            mt='2'
                            fontStyle='italic'
                        >
                            Bảo hiểm Prudential
                        </Text>
                    </Box>

                    <Box>
                        <Stack
                            direction='row'
                            align='center'
                            spacing='10px'
                        >
                            <Box>
                                <Image src='/images/people-2.jpg' alt='people 1' boxSize='85px' borderRadius='full' />
                            </Box>
                            <Text
                                fontSize='sm'
                                fontWeight='normal'
                                color='gray.600'
                                lineHeight='5'
                                maxW='290px'
                            >
                                Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn
                            </Text>
                        </Stack>
                        <Text
                            fontSize='sm'
                            fontWeight='500'
                            color='gray.900'
                            lineHeight='5'
                            mt='4'
                        >
                            Nguyễn Văn A, Giám đốc Kinh doanh
                        </Text>
                        <Text
                            fontSize='12px'
                            fontWeight='300'
                            color='blue.600'
                            lineHeight='16px'
                            mt='2'
                            fontStyle='italic'
                        >
                            Bảo hiểm Prudential
                        </Text>
                    </Box>

                    <Box>
                        <Stack
                            direction='row'
                            align='center'
                            spacing='10px'
                        >
                            <Box>
                                <Image src='/images/people-3.jpg' alt='people 1' boxSize='85px' borderRadius='full' />
                            </Box>
                            <Text
                                fontSize='sm'
                                fontWeight='normal'
                                color='gray.600'
                                lineHeight='5'
                                maxW='290px'
                            >
                                Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn
                            </Text>
                        </Stack>
                        <Text
                            fontSize='sm'
                            fontWeight='500'
                            color='gray.900'
                            lineHeight='5'
                            mt='4'
                        >
                            Nguyễn Văn A, Giám đốc Kinh doanh
                        </Text>
                        <Text
                            fontSize='12px'
                            fontWeight='300'
                            color='blue.600'
                            lineHeight='16px'
                            mt='2'
                            fontStyle='italic'
                        >
                            Bảo hiểm Prudential
                        </Text>
                    </Box>
                </Stack>
            </Container>

        </Box>
    )
}
