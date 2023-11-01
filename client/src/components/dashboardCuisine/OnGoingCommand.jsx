import React from "react";
import {Box,  Grid, GridItem, Text, Checkbox} from "@chakra-ui/react"


const CommandListsOnTable =  ({tableNumber, commandId, data}) =>{
    return(
        <Box paddingTop="20px" w="full">
            <Box 
                w="full"
                h="50px"
                backgroundColor="#394D5F"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderTopLeftRadius="5px"
                borderTopRightRadius="5px"
            >
                {/* <Text color="#fff" fontWeight="bold">{tableNumber} - {commandId}</Text> */}
                <Text color="#fff" fontWeight="bold">Table 6 - 1526624</Text>
            </Box>
            <Box paddingTop="10px" w="full">
                {/* Ligne pour afficher les commandes dans une Table */}
                <Grid 
                    backgroundColor="#D9D9D9" 
                    h="50px"
                    display="flex"
                    alignItems="center" 
                    templateColumns='repeat(3, 1fr)' 
                    gap={4}>
                    <GridItem display="flex" justifyContent="center" colSpan="1" w="full"><Text fontWeight="semibold">Tacos Kebab</Text></GridItem>
                    <GridItem display="flex" justifyContent="center" colSpan="1" w="full">x2</GridItem>
                    <GridItem display="flex" justifyContent="center" colSpan="1" w="full">
                        <Checkbox size="lg" backgroundColor="#394D5F" colorScheme="white" defaultChecked/>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

const OnGoingCommand = () => {
    return(
        <Box w="90%">
            <Box 
                w="full" 
                h="50px" 
                backgroundColor="#3FCB80"
                display="flex"
                justifyContent="center"
                alignItems="center"    
            >
                <Text color="white" fontWeight="bold">Commandes en cours de préparation</Text>
            </Box>
            <CommandListsOnTable/>
        </Box>
    )    
}

export default OnGoingCommand