import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useRouter } from 'next/router';


export const Footer =()=>{
    const router = useRouter();

    return (
        <Box 
            as='footer'
            position='fixed'
            bottom={0}
            bgColor='#394D5F'
            roundedTop="5px"
            mt='20px'
            w='100%'
            h='70px'
            px='20px'
            flexDirection="row"
            display='flex'
            alignItems='center'
            justifyContent='space-between'
        >
            <Image onClick={() => router.push('/accueil')} alt="" h="40px" width="40px" cursor="pointer" src="/./icon _home_.svg"></Image>
            <Image onClick={() => router.push('/')} alt="" h="40px" width="40px" cursor="pointer" src="/./icon _heart_.svg"></Image>
            <Image onClick={() => router.push('/')} alt="" h="50px" width="50px" cursor="pointer" src="/./icon _money cashier qr code_.svg"></Image>
            <Image onClick={() => router.push('/commande')} alt="" h="40px" width="40px" cursor="pointer" src="/./icon _cart_.svg"></Image>
            <Image onClick={() => router.push('/facture')} alt="" h="40px" width="40px" cursor="pointer" src="/./icon _bills_.svg"></Image>
        </Box>
    )
}