"use client"
import React, { useState } from "react"
import ProductSingleRestaurant from './ProductSingleRestaurant'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image
} from '@chakra-ui/react'
import { addToCart } from "@/Services/cart"

export default function ProductModal({menu}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const size = ['sm']
    const [count, setCount] = useState(1);
      
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    
    const decrement = () => {
        if(count>0)   
            setCount(prevCount => prevCount - 1)
    }

    const NumberCounter = () => {

      
        return (
            <div className="mt-5">
                <div className="flex items-center">
                    <button
                        className={`w-10 h-10 flex items-center justify-center ${
                            count === 1 ? 'opacity-50 cursor-not-allowed' : null
                        }`}
                        onClick={decrement}
                        disabled={count === 1}
                    >
                        <Image alt="" src="/./iconNegative.svg" ></Image>
                    </button>

                    <div className="mx-7 text-xl font-semibold">{count}</div>
                    
                    <button
                    className="w-10 h-10 flex items-center justify-center"
                    onClick={increment}
                    >
                        <Image alt="" src="/./iconPlus.svg"></Image>
                    </button>
                </div>
                <Button className="mt-4 w-full" textColor={"white"} backgroundColor={"gray.400"}>
                    {count*menu.price} Ar
                </Button>
            </div>
        );
    }
    
    return (
        <>
        <ProductSingleRestaurant onClick={onOpen} menu={menu}  />
        <Modal blockScrollOnMount={false} isOpen={isOpen} size={size} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent rounded="none">
            <ModalHeader 
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 0,
                height: "100%",
                borderBottom: "none",
                }}
            >
                <Image alt="" w='100%' h='100%' src={`/./upload/${menu.medias}`}></Image> 
            </ModalHeader>

            <ModalCloseButton
                sx={{
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
                    {menu.name}
                </p>
                <p className='mt-1 text-[11px]'>
                    {menu.ingredients}  
                </p>
                <NumberCounter/>
            </ModalBody>

            <ModalFooter 
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
            >   

                <Button className="w-full" textColor={"white"} backgroundColor={"green.300"} onClick={() => {addToCart(menu.slug, count)}}>
                    Ajouter au panier
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}