import { 
    Box, 
    Input, 
    InputGroup,
    InputRightElement,
    Icon
} 
from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () =>{
    return(
        <InputGroup 
            float="right" 
            marginTop="20px" 
            marginRight="40px"  
            marginBottom="20px"
            maxHeight="40px"
            borderRadius="50px"
            maxW="600px"
        
        >
            <Input  
                placeholder='Rechercher une commande' 
                pr="4.5rem"
                border="2px"
                borderRadius="50px"
                color="gray.400"
            />
            <InputRightElement>
                <Icon as={SearchIcon} color="gray.300"/>
            </InputRightElement>
        </InputGroup>
    )
}

export default SearchBar