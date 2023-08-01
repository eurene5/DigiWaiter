import { Box, Image, Link, Card, Heading, Button } from "@chakra-ui/react";
import React from "react";

export const RestaurantList = ({src, name, onClick}) => {
    return(
        <Button onClick={onClick}>
            <Box w='145px' h='170px' m='12px' mb='25px'>
                <Card borderRadius="15px">
                <Image
                    alt=""
                    maxW='145px'
                    h='140px'
                    objectFit='contain'
                    overflow='hidden'
                    src={src} 
                />
                </Card>
                <Heading mt="5px" px='10px' pb='10px' textAlign="center" fontWeight="semibold" opacity="65%" color='#000000B2' fontSize='14px'>{name}</Heading>
            </Box>
        </Button>
    )
  };