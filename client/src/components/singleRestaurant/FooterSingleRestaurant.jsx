import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Link from 'next/link'

const FooterSingleRestaurant = () => {
  return(
    <Box
        as='footer'
        position='fixed'
        bottom={0}
        bgColor='#394D5F'
        w='100%'
        h='60px'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        px='25px'
        m={0}
    >
        <Link href='/'>
            <Image w='34px' h='34px' src="/./icon _home_.svg"/>
        </Link>
        <Link href='/'>
            <Image w='34px' h='34px' src="icon _amarok cart view_.svg"/>
        </Link>
        <Link href='/'>
            <Image w='34px' h='34px' src="icon _bills_.svg"/>
        </Link>
    </Box>
  )
};

export default FooterSingleRestaurant;
