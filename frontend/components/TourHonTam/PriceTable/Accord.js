import { Box, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'

export default function Accord({ data }) {
    return (
        <Box w='100%'>
            <Accordion defaultIndex={[0]} allowToggle>
                {
                    data.map((item, index) => {
                        return (
                            <AccordionItem
                                mb='4'
                                border='none'
                                boxShadow='lg'
                                borderRadius='10px'
                                key={index}
                            >
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
                                        {item.title}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel
                                    py={6}
                                    fontSize='md'
                                    fontWeight='400'
                                    color='gray.600'
                                >
                                    <UnorderedList
                                        spacing={2}
                                    >
                                        {
                                            item.description.list.map((itemList, key) => {
                                                return (
                                                    <ListItem key={key}>
                                                        {itemList}
                                                    </ListItem>
                                                )
                                            })
                                        }
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })
                }
                {/* <AccordionItem
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
                                Gi?? ???? bao g???m
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
                            <ListItem>Xe du l???ch ????a ????n</ListItem>
                            <ListItem>??n tr??a</ListItem>
                            <ListItem>Cano cao t???c</ListItem>
                            <ListItem>H?????ng d???n vi??n chuy??n nghi???p</ListItem>
                            <ListItem>??o phao + B???o hi???m</ListItem>
                            <ListItem>V?? H??n T???m t???m b??n</ListItem>
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
                                Gi?? kh??ng bao g???m
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
                            <ListItem>Xe du l???ch ????a ????n</ListItem>
                            <ListItem>??n tr??a</ListItem>
                            <ListItem>Cano cao t???c</ListItem>
                            <ListItem>H?????ng d???n vi??n chuy??n nghi???p</ListItem>
                            <ListItem>??o phao + B???o hi???m</ListItem>
                            <ListItem>V?? H??n T???m t???m b??n</ListItem>
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
                                Quy ?????nh v??? gi?? tr??? em
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
                            <ListItem>Xe du l???ch ????a ????n</ListItem>
                            <ListItem>??n tr??a</ListItem>
                            <ListItem>Cano cao t???c</ListItem>
                            <ListItem>H?????ng d???n vi??n chuy??n nghi???p</ListItem>
                            <ListItem>??o phao + B???o hi???m</ListItem>
                            <ListItem>V?? H??n T???m t???m b??n</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem> */}
            </Accordion>
        </Box>
    )
}
