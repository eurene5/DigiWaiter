import { Header} from "@/components/facture&commande/Header";
import { Box, Button } from "@chakra-ui/react";
import { Tableau } from "@/components/facture&commande/tableau";
import { Logo } from "@/components/facture&commande/Logo";
import FooterSingleRestaurant from "@/components/singleRestaurant/FooterSingleRestaurant";
import data from "public/dataFacture.json"
import { useState } from "react";

const Page = () => {
    const [state, setState] = useState(data)
    return(
        <Box display="block" mb="120px" justifyContent="center">
            <Header title="facture"/>
            <Box m="20px">
                <Logo url={"/assets/logo-restaurantSingle.png"}/>
                <Tableau data={state} />
            </Box>
            <Box m="20px">
                <Logo url={"/assets/logo-restaurantSingle.png"}/>
                <Tableau data={state} />
            </Box>
            <Box
                position="fixed" bottom="70px"
                display="flex" justifyContent="center"
                width="100%" alignItems="center"
            >
                <Button  width="90%" size="sm" backgroundColor="#3FCB80" color="White" p="25px 0px 25px 0px">Regler l'adition</Button>
            </Box>
            <FooterSingleRestaurant/>
        </Box>
    )
}

export default Page