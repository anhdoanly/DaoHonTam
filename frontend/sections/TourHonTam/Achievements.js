import { Box, Container, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function Achievements({ data }) {
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
                bgColor: 'rgba(0,0,0,0.5)',
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
                    {
                        data.map((item, index) => {
                            return (
                                <Stack
                                    spacing={4}
                                    maxW='460px'
                                    alignItems='center'
                                    key={index}
                                >
                                    <Icon as={item.icon} w='70px' h='70px' />
                                    <CountUp end={item.number} duration={2}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <Text
                                                    fontSize='4xl'
                                                    fontWeight='bold'
                                                    ref={countUpRef}
                                                />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                    <Text
                                        fontSize='2xl'
                                        fontWeight='normal'
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        fontSize='16px'
                                        fontWeight='normal'
                                    >
                                        {item.description}
                                    </Text>
                                </Stack>
                            )
                        })
                    }
                    {/* <Stack
                        spacing={4}
                        maxW='460px'
                        alignItems='center'
                    >
                        <Icon as={FiUserPlus} w='70px' h='70px' />
                        <CountUp end={3579} duration={2}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <Text
                                        fontSize='4xl'
                                        fontWeight='bold'
                                        ref={countUpRef}
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <Text
                            fontSize='2xl'
                            fontWeight='normal'
                        >
                            Kh??ch h??ng m???i
                        </Text>
                        <Text
                            fontSize='16px'
                            fontWeight='normal'
                        >
                            M?? t??? th??ng tin c?? gi?? tr???, nh???ng ??i???m n???i b???t, l???i gi???i thi???u h???p d???n v??? s???n ph???m d???ch v???, gi??p ng?????i xem d??? d??ng t??m th???y n???i dung.
                        </Text>
                    </Stack>

                    <Stack
                        spacing={4}
                        maxW='460px'
                        alignItems='center'
                    >
                        <Icon as={HiShieldCheck} w='70px' h='70px' />
                        <CountUp end={461} duration={2}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <Text
                                        fontSize='4xl'
                                        fontWeight='bold'
                                        ref={countUpRef}
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        
                        <Text
                            fontSize='2xl'
                            fontWeight='normal'
                        >
                            Tour ho??n th??nh
                        </Text>
                        <Text
                            fontSize='16px'
                            fontWeight='normal'
                        >
                            M?? t??? th??ng tin c?? gi?? tr???, nh???ng ??i???m n???i b???t, l???i gi???i thi???u h???p d???n v??? s???n ph???m d???ch v???, gi??p ng?????i xem d??? d??ng t??m th???y n???i dung.
                        </Text>
                    </Stack>

                    <Stack
                        spacing={4}
                        maxW='460px'
                        alignItems='center'
                    >
                        <Icon as={FaAward} w='70px' h='70px' />
                        <CountUp end={1684} duration={2}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <Text
                                        fontSize='4xl'
                                        fontWeight='bold'
                                        ref={countUpRef}
                                    />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        
                        <Text
                            fontSize='2xl'
                            fontWeight='normal'
                        >
                            L?????t th??ch
                        </Text>
                        <Text
                            fontSize='16px'
                            fontWeight='normal'
                        >
                            M?? t??? th??ng tin c?? gi?? tr???, nh???ng ??i???m n???i b???t, l???i gi???i thi???u h???p d???n v??? s???n ph???m d???ch v???, gi??p ng?????i xem d??? d??ng t??m th???y n???i dung.
                        </Text>
                    </Stack> */}
                </Stack>
            </Container>
        </Box>
    )
}
