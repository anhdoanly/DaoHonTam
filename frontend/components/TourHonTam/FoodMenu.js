import { Box, Divider, Grid, GridItem, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ImSpoonKnife } from 'react-icons/im'

export default function FoodMenu() {
    return (
        <Box>
            <Heading
                as="h2"
                fontSize='5xl'
                fontWeight='bold'
                color='gray.600'
                mb='4'
                transform='uppercase'
            >
                Thực đơn của Tour
            </Heading>
            <Text
                fontSize='lg'
                fontWeight='normal'
                color='gray.600'
                mb='50px'
            >
                Thực đơn tour có thể thay đổi theo ngày/mùa
            </Text>
            <Grid
                templateColumns='repeat(2, 1fr)'
                gap={6}
            >
                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Salad dầu giấm
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Chả ram
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Tôm thẻ cháy tỏi
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Nghêu hấp
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Gà kho
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Rau xào tỏi
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Canh chua cá
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Cơm trắng
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem
                    w='100%'
                >
                    <Stack
                        spacing={4}
                        direction='row'
                        align='center'
                    >
                        <Icon as={ImSpoonKnife} w='25px' h='25px' color='cyan.400' />
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.700'
                        >
                            Trái cây + trà đá
                        </Text>
                    </Stack>
                </GridItem>
            </Grid>
            <Divider
                my={'40px'}
                borderColor='gray.400'
            />
            <Box>
                <Text
                    fontSize={'36px'}
                    fontWeight='light'
                    fontStyle='italic'
                    color='gray.700'
                    mb={'20px'}
                >
                    Từ
                </Text>
                <Stack
                    direction='row'
                    spacing={8}
                    align='center'
                >
                    <Text
                        fontSize='6xl'
                        fontWeight='semibold'
                        color='#288DFF'
                        lineHeight='1'
                    >
                        500.000đ
                    </Text>
                    <Box>
                        <Text
                            fontSize='2xl'
                            fontWeight='bold'
                            color='gray.800'
                        >
                            mỗi người
                        </Text>
                        <Text
                            fontSize='lg'
                            fontWeight='normal'
                            color='gray.500'
                        >
                            (đã bao gồm trọn gói)
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
