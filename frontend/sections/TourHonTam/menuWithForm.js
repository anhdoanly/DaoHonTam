import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import FoodMenu from '../../components/TourHonTam/FoodMenu'
import FormContact from '../../components/TourHonTam/formContact'

export default function MenuWithForm({ title, description, menu }) {
    return (
        <Box
            as='section'
            id='thucdon'
            display={['none', 'none', 'none', 'block']}
            mt='80px'
        >
            <Container maxW='container.xl'>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    gap={14}
                >
                    <GridItem>
                        <FoodMenu
                            title={title}
                            description={description}
                            menu={menu}
                        />
                    </GridItem>
                    <GridItem>
                        <FormContact />
                    </GridItem>
                </Grid>

            </Container>
        </Box>
    )
}
