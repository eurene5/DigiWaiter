import React from 'react'
import { Footer } from "@/components/indexComponent/Indexfooter";
import { Header } from "@/components/indexComponent/Indexheader";
import { MainIndex } from "@/components/indexComponent/mainIndex";
import {Box} from '@chakra-ui/react';
import { getGroupeRestaurant } from "@/Services";


const accueil = () => {
    const {data} = useQuery("groureRestaurant", () => getGroupeRestaurant('Urbania'))

    return(
        <Box bgColor='#FFFFFFF2'>
            <Header/>
            <MainIndex datas={data}/>
            <Footer/>
        </Box>
    )
}

export default accueil