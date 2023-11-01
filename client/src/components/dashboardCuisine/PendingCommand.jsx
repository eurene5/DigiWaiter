import React from "react";
import {Box,  Grid, GridItem, Text, Checkbox} from "@chakra-ui/react"


const PendingCommandList = ({datas}) =>{
    return(
        <Box 
            paddingTop="20px" 
            w="full" 
            backgroundColor="#e8e8e8"
            marginBottom="10px"
        >
            <Box 
                mx="auto"
                w="85%"
                h="50px"
                backgroundColor="#394D5F"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderTopRadius="5px"
            >
                {/* <Text color="#fff" fontWeight="bold">{tableNumber} - {commandId}</Text> */}
                <Text color="#fff" fontWeight="bold">Table 3 - 1589624</Text>
            </Box> 
            <Grid 
                mx="auto"
                w="85%" 
                templateColumns='repeat(2, 1fr)'
                backgroundColor="#D9d9d9"
                borderBottomRadius="5px"
            >
                <GridItem ml="15px"><Text fontWeight="semibold"> Tacos Kebab </Text></GridItem>
                <GridItem display="flex" justifyContent="end" mr="25px"><Text fontWeight="bold">x 2</Text></GridItem>
            </Grid>
        </Box>
    )
}

const PendingCommand = () =>{
    return(
        <Box w="90%" h="auto">
            <Box 
                w="full" 
                h="50px" 
                backgroundColor="#3FCB80"
                display="flex"
                justifyContent="center"
                alignItems="center"    
            >
                <Text color="white" fontWeight="bold">Liste des commandes en attente</Text>
            </Box>
            <PendingCommandList />
        </Box>
    )
}

export default PendingCommand