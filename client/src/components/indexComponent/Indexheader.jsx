import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";

export const Header = () =>{
    return(
        <Box
            as="header"
            width="100%"
            height="60px"
            bg="#394D5F"
            color="white"
            display={{ base: 'flex', md: 'none' }}
            alignItems="center"
            justifyContent="space-between"
            paddingX="30px"
        >
            <Link h="full" w="auto" href=""><Image alt="" h="full" w="auto" src="/./assets/indexImages/logo-accueil.png"></Image></Link>
            <Link href="/"><Image alt="" src="/./icon-bag.svg"></Image></Link> 
        </Box>
    )
}
