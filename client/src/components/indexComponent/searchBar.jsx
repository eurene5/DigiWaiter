import React from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {SearchIcon} from '@chakra-ui/icons'

const Search = () =>{
    <InputGroup>
        <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300'/>
        </InputLeftElement>
        <Input     
            type="text"
            focusBorderColor='green.400'
            placeholder='Rechercher un restaurant' 
            size="sm"
        />
    </InputGroup>
}

export const Searchbar =() =>{
    <Box>
        <Search/>
    </Box>
}