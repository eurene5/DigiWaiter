import { Container, Grid, Box, Highlight } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftElement, Heading, Stack, Button, Flex, Text } from '@chakra-ui/react'
import { FaMailBulk, FaPhone, FaStore, FaElementor } from "react-icons/fa"
import { Icon } from "@chakra-ui/react"
import { FaLocationArrow } from "react-icons/fa"
import { color } from "framer-motion"
import { EmailIcon, LockIcon } from "@chakra-ui/icons"
import Image from "next/image"
import { FaBowlFood } from "react-icons/fa6"
import { MdFastfood } from "react-icons/md"

export default function SignUp(){
    return(
        <Grid 
            gridTemplateColumns={"2fr 1fr"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid black"}
            h={"100vh"}
        >
            <Container 
                // border={" 1px solid gray.700"} 
                borderRadius={"50px"}
                alignItems={"center"} centerContent    
                bgColor={"rgba(217, 217, 217, 0.28)"}
                h={"auto"}
            >                
                    <Heading 
                        _after={{
                            display:"block",
                            content : `""`,
                            height:"5px",
                            w:"150%",
                            ml : "-25%" ,
                            bgColor : "#92E3A9",
                            mt : "5px"

                        }}
                        p={"40px 10px 20px 0px"}
                    > Inscrivez-vous</Heading>
                    <Stack spacing="20px" w={"100%"} p={"20px 10px 20px 20px"} >
                        <InputFrom type="text" placeholder={"Nom du restaurant"}><Icon as ={FaMailBulk}/></InputFrom>
                        <InputFrom type="text" placeholder={"Food court (ex: Urbania, ...)"}><Icon as ={MdFastfood}/></InputFrom>
                        <InputFrom type="text" placeholder={"Localisation"}><Icon as ={FaLocationArrow}/></InputFrom>
                        <InputFrom type="email" placeholder={"Adresse Email"}><Icon as ={EmailIcon}/></InputFrom>
                        <InputFrom type="tel" placeholder={"Numéro de téléphone"}><Icon as ={FaPhone}/></InputFrom>
                        <InputFrom type="password" placeholder={"Entrer votre mot de passe"}><Icon as ={LockIcon}/></InputFrom>
                        <InputFrom type="password" placeholder={"Confirmer votre mot de passe"}><Icon as ={LockIcon}/></InputFrom>
                        <Button variant={"solid"} color={"white"} bgColor="rgba(146, 227, 169, 1)" mb={"20px"}>S'inscrire</Button>
                    </Stack>
                    
                    
            </Container>
            <Flex
                // justifyContent={"center"}  
                alignItems={"center"}
                border={"1px solid black"} 
                flexDir={"column"}
                h={'100vh'} bg={"#394D5F"}
            >
                <Box mt={"30px"}>
                    <Image height={200} width={100} src="/assets/indexImages/logo-accueil.png" alt=''></Image>
                </Box>
                <Box mt={"100px"}>
                    <Image height={100} width={300} src="/illustration.png" />
                </Box>
                
                <Flex
                    justifyContent={"center"}
                    flexDir={"column"} 
                    color={"white"} fontSize={"20px"} 
                    fontWeight={"700"} mt={"25px"} 
                    p={"10px 50px"} 
                    alignItems={"center"}
                >
                    <Text> Bonjour ! </Text>
                    <Box 
                        textAlign={"center"}
                    >
                        <Highlight query={["Inscrivez-vous"]} styles={{color : "#3FCB80", whiteSpace:"nowrap"}}>Inscrivez-vous pour commencer à faire partie de notre communauté</Highlight>
                    </Box>
                </Flex>
            </Flex>
        </Grid>
    )
}

function InputFrom({placeholder, type, children}){
    return(
        <>
            <InputGroup w={"100%"}>
                <InputLeftElement>
                    {children}
                </InputLeftElement>
                <Input bgColor={"#D9D9D9"} type={`${type}`} placeholder={`${placeholder}`}/>
            </InputGroup>

        </>
    )
}