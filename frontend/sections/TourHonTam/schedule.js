import { Box, Container, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function Schedule({ title, detail }) {
    return (
        <Box
            as='section'
            id='lichtrinh'
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
                    {title}
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
                    {
                        detail.map((item, index) => {
                            return (
                                <React.Fragment
                                    key={index}
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
                                            {item.number}
                                        </Box>
                                        {item.time}
                                    </Box>
                                    <Text
                                        as='p'
                                        fontSize='md'
                                        fontWeight='normal'
                                        color='gray.700'
                                        mb='80px'
                                    >
                                        {
                                            item.description.split("\n").map((itemDescription, key) => {
                                                return (
                                                    <Text as='span' key={key}>{itemDescription}<br /></Text>
                                                )
                                            })
                                        }
                                        {/* {
                                            item.list && (
                                                <UnorderedList>
                                                    {
                                                        item.list.map((itemList, key) => {
                                                            return (
                                                                <ListItem key={key}>
                                                                    {itemList}
                                                                </ListItem>
                                                            )
                                                        })
                                                    }
                                                </UnorderedList>
                                            )
                                        } */}
                                    </Text>
                                </React.Fragment>
                            )
                        })
                    }
                    {/* <Box
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
                        Xe v?? h?????ng d???n vi??n Nha Trang Today ????n kh??ch t???i ??i???m h???n. ??o??n di chuy???n xu???ng c???ng Du L???ch Nha Trang V??nh Tr?????ng - tham quan V???nh Nha Trang.
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
                            Cano di chuy???n ch??? du kh??ch ?????n v???i ?????o H??n T???m. ?????n ????y du kh??ch s??? nh???n ???????c ????? t???m, kh??n cho m??nh.
                            <br />
                            <br />
                            Sau ???? du kh??ch s??? ???????c xe ??i???n ch??? ?????n v???i khu t???m b??n v?? h??? b??i v?? c???c. b???n s??? tr???i nghi???m c??c d???ch v??? t???i ????y. Qu?? kh??ch ngh??? ng??i v?? th?? gi??n t???i Khu t???m b??n H??n T???m, ?????t ti??u chu???n 4 sao.
                            <br />
                            <br />
                            V???i c??c d???ch v??? v?? ti???n ??ch cao c???p nh??:
                        </Text>

                        <UnorderedList>
                            <ListItem>Mi???n ph?? s??? d???ng kh??n, ????? t???m, t??? g???i ?????</ListItem>
                            <ListItem>Qu?? kh??ch ngh??? ng??i t???i ch??i l?? ,d?? n???m, gh??? l???u</ListItem>
                            <ListItem>T???m kho??ng thu??? l???c</ListItem>
                            <ListItem>Ng??m b???n b??n n??ng ho???c b???n th???o d?????c trong v??ng 30 ph??t</ListItem>
                            <ListItem>Massage to??n th??n b???ng h??? th???ng ??n tuy???n thu??? li???u ph??p</ListItem>
                            <ListItem>T??? do th??? m??nh trong h??? b??i v?? c???c r???ng 1350m2 & h??? Jacuzzi v???i v??? tr?? cao nh???t khu resort</ListItem>
                            <ListItem>Tr???i nghi???m t???m th??c.</ListItem>
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
                        ??n tr??a, ngh??? ng??i t???i nh?? h??ng H???n Vi???t
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
                        Kh??ch t??? do ngh??? ng??i, tham quan ch???p ???nh v?? t???m h??? b??i vo c???c tho???i m??i. Sau ???? xe ??i???n ch??? b???n l???i qu???y nh???n ????? v?? l???y ?????.
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
                        Qu?? kh??ch r???i V???nh Nha Trang. HDV ch??o t???m bi???t qu?? kh??ch v?? tr??? v??? ??i???m h???n.
                    </Text> */}
                </Box>
            </Container>
        </Box>
    )
}
