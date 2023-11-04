import { HeaderTitle} from "@/components/facture&commande UI/title";
import { Box, Button } from "@chakra-ui/react";
import { Tableau } from "@/components/facture&commande UI/tableau";
import { Logo } from "@/components/facture&commande UI/Logo";
import FooterSingleRestaurant from "@/components/singleRestaurant/FooterSingleRestaurant";
import data from "public/dataFacture.json"
import { useState } from "react";
import { Header } from "@/components/indexComponent/Indexheader";
import { Footer } from "@/components/indexComponent/Indexfooter";
import { useRouter } from "next/router";

const Page = () => {
    const [state, setState] = useState(data)
    const router = useRouter()
    return(
        <Box display="block" mb="120px" justifyContent="center">
            <Header/>
            <HeaderTitle title="facture"/>
            <Box m="20px">
                <Logo url={"/assets/logo-restaurantSingle.png"}/>
                <Tableau data={state} />
            </Box>
            {/* <Box m="20px">
                <Logo url={"/assets/logo-restaurantSingle.png"}/>
                <Tableau data={state} />
            </Box> */}
            <Box
                position="fixed" bottom="70px"
                display="flex" justifyContent="center"
                width="100%" alignItems="center"
            >
                <Button  width="90%" size="sm" backgroundColor="#3FCB80" color="White" p="25px 0px 25px 0px" onClick={() => router.push('/checkout')} >Regler l&apos;adition</Button>
            </Box>
            <Footer/>
        </Box>
    )
}

export default Page