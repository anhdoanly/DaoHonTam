import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import FoodMenu from '../../components/TourHonTam/FoodMenu'
import FormContact from '../../components/TourHonTam/formContact'

export default function MenuWithForm({ title, description, price, menu, phone }) {
    return (
        <Box
            as='section'
            id='thucdon'
            mt='80px'
        >
            <Container maxW='container.xl'>
                <Grid
                    templateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']}
                    gap={14}
                >
                    <GridItem>
                        <FoodMenu
                            title={title}
                            description={description}
                            price={price}
                            menu={menu}
                        />
                    </GridItem>
                    <GridItem>
                        <FormContact data={phone} />
                    </GridItem>
                </Grid>

            </Container>
        </Box>
    )
}
