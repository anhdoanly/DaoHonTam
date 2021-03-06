import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Testimonial({ title, description, data }) {
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
                    {title}
                </Heading>
                <Text
                    fontSize='lg'
                    fontWeight='normal'
                    color='gray.600'
                    textAlign='center'
                    lineHeight='7'
                >
                    {description}
                </Text>

                <Stack
                    direction={['column', 'row']}
                    justify='center'
                    align='center'
                    spacing='40px'
                    mt='50px'
                >
                    {data.map((item, index) => {
                        return (
                            <Box key={index}>
                                <Stack
                                    direction='row'
                                    align='center'
                                    spacing='10px'
                                >
                                    <Box>
                                        <Image src={item.avatar} alt={item.name} boxSize='85px' borderRadius='full' />
                                    </Box>
                                    <Text
                                        fontSize='sm'
                                        fontWeight='normal'
                                        color='gray.600'
                                        lineHeight='5'
                                        maxW={['200px', '290px']}
                                    >
                                        {item.content}
                                    </Text>
                                </Stack>
                                <Text
                                    fontSize='sm'
                                    fontWeight='500'
                                    color='gray.900'
                                    lineHeight='5'
                                    mt='4'
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    fontSize='12px'
                                    fontWeight='300'
                                    color='blue.600'
                                    lineHeight='16px'
                                    mt='2'
                                    fontStyle='italic'
                                >
                                    {item.company}
                                </Text>
                            </Box>
                        )
                    })}
                    {/* <Box>
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
                                maxW={['200px', '290px']}
                            >
                                T??i r???t h??i l??ng v??? s???n ph???m d???ch v??? c???a b???n. Hy v???ng ch??ng ta c?? nhi???u c?? h???i l??m vi???c v???i nhau h??n
                            </Text>
                        </Stack>
                        <Text
                            fontSize='sm'
                            fontWeight='500'
                            color='gray.900'
                            lineHeight='5'
                            mt='4'
                        >
                            Nguy???n V??n A, Gi??m ?????c Kinh doanh
                        </Text>
                        <Text
                            fontSize='12px'
                            fontWeight='300'
                            color='blue.600'
                            lineHeight='16px'
                            mt='2'
                            fontStyle='italic'
                        >
                            B???o hi???m Prudential
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
                                maxW={['200px', '290px']}
                            >
                                T??i r???t h??i l??ng v??? s???n ph???m d???ch v??? c???a b???n. Hy v???ng ch??ng ta c?? nhi???u c?? h???i l??m vi???c v???i nhau h??n
                            </Text>
                        </Stack>
                        <Text
                            fontSize='sm'
                            fontWeight='500'
                            color='gray.900'
                            lineHeight='5'
                            mt='4'
                        >
                            Nguy???n V??n A, Gi??m ?????c Kinh doanh
                        </Text>
                        <Text
                            fontSize='12px'
                            fontWeight='300'
                            color='blue.600'
                            lineHeight='16px'
                            mt='2'
                            fontStyle='italic'
                        >
                            B???o hi???m Prudential
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
                                maxW={['200px', '290px']}
                            >
                                T??i r???t h??i l??ng v??? s???n ph???m d???ch v??? c???a b???n. Hy v???ng ch??ng ta c?? nhi???u c?? h???i l??m vi???c v???i nhau h??n
                            </Text>
                        </Stack>
                        <Text
                            fontSize='sm'
                            fontWeight='500'
                            color='gray.900'
                            lineHeight='5'
                            mt='4'
                        >
                            Nguy???n V??n A, Gi??m ?????c Kinh doanh
                        </Text>
                        <Text
                            fontSize='12px'
                            fontWeight='300'
                            color='blue.600'
                            lineHeight='16px'
                            mt='2'
                            fontStyle='italic'
                        >
                            B???o hi???m Prudential
                        </Text>
                    </Box> */}
                </Stack>
            </Container>

        </Box>
    )
}
