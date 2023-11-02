import React from "react";
import Image from "next/image";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const HeaderSingleRestaurant = ({currentPage}) => {
    const route = useRouter()
    return (
        <header>
            <Box
                w='100%'
                h='125px'
                backgroundImage={`url('/./upload/${currentPage[0].medias}')`}
                backgroundSize='cover'
            >
                <Link onClick={() => route.back()} position='absolute' left='12px' top='' className='absolute left-3 top-3'>
                    <Image alt='Back-Icon' width={40} height={40} src='/./btn-quit.svg' />
                </Link>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                py='12px'
                borderTop='1px solid #D9D9D9'
                flexDir='column'
            >
                <Heading 
                    as='h4'
                    fontWeight='bold'
                    fontSize='1rem'
                    lineHeight='1.5rem'
                    opacity='0.8'
                    textAlign='center'
                >
                    {currentPage[0].name}
                </Heading>
                <Box my='10px' fontSize='12px' fontWeight='medium' opacity='0.8' display='flex' justifyContent='space-between' px='15px'>
                    <Box>
                        <Text>Ouverture : 09h30</Text>
                        <Text>Fermeture : 18h30</Text>
                    </Box>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Image src='/./icon _star_.svg' width='15' height='15' alt='' /> 
                            <Text ms='5px'>
                                - {currentPage[0].note} <Box as='span' color='#3FCB80' fontWeight='bold'>Excellent</Box>
                            </Text>
                        </Box>
                        <Text>Voir les avis sur Kebn&apos;Grill</Text>
                    </Box>
                </Box>
            </Box>
        </header>
    )
};

export default HeaderSingleRestaurant;
