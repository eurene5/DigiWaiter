import { Footer } from "@/components/indexComponent/Indexfooter";
import { Header } from "@/components/indexComponent/Indexheader";
import { MainIndex } from "@/components/indexComponent/mainIndex";
import {Box} from '@chakra-ui/react'
import { getGroupeRestaurant, getOneRestaurant } from "@/Services";
import { useEffect, useState } from "react";

const Page = () => {
    const [data, setData] = useState()
    useEffect(() => {
        getGroupeRestaurant('Urbania').then(setData)
    }, [])

    return(
        <Box bgColor='#FFFFFFF2'>
            <Header/>
            <MainIndex datas={data}/>
            <Footer/>
        </Box>
    )    
}

export default Page