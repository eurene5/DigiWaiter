import React from "react";
import {Box, Grid, GridItem} from "@chakra-ui/react"
import OnGoingCommand from "@/components/dashboardCuisine/OnGoingCommand";
import PendingCommand from "@/components/dashboardCuisine/PendingCommand";
import AsideDashboard from "@/components/dashboard/AsideDashboard";
const dashboardCuisine = () => {
    return(
        <Box display="flex">
            <AsideDashboard/>
            <Grid w="full" templateColumns='repeat(3, 1fr)' gap={6}>
                <GridItem margin="40px 0px 0px 40px" colSpan={2} w='100%'>
                    <OnGoingCommand/>
                    {/* {datas?.map(data => {
                        return (
                            <OnGoingCommand data={data}/>
                        )
                    })} */}
                </GridItem>
                <GridItem margin="40px 20px 0px 0px" colSpan={1} w='100%'>
                    <PendingCommand/>
                    {/* {datas?.map(data => {
                        return (
                            <PendingCommand data={data}/>
                        )
                    })} */}
                    </GridItem>
            </Grid>
        </Box>
    )    
}

export default dashboardCuisine