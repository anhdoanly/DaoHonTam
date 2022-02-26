import React from 'react'
import {
    Box,
    Container,
    Flex,
    Text,
    Button,
    Stack,
    Link,
    useBreakpointValue,
} from '@chakra-ui/react';
import {
    PhoneIcon,
} from '@chakra-ui/icons';

export default function Navigation() {
    return (
        <Box
            as={'header'}
            zIndex={10}
            position={'relative'}
        >
            <Container maxW='container.xl'>
                <Flex
                    // bg={useColorModeValue('white', 'gray.800')}
                    color={'white'}
                    minH={'100px'}
                    py={{ base: 2 }}
                    px={0}
                    alignItems='center'
                // align={'center'}
                >
                    {/* <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex> */}
                    <Flex flex={{ base: 1 }} justify={'start'}>
                        <Text
                            textAlign={useBreakpointValue('left')}
                            color={'white'}
                            fontSize={{ base: '2xl', md: '3xl' }}
                            fontWeight={{ base: 'bold', md: 'bold' }}
                        >
                            Đảo Hòn Tằm
                        </Text>

                        {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex> */}
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 'auto' }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                        alignItems={'center'}
                    >
                        <Box as='nav' display={{ base: 'none', md: 'flex' }}>
                            <DesktopNav />
                        </Box>

                        <Button
                            // display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={{ base: 'sm', md: 'xl' }}
                            fontWeight={600}
                            color={'white'}
                            bg={'rgba(12,94,255,0.33)'}
                            href={'#'}
                            leftIcon={<PhoneIcon />}
                            _hover={{
                                bg: '#0C5EFF',
                            }}>
                            Gọi Ngay
                        </Button>
                    </Stack>
                </Flex>
                {/* <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse> */}
            </Container>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = 'white';
    const linkHoverColor = 'cyan.400';

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Link
                        p={2}
                        href={navItem.href ?? '#'}
                        fontSize={'xl'}
                        fontWeight={'semibold'}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}>
                        {navItem.label}
                    </Link>
                </Box>
            ))}
        </Stack>
    );
};

const NAV_ITEMS = [
    {
      label: 'Giới thiệu',
      href: '#gioithieu',
    },
    {
      label: 'Lịch trình',
      href: '#lichtrinh',
    },
    {
      label: 'Bảng giá',
      href: '#banggia',
    },
    {
      label: 'Thực đơn',
      href: '#thucdon',
    },
  ];