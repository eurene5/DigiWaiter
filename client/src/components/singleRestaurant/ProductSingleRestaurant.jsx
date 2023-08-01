import { Box, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ProductSingleRestaurant = ({onClick, image, name, description, price}) => {
  return(
    <Box mb='10px'>
        <Card
            direction='row'
            overflow='hidden'
            variant='outline'
            maxH='100px'
            bg='#F5F5F5'
            borderColor='#D9D9D9'
            onClick={onClick}
        >
            <Stack>
                <CardBody textAlign='start' pt='12px' ps='8px' pb='10px'>
                    <Heading fontSize='15px' color='#000000B2' mb='4px'>{name}</Heading>
                    <Text color='#00000099' fontSize='12px'>
                        {description}
                    </Text>
                    <Text color='#394D5F' fontSize='12px' fontWeight='bold' mt='5px'>{price} Ar</Text>
                </CardBody>

            </Stack>
            
            <Image 
                objectFit='cover'
                maxW='125px'
                src={`/./upload/${image}`}
            />
        </Card>
    </Box>
  )
};

export default ProductSingleRestaurant;
