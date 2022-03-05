import { Box } from '@chakra-ui/react'
import React from 'react'
import PriceTableMultiPack from '../../components/TourHonTam/PriceTable/PriceTableMultiPack'
import PriceTableOnePack from '../../components/TourHonTam/PriceTable/PriceTableOnePack'

export default function PriceTable({ title, description, price, childPrice, oldPrice, phone1, phone2, zalo, note, packageNumber, priceList }) {
  return (
    <Box
      as='section'
      id='banggia'
      mt='80px'
    >
      {
        packageNumber === '1'
          ?
          (
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
          )
          :
          (
            <PriceTableMultiPack
              title={title}
              description={description}
              priceList={priceList}
              phone1={phone1}
              phone2={phone2}
              zalo={zalo}
              note={note}
            />
          )
      }

    </Box>
  )
}
