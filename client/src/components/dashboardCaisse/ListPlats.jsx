import React from 'react'
import { Flex, Image, Text, Box, HStack } from '@chakra-ui/react'

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


const ListPlats = () => {
    return(
        <HStack spacing='30px' mt={"30px"} justifyContent='space-between' flexWrap='wrap'>
            {platsFavoris.map((plat, key)=>{
                if(platsFavoris.indexOf(plat)<4)
                    return(
                        <Box borderRadius={"5px"} w={"auto"} maxW='150px' key={key}>
                            <Image width='156px' height='auto' minH='140px' alt='' src={plat.src} borderRadius='5px' />
                            <Text color={"gray.600"} fontWeight='semibold' textAlign='center'>{plat.name}</Text>
                        </Box>
                    )
            })}
        </HStack>
    )
}


export default ListPlats