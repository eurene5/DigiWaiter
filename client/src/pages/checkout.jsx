import { HeaderTitle } from "@/components/facture&commande UI/title";
import { Footer } from "@/components/indexComponent/Indexfooter";
import { 
    Box,
    Container,
    FormControl, 
    FormLabel,
    Input, 
    Button,
    SimpleGrid
} from "@chakra-ui/react";

export default function CheckPayement(){
    const montant = 80000
    const sxBouton = {
        color : "White",
        _hover : {
            bgColor : "teal"
        }
    }
    return(
        <Box>
            <HeaderTitle title={"Payement"}/>
            <Container justifyContent={"center"} alignItems={"center"} mt={"20px"} w={"auto"}>
                <form action="">
                    <FormControl  >
                        <FormLabel htmlFor="montant" fontWeight={"600"}>Montant de la facture</FormLabel>
                        <Button justifyContent={"center"} id="montant" w={"100%"} >{montant}</Button>
                        <FormLabel htmlFor="email" fontWeight={"600"}>Email address</FormLabel>
                        <Input type='email' id="email" />
                        <FormLabel htmlFor="infos" fontWeight={"600"}>Description</FormLabel>
                        <Input type='text'  id="info"/>
                        <SimpleGrid flexDir={"column"} gap={"5"} mt="10px">
                            <Button variant={"solid"} sx={sxBouton} bgColor={"#3FCB80"}>Payment via carte bancaire</Button>
                            <Button variant={"solid"} sx={sxBouton} bgColor={"#FFCD1B"}>Paiement par Mvola</Button>
                            <Button variant={"solid"} sx={sxBouton} bgColor={"#292D32"}>Paiement par OrangeMoney</Button>
                        </SimpleGrid>
                    </FormControl>
                </form>
            </Container>
            <Footer/>
        </Box>
    )
}