import React from 'react'
import {Card, CardHeader, CardBody, CardFooter,Divider , Text, Image, Link} from '@chakra-ui/react'

export const RestaurantCard = ({href, name, src, note, description})=>{
    return(
        <Link href={href} justifyContent="center">
            <Card maxW='250px' borderRadius="10px">
                <CardHeader>
                    <Image
                    src={src}
                    alt={name}
                    borderRadius='lg'
                    />
                </CardHeader>
                <Divider opacity="20%" />
                <CardBody
                    display={{ base: 'flex', md: 'none' }}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text fontWeight="bold" fontSize="13px">
                        {name}
                    </Text>
                    <Text fontWeight="regular" fontSize='13px'>
                        {note}  
                    </Text>
                </CardBody>
                <CardFooter mt="-35px">
                    <Text fontSize="xs" color="green.600">
                        {/* {description} */}
                        Pizza - Tacos - Snack Ammericaine
                    </Text>
                </CardFooter>
            </Card>
        </Link>
    )
}