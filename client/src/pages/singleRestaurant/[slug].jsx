import HeaderSingleRestaurant from '@/components/singleRestaurant/HeaderSingleRestaurant'
import FooterSingleRestaurant from '@/components/singleRestaurant/FooterSingleRestaurant'
import MainSingleRestaurant from '@/components/singleRestaurant/MainSingleRestaurant'
import { getMenuForOneRestaurant, getOneRestaurant } from '@/Services'
import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

// const restaurant = getOneRestaurant(slug)
// const menuList = getMenuForOneRestaurant(restaurant.name)
// const categories = getCategorieMenu(restaurant.name)

const Page = () => {
    const router = useRouter()
    const slug = router.query.slug
    const {data: restaurant, isLoading: restaurantLoading, isError: restaurantError} = useQuery({
        queryKey: ['restaurant', slug],
        queryFn: () => getOneRestaurant(String(slug)),
        enabled: slug !== undefined,
    })
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

    //maintenance
    // const [restaurant, setRestaurant] = useState(null)
    // var slug = null
    // slug = router.query.slug
    // useEffect(() => {
    //     getOneRestaurant(slug).then(setRestaurant)
    // }, [slug])

    return (
        <> 
            <HeaderSingleRestaurant currentPage={restaurant[0]?.name} imageRestaurant={`/./upload/${restaurant[0]?.medias}`} />
            <MainSingleRestaurant restaurant={restaurant[0]?.name} />
            <FooterSingleRestaurant/>
        </>
    )
}

export default Page