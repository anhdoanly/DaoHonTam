import { Box, Container, Grid } from '@chakra-ui/react'
import React from 'react'
import Accord from './Accord'
import CallBox from './CallBox'
import Header from './Header'
import MultiPacks from './MultiPacks'

export default function PriceTableMultiPack({ title, description, priceList, phone1, phone2, zalo, note }) {
  return (
    <>
      <Header
        title={title}
        description={description}
      />
      {/* <OnePack 
        price={price}
        childPrice={childPrice}
        oldPrice={oldPrice}
      /> */}
      <MultiPacks 
        data={priceList}
        phone={phone1}
      />
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
