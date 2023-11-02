import { Box, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const Header = () =>{
    const router = useRouter()
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
            <Link h="full" w="auto" onClick={() => router.push('/accueil')}><Image alt="" h="full" w="auto" src="/./assets/indexImages/logo-accueil.png"></Image></Link>
            <Image h='full' w='auto' src="/./assets/indexImages/ispm2.png" alt=''></Image>
        </Box>
    )
}
