import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import FoodMenu from '../../components/TourHonTam/FoodMenu'
import FormContact from '../../components/TourHonTam/formContact'

export default function MenuWithForm() {
    return (
        <Box
            mt='80px'
        >
            <Container maxW='container.xl'>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    gap={14}
                >
                    <GridItem>
                        <FoodMenu />
                    </GridItem>
                    <GridItem>
                        <FormContact />
                    </GridItem>
                </Grid>

            </Container>
        </Box>
    )
}
