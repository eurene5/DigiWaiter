import { Box, Image, Link, Card, Heading } from "@chakra-ui/react";
import React from "react";

const MenuProductCard = ({src, name, onClick}) => {
    return(
        <Link onClick={onClick}>
            <Box w='175px' h='205px' m='12px' mb='25px'>
                <Card borderRadius="15px" border="0" padding='2px' >
                    <Image
                        alt=""
                        w='168px'
                        h='140px'
                        rounded='13px'
                        objectFit='contain'
                        overflow='hidden'
                        src={src} 
                    />
                </Card>
                <Heading mt="5px" px='10px' pb='10px' textAlign="center" fontWeight="semibold" opacity="65%" color='#000000B2' fontSize='14px'>{name}</Heading>
            </Box>
        </Link>
    )
}

export default MenuProductCard