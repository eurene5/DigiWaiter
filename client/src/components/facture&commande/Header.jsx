import { Box, Text } from "@chakra-ui/react";
import { color } from "framer-motion";


export function Header({title}){
    return(
        <Box fontFamily="sans-serif">
            <Box backgroundColor="#394D5F" display="flex"  justifyContent="center" alignItems="center" height="80px"> 
                <Box as="img" src="/./assets/Group 4.png" objectFit="cover" height="100%"/>
            </Box>
            <Box
            _after={{
                display:"block",
                content:'" "',
                backgroundColor:"#3FCB80",
                height:"2px",
                width:"100%"
            }}
            >            
            <Text 
                as="H1" 
                p="10px 0px 10px 20px"
                fontSize="20px" fontWeight="900" color="#394D5F"
                >
                    {title}
            </Text>
            </Box>
        </Box>
    )
}