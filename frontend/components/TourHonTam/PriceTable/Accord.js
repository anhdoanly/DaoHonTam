import { Box, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'

export default function Accord() {
    return (
        <Box>
            <Accordion defaultIndex={[0]} allowToggle>
                <AccordionItem
                    mb='4'
                    border='none'
                    boxShadow='lg'
                    borderRadius='10px'
                >
                    <h2>
                        <AccordionButton
                            border='none'
                            bgColor='cyan.500'
                            color='white'
                            borderRadius='10px'
                            py='3'
                            _hover={{
                                bgColor: 'cyan.600',
                            }}
                            _focus={{
                                outline: 'none',
                            }}
                            _expanded={{
                                borderRadius: '10px 10px 0 0'
                            }}
                        >
                            <Box
                                flex='1'
                                textAlign='left'
                                fontSize='xl'
                                fontWeight='semibold'
                            >
                                Giá đã bao gồm
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        py={6}
                        fontSize='md'
                        fontWeight='400'
                        color='gray.600'
                    >
                        <UnorderedList
                            spacing={2}
                        >
                            <ListItem>Xe du lịch đưa đón</ListItem>
                            <ListItem>Ăn trưa</ListItem>
                            <ListItem>Cano cao tốc</ListItem>
                            <ListItem>Hướng dẫn viên chuyên nghiệp</ListItem>
                            <ListItem>Áo phao + Bảo hiểm</ListItem>
                            <ListItem>Vé Hòn Tằm tắm bùn</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                    mb='4'
                    border='none'
                    boxShadow='lg'
                    borderRadius='10px'
                >
                    <h2>
                        <AccordionButton
                            border='none'
                            bgColor='cyan.500'
                            color='white'
                            borderRadius='10px'
                            py='3'
                            _hover={{
                                bgColor: 'cyan.600',
                            }}
                            _focus={{
                                outline: 'none',
                            }}
                            _expanded={{
                                borderRadius: '10px 10px 0 0'
                            }}
                        >
                            <Box
                                flex='1'
                                textAlign='left'
                                fontSize='xl'
                                fontWeight='semibold'
                            >
                                Giá không bao gồm
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        py={6}
                        fontSize='md'
                        fontWeight='400'
                        color='gray.600'
                    >
                        <UnorderedList
                            spacing={2}
                        >
                            <ListItem>Xe du lịch đưa đón</ListItem>
                            <ListItem>Ăn trưa</ListItem>
                            <ListItem>Cano cao tốc</ListItem>
                            <ListItem>Hướng dẫn viên chuyên nghiệp</ListItem>
                            <ListItem>Áo phao + Bảo hiểm</ListItem>
                            <ListItem>Vé Hòn Tằm tắm bùn</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                    mb='4'
                    border='none'
                    boxShadow='lg'
                    borderRadius='10px'
                >
                    <h2>
                        <AccordionButton
                            border='none'
                            bgColor='cyan.500'
                            color='white'
                            borderRadius='10px'
                            py='3'
                            _hover={{
                                bgColor: 'cyan.600',
                            }}
                            _focus={{
                                outline: 'none',
                            }}
                            _expanded={{
                                borderRadius: '10px 10px 0 0'
                            }}
                        >
                            <Box
                                flex='1'
                                textAlign='left'
                                fontSize='xl'
                                fontWeight='semibold'
                            >
                                Quy định về giá trẻ em
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        py={6}
                        fontSize='md'
                        fontWeight='400'
                        color='gray.600'
                    >
                        <UnorderedList
                            spacing={2}
                        >
                            <ListItem>Xe du lịch đưa đón</ListItem>
                            <ListItem>Ăn trưa</ListItem>
                            <ListItem>Cano cao tốc</ListItem>
                            <ListItem>Hướng dẫn viên chuyên nghiệp</ListItem>
                            <ListItem>Áo phao + Bảo hiểm</ListItem>
                            <ListItem>Vé Hòn Tằm tắm bùn</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}
