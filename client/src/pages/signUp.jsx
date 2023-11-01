import { Container, Grid, Box, Highlight } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftElement, Heading, Stack, Button, Flex, Text, FormHelperText} from '@chakra-ui/react'
import { FaMailBulk, FaPhone, FaStore, FaElementor } from "react-icons/fa"
import { Icon } from "@chakra-ui/react"
import { FaLocationArrow } from "react-icons/fa"
import { color } from "framer-motion"
import { EmailIcon, LockIcon } from "@chakra-ui/icons"
import Image from "next/image"
import { MdFastfood } from "react-icons/md"
import { register } from "@/Services/restaurant"
import { useState } from "react"
import FormData from "form-data"

const stateStyle = {
    name : null,
    groupe : null,
    location : null,
    mail : null,
    tel : null, 
    password : null,
    confirmePassword : null,
    medias : null
}

export default function SignUp(){
    const [restaurant, setRestaurant] = useState(stateStyle)
    const [file, setFile] = useState(null)

    const handleOnChange =(e)=>{
        setRestaurant({...restaurant, [e.target.name] : e.target.value } )
    }
    const handleOnChangeFile = (e) => {
        setFile( e.target.files[0])
        console.log(e.target.files[0]);
    //    setRestaurant({...restaurant, [e.target.name] : e.target.files[0]} )
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", file)
        formData.append("name", restaurant.name)
        formData.append("groupe", restaurant.groupe)
        formData.append("location", restaurant.location)
        formData.append("tel", restaurant.tel)
        formData.append("mail", restaurant.mail)
        formData.append("password", restaurant.password)
        console.log(formData);
        register(formData)
    }

    return(
        <Grid 
            gridTemplateColumns={"2fr 1fr"}
            justifyContent={"center"}
            alignItems={"center"}
            // border={"1px solid black"}
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
                    <Box w={"100%"}>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" >
                        <Stack spacing="20px" w={"100%"} p={"20px 10px 20px 20px"} >
                            <InputFrom name = {"name"} onChange = {handleOnChange} type="text"  value={"faef"}placeholder={"Nom du restaurant"}><Icon as ={FaMailBulk}/></InputFrom>
                            <InputFrom name = {"groupe"} onChange = {handleOnChange} type="text" value={"faef"}placeholder={"Food court (ex: Urbania, ...)"}><Icon as ={MdFastfood}/></InputFrom>
                            <InputFrom name = {"location"} onChange = {handleOnChange} type="text" value={"faef"} placeholder={"Localisation"}><Icon as ={FaLocationArrow}/></InputFrom>
                            <InputFrom name = {"mail"} onChange = {handleOnChange} type="email" value={"faef@gmail.com"} placeholder={"Adresse Email"}><Icon as ={EmailIcon}/></InputFrom>
                            <InputFrom name = {"tel"} onChange = {handleOnChange} type="tel" value={"faef"} placeholder={"Numéro de téléphone"}><Icon as ={FaPhone}/></InputFrom>
                            <InputFrom name = {"password"} onChange = {handleOnChange} type="password" value={"faef"} placeholder={"Entrer votre mot de passe"}><Icon as ={LockIcon}/></InputFrom>
                            <InputFrom name = {""}  type="password" onChange = {handleOnChange} value={"faef"} placeholder={"Confirmer votre mot de passe"}><Icon as ={LockIcon}/></InputFrom>
                            <InputFrom name = {"medias"} onChange = {handleOnChangeFile} type="file"  placeholder={"Confirmer votre mot de passe"}><Icon as ={LockIcon}/></InputFrom>                                
                            <Button variant={"solid"}  type="submit" color={"white"} bgColor="rgba(146, 227, 169, 1)" mb={"20px"}>S'inscrire</Button>
                            </Stack>
                    </form>
                    </Box>
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

function InputFrom({placeholder, type, children, value, name, onChange}){
    return(
        <>
            <InputGroup w={"100%"}>
                <InputLeftElement>
                    {children}
                </InputLeftElement>
                <Input onChange={onChange} bgColor={"#D9D9D9"} name={name} type={`${type}`} placeholder={`${placeholder}`}/>
                
            </InputGroup>

        </>
    )
}