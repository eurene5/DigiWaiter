import HeaderSingleRestaurant from '@/components/singleRestaurant/HeaderSingleRestaurant'
import { Footer } from "@/components/indexComponent/Indexfooter";
import MainSingleRestaurant from '@/components/singleRestaurant/MainSingleRestaurant'
import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getRestaurant } from '@/Services/restaurant';

const Page = () => {
    const router = useRouter()
    const slug = router.query.slug
    const {data: restaurantData, isLoading: restaurantLoading, isError: restaurantError} = useQuery({
        queryKey: ['restaurant', slug],
        queryFn: () => getRestaurant(slug),
        enabled: slug !== undefined,
        staleTime: 60_000 * 60,
    })

    const restaurant = restaurantData || []
    if(restaurantLoading) {
        return (
            <div>
                <svg className='animate-spin h-6 w-6 mx-auto'></svg>
                Loading...
            </div>
        )
    }
    if(restaurantError) {
        return (
            <p>something went wrong</p>
        )
    }

    return (
        <> 
            <HeaderSingleRestaurant currentPage={restaurantData}/>
            <MainSingleRestaurant restaurant={restaurantData[0]?.slug} />
            <Footer/>
        </>
    )
}

export default Page