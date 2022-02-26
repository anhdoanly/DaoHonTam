import { Box, Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function Schedule() {
    return (
        <Box
            mt='80px'
        >
            <Container maxW='container.xl'>
                <Heading
                    as='h2'
                    fontSize='5xl'
                    fontWeight='bold'
                    color='gray.600'
                    mb='40px'
                    textAlign='center'
                    textTransform='uppercase'
                >
                    Lịch trình
                </Heading>

                <Box
                    pl='130px'
                    position='relative'
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '45px',
                        width: '1px',
                        height: '100%',
                        borderRightWidth: '1px',
                        borderStyle: 'dashed',
                        borderColor: 'cyan.400',
                    }}
                >
                    <Box
                        position='relative'
                        as='p'
                        fontSize='2xl'
                        fontWeight='bold'
                        color='gray.900'
                        mb='20px'
                        pt='25px'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            left: '-128px',
                            bg: 'white',
                            w: '90px',
                            h: '90px',
                            borderRadius: '50%',
                            borderStyle: 'dashed',
                            borderColor: 'cyan.400',
                            borderWidth: '1px',
                        }}
                    >
                        <Box
                            as='span'
                            position='absolute'
                            top='5px'
                            left='-121px'
                            bg='cyan.400'
                            color='white'
                            borderRadius='50%'
                            w='76px'
                            h='76px'
                            textAlign='center'
                            lineHeight='76px'
                        >
                            1
                        </Box>
                        08h00 - 09h00
                    </Box>
                    <Text
                        as='p'
                        fontSize='md'
                        fontWeight='normal'
                        color='gray.700'
                        mb='80px'
                    >
                        Xe và hướng dẫn viên Nha Trang Today đón khách tại điểm hẹn. Đoàn di chuyển xuống cảng Du Lịch Nha Trang Vĩnh Trường - tham quan Vịnh Nha Trang.
                    </Text>

                    <Box
                        position='relative'
                        as='p'
                        fontSize='2xl'
                        fontWeight='bold'
                        color='gray.900'
                        mb='20px'
                        pt='25px'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            left: '-128px',
                            bg: 'white',
                            w: '90px',
                            h: '90px',
                            borderRadius: '50%',
                            borderStyle: 'dashed',
                            borderColor: 'cyan.400',
                            borderWidth: '1px',
                        }}
                    >
                        <Box
                            as='span'
                            position='absolute'
                            top='5px'
                            left='-121px'
                            bg='cyan.400'
                            color='white'
                            borderRadius='50%'
                            w='76px'
                            h='76px'
                            textAlign='center'
                            lineHeight='76px'
                        >
                            2
                        </Box>
                        09h00 - 11h30
                    </Box>
                    <Text
                        as='div'
                        fontSize='md'
                        fontWeight='normal'
                        color='gray.700'
                        mb='80px'
                    >
                        <Text
                            mb='4'
                        >
                        Cano di chuyển chở du khách đến với đảo Hòn Tằm. Đến đây du khách sẽ nhận được đồ tắm, khăn cho mình.
                        <br />
                        <br />
                        Sau đó du khách sẽ được xe điện chở đến với khu tắm bùn và hồ bơi vô cực. bạn sẽ trải nghiệm các dịch vụ tại đây. Quý khách nghỉ ngơi và thư giãn tại Khu tắm bùn Hòn Tằm, đạt tiêu chuẩn 4 sao.
                        <br />
                        <br />
                        Với các dịch vụ và tiện ích cao cấp như:
                        </Text>
                        
                        <UnorderedList>
                            <ListItem>Miễn phí sử dụng khăn, đồ tắm, tủ gửi đồ</ListItem>
                            <ListItem>Quý khách nghỉ ngơi tại chòi lá ,dù nệm, ghế lều</ListItem>
                            <ListItem>Tắm khoáng thuỷ lực</ListItem>
                            <ListItem>Ngâm bồn bùn nóng hoặc bồn thảo dược trong vòng 30 phút</ListItem>
                            <ListItem>Massage toàn thân bằng hệ thống ôn tuyền thuỷ liệu pháp</ListItem>
                            <ListItem>Tự do thả mình trong hồ bơi vô cực rộng 1350m2 & hồ Jacuzzi với vị trí cao nhất khu resort</ListItem>
                            <ListItem>Trải nghiệm tắm thác.</ListItem>
                        </UnorderedList>
                    </Text>

                    <Box
                        position='relative'
                        as='p'
                        fontSize='2xl'
                        fontWeight='bold'
                        color='gray.900'
                        mb='20px'
                        pt='25px'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            left: '-128px',
                            bg: 'white',
                            w: '90px',
                            h: '90px',
                            borderRadius: '50%',
                            borderStyle: 'dashed',
                            borderColor: 'cyan.400',
                            borderWidth: '1px',
                        }}
                    >
                        <Box
                            as='span'
                            position='absolute'
                            top='5px'
                            left='-121px'
                            bg='cyan.400'
                            color='white'
                            borderRadius='50%'
                            w='76px'
                            h='76px'
                            textAlign='center'
                            lineHeight='76px'
                        >
                            3
                        </Box>
                        11h30 - 14h00
                    </Box>
                    <Text
                        as='p'
                        fontSize='md'
                        fontWeight='normal'
                        color='gray.700'
                        mb='80px'
                    >
                        Ăn trưa, nghỉ ngơi tại nhà hàng Hồn Việt
                    </Text>

                    <Box
                        position='relative'
                        as='p'
                        fontSize='2xl'
                        fontWeight='bold'
                        color='gray.900'
                        mb='20px'
                        pt='25px'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            left: '-128px',
                            bg: 'white',
                            w: '90px',
                            h: '90px',
                            borderRadius: '50%',
                            borderStyle: 'dashed',
                            borderColor: 'cyan.400',
                            borderWidth: '1px',
                        }}
                    >
                        <Box
                            as='span'
                            position='absolute'
                            top='5px'
                            left='-121px'
                            bg='cyan.400'
                            color='white'
                            borderRadius='50%'
                            w='76px'
                            h='76px'
                            textAlign='center'
                            lineHeight='76px'
                        >
                            4
                        </Box>
                        14h00 - 15h30
                    </Box>
                    <Text
                        as='p'
                        fontSize='md'
                        fontWeight='normal'
                        color='gray.700'
                        mb='80px'
                    >
                        Khách tự do nghỉ ngơi, tham quan chụp ảnh và tắm hồ bơi vo cực thoải mái. Sau đó xe điện chở bạn lại quầy nhận đồ và lấy đồ.
                    </Text>

                    <Box
                        position='relative'
                        as='p'
                        fontSize='2xl'
                        fontWeight='bold'
                        color='gray.900'
                        mb='20px'
                        pt='25px'
                        _before={{
                            content: '""',
                            position: 'absolute',
                            top: '-2px',
                            left: '-128px',
                            bg: 'white',
                            w: '90px',
                            h: '90px',
                            borderRadius: '50%',
                            borderStyle: 'dashed',
                            borderColor: 'cyan.400',
                            borderWidth: '1px',
                        }}
                    >
                        <Box
                            as='span'
                            position='absolute'
                            top='5px'
                            left='-121px'
                            bg='cyan.400'
                            color='white'
                            borderRadius='50%'
                            w='76px'
                            h='76px'
                            textAlign='center'
                            lineHeight='76px'
                        >
                            5
                        </Box>
                        16h00
                    </Box>
                    <Text
                        as='p'
                        fontSize='md'
                        fontWeight='normal'
                        color='gray.700'
                        mb='80px'
                    >
                        Quý khách rời Vịnh Nha Trang. HDV chào tạm biệt quý khách và trả về điểm hẹn.
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
