import HeaderSingleRestaurant from '@/components/singleRestaurant/HeaderSingleRestaurant'
import FooterSingleRestaurant from '@/components/singleRestaurant/FooterSingleRestaurant'
import MainSingleRestaurant from '@/components/singleRestaurant/MainSingleRestaurant'
import {
    getOneRestaurant, 
    getMenuForOneRestaurant, 
    getCategorieMenu, 
    getSingleMenu 
} from '@/Services'
import { useEffect, useState } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

// const restaurant = getOneRestaurant(slug)
// const menuList = getMenuForOneRestaurant(restaurant.name)
// const categories = getCategorieMenu(restaurant.name)

const Page = () => {
    const router = useRouter()
    const slug = router.query.slug
    const queryKey = ['restaurant']
    const {data} = useQuery(queryKey, () => getOneRestaurant(slug))
    console.log(slug, data);

    //maintenance
    // const [restaurant, setRestaurant] = useState(null)
    // var slug = null
    // slug = router.query.slug
    // useEffect(() => {
    //     getOneRestaurant(slug).then(setRestaurant)
    // }, [slug])
    
    return (
        <> 
            {/* <HeaderSingleRestaurant currentPage={restaurant[0].name} imageRestaurant={`/./upload/${restaurant[0].medias}`} /> */}
            {/* <MainSingleRestaurant datas={categories} data2={menuList} /> */}
            <FooterSingleRestaurant/>
        </>
    )
}

export default Page