import { Icon, SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputRightElement, Box, Text } from '@chakra-ui/react'
import React from 'react'
import ListPlats from './ListPlats'
import { FaHeartbeat } from 'react-icons/fa'

const platsFavoris = [
    {name : "Tasty French Tacos", src : "/Rectangle 15.png"},
    {name : "Tasty French Tacos", src : "/Rectangle 15.png"},
    {name : "Tasty French Tacos", src : "/Rectangle 15.png"},
    {name : "Tasty French Tacos", src : "/Rectangle 15.png"},
    {name : "Tasty French Tacos", src : "/Rectangle 15.png"},
    {name : "Tasty French Tacos", src : "/Rectangle 15.png"},
]
const clients = [
    {name : "blackluster", commentaire : "J'ai vraiment adoré le Kebab au lait composé de séreal au coco ajouter de qlq fromage",note : 5},
    {name : "blackluster", commentaire : "J'ai vraiment adoré le Kebab au lait composé de séreal au coco ajouter de qlq fromage",note : 5},
    {name : "blackluster", commentaire : "J'ai vraiment adoré le Kebab au lait composé de séreal au coco ajouter de qlq fromage",note : 5},
    {name : "blackluster", commentaire : "J'ai vraiment adoré le Kebab au lait composé de séreal au coco ajouter de qlq fromage",note : 5},
    {name : "blackluster", commentaire : "J'ai vraiment adoré le Kebab au lait composé de séreal au coco ajouter de qlq fromage",note : 5},

]


const SearchBar = () => {
    const sxTextTitle = {
        display:"block",
        as:"h2",
        w:"auto",
        fontWeight:"600",
        _after : {
                display :"block",
                content : `" "`,
                h : "1px",
                w : "50%",
                bg:"#A0A0A0"
        }
    }
    return(
        <>
            <Flex justifyContent={"right"}>
            <InputGroup  w={"500px"}>
                <InputRightElement pointerEvents="">
                    <SearchIcon color='gray.400' />
                </InputRightElement>
                <Input type='Text' placeholder='Rechercher une commande' border={"2px solid #D9D9D9"} rounded='full'/>
            </InputGroup>
        </Flex>
        <Box mt={"10px"} >
            <Text 
                sx={sxTextTitle}
            >
                <Icon as = {FaHeartbeat} />
                Les plats le plus commandé par les clients
            </Text>
            <ListPlats plats={platsFavoris} />
        </Box>
        </>
        
    )
}

export default SearchBar