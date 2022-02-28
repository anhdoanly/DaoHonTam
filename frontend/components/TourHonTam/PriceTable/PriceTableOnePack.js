import { Box, Container, Grid, Stack } from '@chakra-ui/react'
import React from 'react'
import Accord from './Accord'
import CallBox from './CallBox'
import Header from './Header'
import MultiPacks from './MultiPacks'
import OnePack from './OnePack'

export default function PriceTableOnePack() {
  return (
    <>
      <Header />
      <OnePack />
      <MultiPacks />
      <Box
        mt='80px'
      >
        <Container maxW='container.xl'>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            gap={20}
            w='100%'
          >
            <Accord />
            <CallBox />
          </Grid>
        </Container>

      </Box>
    </>
  )
}
