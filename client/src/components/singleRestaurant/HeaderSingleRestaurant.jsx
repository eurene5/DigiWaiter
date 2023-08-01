import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { Box, Heading } from "@chakra-ui/react";

const HeaderSingleRestaurant = ({currentPage, imageRestaurant}) => {
    return (
        <header>
            <Box
                w='100%'
                h='125px'
                backgroundImage={`url('${imageRestaurant}')`}
                backgroundSize='cover'
            >
                <Link href='/' position='absolute' left='12px' top='' className='absolute left-3 top-3'>
                    <Image alt='Back-Icon' width={40} height={40} src='/./btn-quit.svg' />
                </Link>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                py='12px'
                borderTop='1px solid #D9D9D9'
            >
                <Heading 
                    as='h4'
                    fontWeight='bold'
                    fontSize='1rem'
                    lineHeight='1.5rem'
                >
                    {currentPage}
                </Heading>
            </Box>
        </header>
    )
};

export default HeaderSingleRestaurant;
