import React from "react"
import MenuProductCard from "./MenuProductCard"
import { Box, SimpleGrid, Text, Divider } from "@chakra-ui/react"
import MenuProductModal from "./MenuProductModal"
const MenuProductList = () =>{
    return(
        <Box display="flex" flexDirection="column" w="full">
            <Box marginLeft="65px">
                <Text fontWeight="bold" color="#3FCB80">Tacos</Text>
                <Divider orientation='horizontal' maxW="600px"/>
            </Box>
            <Box marginLeft="45px">
                <SimpleGrid columns={4} spacingX='20px'>
                    <MenuProductModal src="/./assets/TastyFrenchTacos.jpg" name="Tasty French Tacos"/>
                    <MenuProductModal src="/./assets/TastyFrenchTacos.jpg" name="Tasty French Tacos"/>
                    <MenuProductModal src="/./assets/TastyFrenchTacos.jpg" name="Tasty French Tacos"/>
                    <MenuProductModal src="/./assets/TastyFrenchTacos.jpg" name="Tasty French Tacos"/>
                    <MenuProductModal src="/./assets/TastyFrenchTacos.jpg" name="Tasty French Tacos"/>
                    <MenuProductModal src="/./assets/TastyFrenchTacos.jpg" name="Tasty French Tacos"/>
                    <MenuProductModal src="/./assets/TastyFrenchTacos.jpg" name="Tasty French Tacos"/>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default MenuProductList