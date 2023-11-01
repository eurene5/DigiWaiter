import React,{ useState } from "react";
import {
    Box, 
    Grid, 
    GridItem, 
    Input, 
    Icon, 
    Text, 
    Divider, 
    Button, 
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons"
import { BiBarChart} from "react-icons/bi";

const UserAddModal =() =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button 
            color="white" 
            w="32%" 
            m="10px 0px 0px 0px" 
            backgroundColor="#3FCB80" 
            onClick={onOpen}
        >
            <AddIcon/> <Text ml="5px">Ajouter un utilisateur</Text>
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Ajout d'un utilisateur</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box ml="32px" display="flex" justifyContent="center">
                        <UserInputs width="95%"/>
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button 
                        color="white" 
                        w="80%" backgroundColor="#3FCB80" mx="auto" onClick={onClose}>
                        Ajouter un utilisateur
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
      </>
    )
}

const UserInputs =({width}) =>{
    return(
        <Grid
            ml="0px" 
            templateColumns='repeat(2, 1fr)'
            spacing={2}
            w={width}
        >
            <GridItem><Input backgroundColor="#e1e1e1" w="80%" type="text" placeholder="Nom User"/></GridItem>
            <GridItem><Input backgroundColor="#e1e1e1" w="80%" placeholder="Mot de passe" type="password"/></GridItem>
        </Grid>
    )
}
const UsersManager = () =>{
    return(
        <Box m="20px 0px 0px 40px" w="70%">
            <HStack spacing='2px'><Text fontWeight="semibold" color="#394D5F"><Icon as={BiBarChart}/> Gérer les utilisateurs</Text></HStack>
            <Divider w="60%"/>
            <Grid mt="15" w="80%" templateColumns='repeat(2, 1fr)'>
                <GridItem display="flex" justifyContent="left"> <Text fontWeight="semibold">Nom d'utilisateur</Text> </GridItem>
                <GridItem display="flex" justifyContent="left"> <Text fontWeight="semibold">Mot de passe</Text> </GridItem>
            </Grid>
            <UserInputs width="80%"/>
            <UserAddModal/>
        </Box>
    )
}

export default UsersManager