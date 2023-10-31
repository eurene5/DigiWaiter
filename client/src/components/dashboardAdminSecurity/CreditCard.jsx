import React from "react";
import {Box, Grid, GridItem, Input, Icon, Text, Divider, Button} from "@chakra-ui/react";
import { BiBarChart } from "react-icons/bi";

const CreditCard = () =>{
    return(
        <Box m="10px 0px 0px 40px" w="40%">
            <Text fontWeight="semibold" color="#394D5F"><Icon as={BiBarChart}/> Carte Bancaire</Text>
            <Divider w="full" mb="15px"/>
            <Grid 
                templateColumns='repeat(2, 1fr)'
                spacing={3}
            >
                    <GridItem>
                        <Input backgroundColor="#e1e1e1" placeholder="Carte bancaire"/>
                    </GridItem>
                    <GridItem>
                        <Button ml="15px" w="70%" backgroundColor="#394d5f" color="white">Modifier</Button>
                    </GridItem>
            </Grid>
        </Box>
    )
}

export default CreditCard