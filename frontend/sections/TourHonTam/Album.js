import { Box, Container, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

export default function Album({ before, after }) {
    return (
        <Box

            as="section"
            mt='80px'
            bgImage={`url('/images/bg-album.jpg')`}
            bgSize='cover'
            bgRepeat='no-repeat'
            bgPosition='center'
            pt='120px'
            pb={['120px', '40px']}
            position='relative'
            zIndex='1'
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '2',
                top: '0',
                left: '0',
                w: '100%',
                h: '100%',
                bg: 'rgba(0,0,0,0.3)',
            }}
        >
            <Container maxW='container.xl' position='relative' zIndex='3'>

                <Grid
                    templateColumns='repeat(3, 1fr)'
                    gap={['4', '6']}
                    w='90%'
                >
                    {
                        before.map((item, index) => {
                            return (
                                <GridItem
                                    w={['90px', '320px']}
                                    key={index}
                                >
                                    <Image
                                        src={item.src}
                                        boxSize={['90px', '320px']}
                                        objectFit={'cover'}
                                        borderRadius='20px'
                                        boxShadow='0px 4px 15px rgba(255, 255, 255, 0.25)'
                                    />
                                </GridItem>
                            )
                        })
                    }
                    {/* <GridItem
                        w={['90px', '320px']}
                    >
                        <Image
                            src='/images/album-1.jpg'
                            boxSize={['90px', '320px']}
                            objectFit={'cover'}
                            borderRadius='20px'
                            boxShadow='0px 4px 15px rgba(255, 255, 255, 0.25)'
                        />
                    </GridItem>

                    <GridItem
                        w={['90px', '320px']}
                    >
                        <Image
                            src='/images/album-2.jpg'
                            boxSize={['90px', '320px']}
                            objectFit={'cover'}
                            borderRadius='20px'
                            boxShadow='0px 4px 15px rgba(255, 255, 255, 0.25)'
                        />
                    </GridItem>

                    <GridItem
                        w={['90px', '320px']}
                    >
                        <Image
                            src='/images/album-3.jpg'
                            boxSize={['90px', '320px']}
                            objectFit={'cover'}
                            borderRadius='20px'
                            boxShadow='0px 4px 15px rgba(255, 255, 255, 0.25)'
                        />
                    </GridItem> */}
                </Grid>

                <Grid
                    templateColumns='repeat(3, 1fr)'
                    gap={['4', '6']}
                    position='relative'
                    top={['6', '-100px']}
                    justifyItems='right'
                    w='90%'
                    mr='0'
                    ml='auto'
                >
                    {
                        after.map((item, index) => {
                            return (
                                <GridItem
                                    w={['90px', '320px']}
                                    key={index}
                                >
                                    <Image
                                        src={item.src}
                                        boxSize={['90px', '320px']}
                                        objectFit={'cover'}
                                        borderRadius='20px'
                                        boxShadow='0px 4px 15px rgba(255, 255, 255, 0.25)'
                                    />
                                </GridItem>
                            )
                        })
                    }
                    {/* <GridItem
                        w={['90px', '320px']}
                    >
                        <Image
                            src='/images/album-4.jpg'
                            boxSize={['90px', '320px']}
                            objectFit={'cover'}
                            borderRadius='20px'
                            boxShadow='0px 4px 15px rgba(255, 255, 255, 0.25)'
                        />
                    </GridItem>

                    <GridItem
                        w={['90px', '320px']}
                    >
                        <Image
                            src='/images/album-5.jpg'
                            boxSize={['90px', '320px']}
                            objectFit={'cover'}
                            borderRadius='20px'
                            boxShadow='0px 4px 15px rgba(255, 255, 255, 0.25)'
                        />
                    </GridItem>

                    <GridItem
                        w={['90px', '320px']}
                    >
                        <Image
                            src='/images/album-6.jpg'
                            boxSize={['90px', '320px']}
                            objectFit={'cover'}
                            borderRadius='20px'
                            boxShadow='0px 4px 15px rgba(255, 255, 255, 0.25)'
                        />
                    </GridItem> */}
                </Grid>
            </Container>

        </Box>
    )
}
