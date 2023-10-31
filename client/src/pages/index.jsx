import { Footer } from "@/components/indexComponent/Indexfooter";
import { Header } from "@/components/indexComponent/Indexheader";
import { MainIndex } from "@/components/indexComponent/mainIndex";
import {Box} from '@chakra-ui/react';
import Caisse from "./caisse";
import { getGroupeRestaurant } from "@/Services";
import { useQuery } from "react-query";
import CheckPayement from "./checkout";
const Page = () => {
    const {data} = useQuery("groureRestaurant", () => getGroupeRestaurant('Urbania'))

    return(
        <Box bgColor='#FFFFFFF2'>
            {/* <Header/> */}
            {/* <CheckPayement /> */}
            {/* <MainIndex datas={data}/> */}
            <Caisse />
            {/* <Footer/> */}
        </Box>
    )
}

export default Page