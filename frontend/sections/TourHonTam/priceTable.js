import { Box } from '@chakra-ui/react'
import React from 'react'
import PriceTableOnePack from '../../components/TourHonTam/PriceTable/PriceTableOnePack'

export default function PriceTable({ title, description, price, childPrice, oldPrice, phone1, phone2, zalo, note }) {
  return (
    <Box
        mt='80px'
    >
        <PriceTableOnePack 
            title={title}
            description={description}
            price={price}
            childPrice={childPrice}
            oldPrice={oldPrice}
            phone1={phone1}
            phone2={phone2}
            zalo={zalo}
            note={note}
        />
    </Box>
  )
}
