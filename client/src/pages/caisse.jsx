import Tableau from "@/components/dashboardCaisse/caisseTableau";
import Image from "next/image";
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import {FaAppStore, FaHeartbeat} from "react-icons/fa"
import AsideDashboard from "@/components/dashboard/AsideDashboard";
import { 
    Box,
    Container,
    InputGroup,
    Input, 
    Button,
    Grid,
    Flex,
    Text,
    GridItem,
    InputRightElement,
    Card,
    SimpleGrid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaStarOfDavid } from "react-icons/fa";
import SearchBar from "@/components/dashboardCaisse/SearchBar";
import HeaderDashboard from "@/components/dashboard/HeaderDashboard";

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

const Caisse = () => {
    const sxBoxClient = {
        p:"10px 5px 10px 5px",
        bg:"rgba(217, 217, 217, 0.37)",
        mt:"20px",
        borderRadius:"10px",
        boxShadow:'0px 2px 5px 0px rgba(0, 0, 0, 0.5)'
    }
 
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
        <Flex
        justifyContent={"center"}
        w={"100%"}
        >
            <AsideDashboard /> 
            <Box w='100%'>
                <HeaderDashboard/>
                <Box w='100%' ps='20px'>
                    <Grid 
                        templateAreas={`
                            "search search client"
                            "tableau tableau client"
                            "tableau tableau client"
                            `
                        }
                        gridTemplateColumns={" 2fr 3fr 2fr"}
                        gridTemplateRows={"1fr 2fr 4fr"}
                        gap={5}
                        width={"100%"}
                        mt={"20px"}
                    >
                        <GridItem
                            area={'search'}
                        >
                            <SearchBar />

                        </GridItem>

                        <GridItem
                            area={'tableau'}
                            mt={"-20px"}
                        >
                            <Text 
                                sx={sxTextTitle}                        
                            >
                                <Icon as={FaAppStore} />
                                Listes Des commandes
                            </Text>
                            <SimpleGrid 
                                mt={"20px"} gridTemplateColumns={"1fr 1fr"} 
                                borderRadius={"5px 5px 0px 0px"} 
                            >
                                <Button variant={"solid"} borderRadius={0} bg={"#394D5F"} color={"white"} _hover={{color : "black"}} >Commande en cours</Button>
                                <Button variant={"solid"} bg={"#3FCB80"} borderRadius={0} color={"white"} _hover={{color : "black"}}>Commande livré</Button>
                            </SimpleGrid>
                            <Tableau />

                        </GridItem>

                        <GridItem
                            area={'client'}
                            mr={"20px"}
                        >
                            <Flex 
                                justifyContent={"center"}
                                flexDir={"column"}
                                bg={"rgba(217, 217, 217, 0.37)"}
                            >
                                <Flex 
                                    bgColor={"#394D5F"} 
                                    w={"100%"} justifyContent={"center"}
                                    color={"white"} p={"15px 0px 15px 0px"}
                                    fontWeight='bold'
                                    borderRadius='3px'
                                >
                                Avis des clients 
                                </Flex>
                                <Box 
                                    h={"65vh"} overflow={"scroll"}
                                >
                                        {clients.map((client)=>{
                                            return(
                                                <Card m={"15px 10px 15px 10px"}  bg={"#D9D9D9"} p={"5px"} key={client.name} >
                                                    <Text>{client.name}</Text>
                                                    <Flex flexDir={"row"}>{Array(client.note)
                                                        .fill('')
                                                        .map((_, i) => (
                                                            <>
                                                                <StarIcon
                                                                    key={i}
                                                                    color={"#3FCB80"}
                                                                />
                                                            </>
                                                        
                                                        ))}
                                                    </Flex>
                                                    <Text>{client.commentaire}</Text>
                                                </Card>
                                            )
                                        })}
                                </Box>
                            </Flex>
                            <Flex 
                                justifyContent={"center"}
                                sx={sxBoxClient}
                            >    
                                <Image width={40} height={40} src={"/90.png"} alt='' />
                                <Box w={"70%"}>
                                    <Text textAlign={"center"} fontWeight={"600"}>Nombres de Clients</Text>
                                    <Text textAlign={"center"}>180000</Text>
                                </Box>
                            </Flex>
                            <Box 
                                sx={sxBoxClient}
                            >    
                                <Text textAlign={"center"} fontWeight={"600"}>Nombres de Clients</Text>
                                <Text textAlign={"center"}>180000</Text>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>

            </Box>

            
        </Flex>
    )
}


// function ListPlats(){
//     return(
//         <Flex mt={"30px"} >
//             {platsFavoris.map((plat)=>{
//                 if(platsFavoris.indexOf(plat)<5)
//                     return(
//                         <Container borderRadius={"5px"} w={"auto"} key={plat.name} centerContent>
//                             <Image width={150} height={400} src={plat.src} />
//                             <Text color={"gray.600"} fontWeight={"500"}>{plat.name}</Text>
//                         </Container>
//                     )
//             })}
//         </Flex>
//     )
// }

// function SearchBar(){
//     const sxTextTitle = {
//         display:"block",
//         as:"h2",
//         w:"auto",
//         fontWeight:"600",
//         _after : {
//                 display :"block",
//                 content : `" "`,
//                 h : "1px",
//                 w : "50%",
//                 bg:"#A0A0A0"
//         }
//     }
//     return(
//         <>
//             <Flex justifyContent={"right"}>
//             <InputGroup  w={"500px"} >
//                 <InputRightElement pointerEvents="">
//                     <SearchIcon color='gray.400' />
//                 </InputRightElement>
//                 <Input type='Text' placeholder='Rechercher une commande' border={"1px solid gray"} borderRadius={"10px"}/>
//             </InputGroup>
//         </Flex>
//         <Box mt={"10px"} >
//             <Text 
//                 sx={sxTextTitle}
//             >
//                 <Icon as = {FaHeartbeat} />
//                 Les plats le plus commandé par les clients
//             </Text>
//             <ListPlats plats = {platsFavoris} />
//         </Box>
//         </>
        
//     )
// }

export default Caisse