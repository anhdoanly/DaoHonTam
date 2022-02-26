import { Box, Button, Flex, Heading, Icon, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Video() {
    return (
        <Box
            position="relative"
            width="100%"
            top='-180px'
        >
            <Flex
            >
                <Flex
                    flex={1}
                    justify='start'
                >
                    <Box
                        w='410px'
                        h='465px'
                        bgImage={`url('/images/video-img-01.jpg')`}
                        position="absolute"
                        top='150px'
                        left='0'
                        bgSize='cover'
                        bgRepeat='no-repeat'
                        bgPosition='center'
                        boxShadow='2xl'
                    />
                    <Box
                        w='410px'
                        h='465px'
                        bgImage={`url('/images/video-img-02.jpg')`}
                        position="absolute"
                        top='0px'
                        left='200px'
                        bgSize='cover'
                        bgRepeat='no-repeat'
                        bgPosition='center'
                        boxShadow='2xl'
                    />
                    <Box
                        position='absolute'
                        top='110px'
                        left='550px'
                        zIndex={2}
                    >
                        <Box
                            as='button'
                            bg='white'
                            borderRadius='50%'
                            boxShadow={'0px 4px 15px rgba(0, 107, 153, 0.25)'}
                            p='10'
                            aria-label='Play Video'
                        >
                            <Icon as={FaPlay} boxSize='10' color={'#0CD3FF'} />
                        </Box>
                        {/* <IconButton 
                            size='lg'
                            borderRadius='100%'
                            color='cyan.400'
                            fontSize='40px'
                            px='10'
                            py='10'
                            aria-label='play video' icon={<FaPlay />}>

                        </IconButton> */}
                    </Box>
                </Flex>
                <Stack
                    flex={1}
                    spacing={10}
                    mt='110px'
                >
                    <Heading
                        as='h2'
                        fontSize='50px'
                        lineHeight='70px'
                        fontWeight='bold'
                        color='gray.400'
                        maxW='780px'
                    >
                        Hãy Cùng Khám Phá Cảnh Đẹp trên Đảo Hòn Tằm
                    </Heading>
                    <Text
                        as='p'
                        fontSize='xl'
                        lineHeight='7'
                        color='gray.600'
                        maxW='780px'
                    >
                        Tổ hợp nghỉ dưỡng và tham quan của khu du lịch trên đảo Hòn Tằm đáp ứng nhu cầu của nhiều sở thích và mong muốn khác nhau của khách hàng trên khắp thế giới.
                    </Text>
                </Stack>
            </Flex>
        </Box>
    )
}
