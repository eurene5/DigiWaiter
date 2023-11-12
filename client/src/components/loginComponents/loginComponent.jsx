import { Container, Grid, Box, Highlight } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftElement, Heading, Stack, Button, Flex, Text, Image, Link } from '@chakra-ui/react'
import { Icon } from "@chakra-ui/react"
import { EmailIcon, LockIcon } from "@chakra-ui/icons"


const InputFrom = ({placeholder, type, children})=>{
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

const ConnexionForm = () =>{
    return (
        <Container
            borderRadius={"50px"}
            alignItems={"center"} 
            centerContent    
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
            > Connectez-vous </Heading>
            <Stack spacing="20px" w={"100%"} p={"20px 10px 20px 20px"} >
                <form action="">
                    <label><Text fontWeight="bold">E-mail</Text></label>
                    <InputFrom type="email" placeholder={"Entrez votre adresse mail"}><Icon as ={EmailIcon}/></InputFrom>
                    <label><Text fontWeight="bold">Mot de passe</Text></label>
                    <InputFrom type="password" placeholder={"Entrez votre mot de passe"}><Icon as ={LockIcon}/></InputFrom>
                </form>
                <Button variant={"solid"} color={"white"} bgColor="rgba(146, 227, 169, 1)" mb={"20px"}>Se connecter</Button>
                <Box mt="-20px" fontSize="14px" textAlign={"center"}>
                    Réinitialisez votre mot de passe en cliquant sur le lien suivant <Link color="#356CBF" href="">mot de passe oublié</Link>
                </Box>
            </Stack>               
        </Container>
    )
}

const LoginAside = () =>{
    return(
        <Flex
            w={"500px"}
            alignItems={"center"}
            border={"1px solid black"} 
            flexDir={"column"}
            h={'100vh'} bg={"#394D5F"}
        >
            <Box mt={"30px"}>
                <Image height={90} width={"auto"} src="/./assets/indexImages/logo-accueil.png" alt=''/>
            </Box>
            <Box mt={"100px"}>
                <Image height={200} width={"auto"} src="/./assets/Illustration.png" alt='' />
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
                    <Highlight query={["Connectez-vous"]} styles={{color : "#3FCB80", whiteSpace:"nowrap"}}>Connectez-vous pour commencer votre journée avec nous</Highlight>
                </Box>
            </Flex>
        </Flex>
    )
}

const LoginComponent = () =>{
    return(
        <Grid 
            gridTemplateColumns={"1fr 2fr"}
            justifyContent={"center"}
            alignItems={"center"}
            border={"1px solid black"}
            h={"100vh"}
        >
            <LoginAside/>
            <ConnexionForm/>
        </Grid>
    )
}


export default LoginComponent