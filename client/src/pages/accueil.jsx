import React from 'react'
import { Footer } from "@/components/indexComponent/Indexfooter";
import { Header } from "@/components/indexComponent/Indexheader";
import { MainIndex } from "@/components/indexComponent/mainIndex";
import {Box} from '@chakra-ui/react';
import { getGroupeRestaurant } from "@/Services/restaurant";
import { useQuery } from "react-query";

const accueil = () => {
    const {data} = useQuery({
        queryKey: "groureRestaurant", queryFn: () => getGroupeRestaurant('urbania'), staleTime: 60_000 * 60
    })

    console.log(data)

    return(
        <Box bgColor='#FFFFFFF2'>
            <Header/>
            <MainIndex datas={data}/>
            <Footer/>
        </Box>
    )
}

export default accueil