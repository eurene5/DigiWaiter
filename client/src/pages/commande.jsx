import { Box, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { HeaderTitle } from "@/components/facture&commande UI/title";
import { Logo } from "@/components/facture&commande UI/Logo";
import { Tableau } from "@/components/facture&commande UI/tableau";
import data from "public/dataFacture.json";
import { useState } from "react";
import { Header } from "@/components/indexComponent/Indexheader";
import { getProductCart } from "@/Services/cart";
import { useQuery } from "react-query";
import { Footer } from "@/components/indexComponent/Indexfooter";

const Page = () => {

    const {data: cart} = useQuery({
        queryKey: ['cartKey'],
        queryFn: () => getProductCart()
    })

    console.log(cart);
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
                            <Image alt='' w='18px' h='18px' src="/./icon _amarok cart view_.svg" mr="5px"/>
                            Commander
                        </Button>
                </SimpleGrid>  
            </Box>

            {/* <Box m="20px">
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
                            <Image alt='' w='18px' h='18px' src="/./icon _amarok cart view_.svg" mr="5px"/>
                            Commander
                        </Button>
                </SimpleGrid>  
            </Box> */}
            <Box  position="fixed" bottom="70px" 
                    display="flex" justifyContent="center" 
                    width="100%" alignItems="center" >
                    <Button  width="90%" size="sm" backgroundColor="#3FCB80" color="White" p="25px 0px 25px 0px">Tout commander</Button>
            </Box>
            <Footer/>
        </Box>
    )
}

export default Page