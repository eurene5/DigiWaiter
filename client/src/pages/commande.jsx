import { Box, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { Header } from "@/components/facture&commande/Header";
import { Logo } from "@/components/facture&commande/Logo";
import { Tableau } from "@/components/facture&commande/tableau";
import data from "public/dataFacture.json";
import { useState } from "react";

const Page = () => {
    const [state, setState] = useState(data)
    const handleCommand = ()=>{
        console.log("Commande envoyer");
    }
    return(
        
        <Box mb="130px">
            <Header title={"Commande"}/>
            <Box m="20px">
                <Logo url={"/./assets/logo-restaurantSingle.png"}/>
                <Tableau data={state}/>
                <SimpleGrid  
                    mt="20px"
                    gridTemplateColumns="1fr 1fr"
                    spacing="5px"
                >
                        <Button size="sm" backgroundColor="#D9D9D9" color="#000" p="20px 0px 20px 0px">
                            Mofifiier la commande
                        </Button>
                        <Button size="sm" backgroundColor="#3FCB80" color="#FFF" p="20px 0px 20px 0px" onClick={handleCommand}>
                            <Image w='18px' h='18px' src="/./icon _amarok cart view_.svg" mr="5px"/>
                            Commander
                        </Button>
                </SimpleGrid>  
            </Box>

            <Box m="20px">
                <Logo url={"/./assets/logo-restaurantSingle.png"}/>
                <Tableau data={state}/>
                <SimpleGrid  
                    mt="20px"
                    gridTemplateColumns="1fr 1fr"
                    spacing="5px"
                >
                        <Button size="sm" backgroundColor="#D9D9D9" color="#000" p="20px 0px 20px 0px">
                            Mofifiier la commande
                        </Button>
                        <Button size="sm" backgroundColor="#3FCB80" color="#FFF" p="20px 0px 20px 0px" onClick={handleCommand}>
                            <Image w='18px' h='18px' src="/./icon _amarok cart view_.svg" mr="5px"/>
                            Commander
                        </Button>
                </SimpleGrid>  
            </Box>
            <Box  position="fixed" bottom="70px" 
                    display="flex" justifyContent="center" 
                    width="100%" alignItems="center" >
                    <Button  width="90%" size="sm" backgroundColor="#3FCB80" color="White" p="25px 0px 25px 0px">Tout commander</Button>
            </Box>
        </Box>
    )
}

export default Page