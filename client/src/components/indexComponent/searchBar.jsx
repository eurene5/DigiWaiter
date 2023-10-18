import React from "react";
import { Image, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

export const SearchBar = () =>{
    return (
        <InputGroup mb='20px'>
            <InputLeftElement pointerEvents='none'>
                <Image src='/./icon _magnifying glass_.svg' width='17px' height='17px' />
            </InputLeftElement>
            <Input type='search' placeholder='Rechercher un plat'/>
        </InputGroup>
    )  
}

