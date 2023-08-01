import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Footer =()=>{
    return (
        <Box 
            as='footer'
            position='fixed'
            bottom={0}
            bgColor='#394D5F'
            w='100%'
            h='60px'
            flexDirection="column"
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Image alt="" h="full" width="auto " src="/./assets/indexImages/ispm2.png"></Image>
            <Text fontSize="9px" color="#ffffff">© ISPM - Team X project</Text>
        </Box>
    )
}