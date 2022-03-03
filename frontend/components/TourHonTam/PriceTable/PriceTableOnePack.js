import { Box, Container, Grid, Stack } from '@chakra-ui/react'
import React from 'react'
import Accord from './Accord'
import CallBox from './CallBox'
import Header from './Header'
import MultiPacks from './MultiPacks'
import OnePack from './OnePack'

export default function PriceTableOnePack({ title, description, price, childPrice, oldPrice, phone1, phone2, zalo, note }) {
  return (
    <>
      <Header
        title={title}
        description={description}
      />
      <OnePack 
        price={price}
        childPrice={childPrice}
        oldPrice={oldPrice}
      />
      {/* <MultiPacks /> */}
      <Box
        mt='80px'
      >
        <Container maxW='container.xl'>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            gap={20}
            w='100%'
          >
            <Accord
              data={note}
            />
            <CallBox 
              phone1={phone1}
              phone2={phone2}
              zalo={zalo}
            />
          </Grid>
        </Container>

      </Box>
    </>
  )
}
