import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Boissons = ({src, price, name, onClick}) => {
  return(
    <Box w='130px' h='170px' m='12px' mb='45px'>
        <Card onClick={onClick}>
            <Image
                maxW='130px'
                h='128px'
                objectFit='contain'
                overflow='hidden'
                src={src}
            />
            <CardBody px='10px' pb='10px'>
                <Heading fontWeight='regular' color='#000000B2' fontSize='14px'>{name}</Heading>
                <Text fontWeight='bold' color='#394D5F' fontSize='14px' >{price} Ar</Text>
            </CardBody>
        </Card>
    </Box>
  )
};

export default Boissons;
