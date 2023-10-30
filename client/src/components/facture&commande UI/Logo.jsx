import { Box } from "@chakra-ui/react";

export function Logo({url}){
    return(
        <Box height="80px" border="1px solid #D9D9D9" mb="20px" width="100%" display="flex" justifyContent="center" alignItems="center" >
            <Box as="img" src={url} height="100%" objectFit="cover"></Box>
        </Box>
    )
}