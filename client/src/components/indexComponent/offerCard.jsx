import React from 'react'
import {Card, Image, Link} from '@chakra-ui/react'

export const OfferCard =({src, href, name}) =>{
    return(
        <Link href={href} justifyContent="center" alignItems="center">
            <Card maxW='180px' h="120px" borderRadius="10px">
                <Image
                    w="auto"
                    src={src}
                    alt={name}
                    borderRadius='lg'
                />
            </Card>
        </Link>
    )
}