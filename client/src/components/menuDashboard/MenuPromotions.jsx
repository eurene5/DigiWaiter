import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react";

const MenuPromotions = () =>{
    return(
        <Box 
            position="relative"
            marginLeft= "auto"
            marginRight="20px"
            marginTop="5px"
            width="305px"
            height="auto"
            backgroundColor="#D9D9D9"
        >   
            <Stack
                sx={{
                    display:"flex",
                    alignItems:"center",
                }}
            >
                <Box 
                    sx={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        width:"305px",
                        height :"65px",
                        backgroundColor :"#394D5F",
                        marginBottom:"20px"
                    }}
                >
                    <p textColor={"white"} className="font-bold">% Promotions</p>
                </Box>
                <Image w={"300px"} alt="" src="/./assets/KebabPromotion.jpg"></Image>
                <Image w={"300px"} alt="" src="/./assets/KebabRoyal.jpg"></Image>
                <Image w={"300px"} alt="" src="/./assets/CheeseChicken.jpg"></Image>
            </Stack>
        </Box>
    )
}

export default MenuPromotions