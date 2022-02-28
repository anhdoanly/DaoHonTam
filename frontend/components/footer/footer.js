import { Box, Button, Container, Flex, FormControl, Heading, Input, List, ListIcon, ListItem, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { IoLocationSharp, IoCall, IoMailSharp } from 'react-icons/io5'
import { BsClock } from 'react-icons/bs'

export default function Footer() {
  return (
    <Box
      as="footer"
      mt='80px'
      bgImage={`url('/images/bg-footer.jpg')`}
      bgSize='cover'
      bgRepeat='no-repeat'
      bgPosition='center'
      position='relative'
      py='80px'
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgGradient: 'linear(to-b, white, rgba(255,255,255,0.5))',
      }}
    >
      <Container
        maxW='container.xl'
        position='relative'
      >
        <Heading
          as="h2"
          fontSize='4xl'
          fontWeight='bold'
          color='gray.600'
          textAlign='center'
          mb='80px'
          textTransform='uppercase'
        >
          Liên hệ
          <Box
            as="span"
            fontSize='5xl'
            fontWeight='normal'
            display='block'
            mt='2'
          >
            Với chúng tôi
          </Box>
        </Heading>

        <Flex
          direction={['column', 'row']}
        >
          <Box>
            <Text
              as='h3'
              fontSize='xl'
              fontWeight='normal'
              color='gray.900'
              textTransform='uppercase'
            >
              Địa chỉ văn phòng
            </Text>
            <List
              mt='6'
              spacing={4}
              fontSize={['md', 'xl']}
              fontWeight='normal'
              color='gray.900'
            >
              <ListItem>
                <ListIcon as={IoLocationSharp} />
                Số 45b Vân Đồn - P. Phước Hòa - Nha Trang
              </ListItem>
              <ListItem>
                <ListIcon as={IoCall} />
                0938 511 948 - 0979 853 348
              </ListItem>
              <ListItem>
                <ListIcon as={IoMailSharp} />
                info@daohontam.com
              </ListItem>
            </List>
          </Box>
          <Box
            ml={['0', '100px']}
            mt={['50px', '0']}
          >
            <Text
              as='h3'
              fontSize='xl'
              fontWeight='normal'
              color='gray.900'
              textTransform='uppercase'
            >
              Thời gian làm việc
            </Text>
            <List
              mt='6'
              spacing={4}
              fontSize={['md', 'xl']}
              fontWeight='normal'
              color='gray.900'
            >
              <ListItem>
                <ListIcon as={BsClock} />
                Thứ 2 - Thứ 7: 7AM đến 6PM
              </ListItem>
              <ListItem>
                <ListIcon as={BsClock} />
                Chủ nhật: 8AM - 5PM
              </ListItem>
            </List>
          </Box>
          <Spacer />
          <Box
            width='300px'
            mt={['50px', '0']}
          >
            <Text
              as='h3'
              fontSize='xl'
              fontWeight='normal'
              color='gray.900'
              textTransform='uppercase'
            >
              Liên hệ
            </Text>
            <Box
              mt='6'
            >
              <FormControl
                mb='4'
              >
                <Input id='nameFooter' type='text' placeholder='Họ và tên'
                  bgColor='white'
                  borderRadius='none'
                />
              </FormControl>
              <FormControl
                mb='4'
              >
                <Input id='phoneFooter' type='text' placeholder='Nhập Số điện thoại'
                  bgColor='white'
                  borderRadius='none'
                />
              </FormControl>
              <FormControl
                mb='4'
              >
                <Input id='emailFooter' type='email' placeholder='Nhập email'
                  bgColor='white'
                  borderRadius='none'
                />
              </FormControl>
              <Button
                bgGradient='linear(to-r, #0096C6, #0CD3FF)'
                size='md'
                color='white'
                _hover={{ opacity: 0.8 }}
                _active={{ opacity: 0.8 }}
                _focus={{ outline: 'none' }}
              >Gửi đi</Button>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
