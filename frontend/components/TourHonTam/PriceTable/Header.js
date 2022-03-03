import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header({ title, description }) {
    return (
        <Box>
            <Heading
                as='h2'
                fontSize='5xl'
                fontWeight='bold'
                color='gray.600'
                textAlign='center'
                transform='uppercase'
                lineHeight='1'
                mb='20px'
            >
                {title}
            </Heading>
            <Text
                as='p'
                fontSize='xl'
                fontWeight='normal'
                color='gray.600'
                textAlign='center'
                maxW='690px'
                mx='auto'
            >
                {description}
            </Text>
        </Box>
    )
}
