import { AspectRatio, Box, Button, Flex, Heading, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function Video({ title, description, video, image1, image2 }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box
            position="relative"
            width="100%"
            top={['-150px', '-180px']}
        >
            <Flex
                direction={['column', 'row']}
            >
                <Flex
                    flex={1}
                    justify='start'
                >
                    <Box
                        w={['90%', '410px']}
                        h={['370px','465px']}
                        bgImage={`url('${image1}')`}
                        position={['relative', 'absolute']}
                        top={[ '0', '150px']}
                        left={[ '5', '0']}
                        bgSize='cover'
                        bgRepeat='no-repeat'
                        bgPosition='center'
                        boxShadow='2xl'
                    />
                    <Box
                        w='410px'
                        h='465px'
                        bgImage={`url('${image2}')`}
                        position="absolute"
                        top='0px'
                        left='200px'
                        bgSize='cover'
                        bgRepeat='no-repeat'
                        bgPosition='center'
                        boxShadow='2xl'
                        display={['none', 'none', 'none', 'block']}
                    />
                    <Box
                        position='absolute'
                        top={['150px', '110px']}
                        left={['35%', '550px']}
                        zIndex={2}
                    >
                        <Box
                            as='button'
                            bg='white'
                            borderRadius='50%'
                            boxShadow={'0px 4px 15px rgba(0, 107, 153, 0.25)'}
                            p='10'
                            aria-label='Play Video'
                            onClick={onOpen}
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
                    mt={['50px', '110px']}
                    px={['1rem', '0']}
                >
                    <Heading
                        as='h2'
                        fontSize='50px'
                        lineHeight='70px'
                        fontWeight='bold'
                        color='gray.400'
                        maxW='780px'
                    >
                        {title}
                    </Heading>
                    <Text
                        as='p'
                        fontSize='xl'
                        lineHeight='7'
                        color='gray.600'
                        maxW='780px'
                    >
                        {description}
                    </Text>
                </Stack>
            </Flex>

            <Modal closeOnOverlayClick={false} size='xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Video Đảo Hòn Tằm</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                title={title}
                                src={video}
                                allowFullScreen
                            />
                        </AspectRatio>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}
