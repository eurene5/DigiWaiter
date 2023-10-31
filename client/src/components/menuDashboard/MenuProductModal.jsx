"use client"
import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    useDisclosure
    
} from '@chakra-ui/react'
import MenuProductCard from "./MenuProductCard"
const MenuProductModal = ({src, name}) =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const size = ['lg']

    return (
        <>
        <MenuProductCard onClick={onOpen} src={src} name={name}/>
        <Modal blockScrollOnMount={false} isOpen={isOpen} size={size} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent sx={{borderRadius:"20px"}}>
                <ModalHeader 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 0,
                        height: "100%",
                        borderBottom: "none"
                    }}
                >
                    {/* <Image alt="" w='100%' h='100%' src={`/./upload/${menu.medias}`}></Image>  */}
                    <Image borderTopRadius={"20px"} alt="" w='100%' h='100%' src="/./assets/menuProductHeader.jpg"></Image> 
                </ModalHeader>

                <ModalCloseButton
                    sx={{
                        width:"50px",
                        height: "50px",
                        backgroundColor:'white',
                        opacity:"0.8",
                        borderRadius: '50%'
                    }}
                />

                <ModalBody 
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <p className='mt-1 font-bold'>
                        {/* {menu.name} */}
                        Tasty French Tacos
                    </p>
                    <p className='mt-1 text-[13px]'>
                        {/* {menu.ingredients}   */}
                        Deux choix de viande - deux choix de sauce - 1 supplément
                    </p>
                </ModalBody>

                <ModalFooter 
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    
                >
                    <Button marginBottom="10px" width="350px" textColor={"black"} backgroundColor={"gray.400"}>
                        {/* {menu.price}} */}
                        12.000 Ar
                    </Button>

                    <Button marginBottom="10px" width="350px" textColor={"white"} backgroundColor={"green.300"}>
                        % Mettre en promotion
                    </Button>
                    <Button marginBottom="10px" width="350px" className="w-full" textColor={"white"} backgroundColor={"gray.600"}>
                        Modifier le menu
                    </Button>
                    <Button marginBottom="10px" width="350px" className="w-full" textColor={"white"} backgroundColor={"orange.600"}>
                        Désactiver le menu
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default MenuProductModal