import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import {RestaurantList } from './RestaurantList'
import {RestaurantCarousel} from './restaurantCarousel'
import { Searchbar } from './searchBar'
import { useRouter } from 'next/router'


export const MainIndex = ({datas}) => {
  const router = useRouter()

  return (
    <Box mt="20px">
      <Searchbar/>
        <Box display='flex' flexWrap='wrap' justifyContent='center' px='20px' flex>
          {datas?.map(data => {
            return (
              <RestaurantList key={data._id} onClick={() => router.push(`singleRestaurant/${data.slug}`)} src={`/./upload/${data.medias}`} name={data.name}/>
            )
          })}
            {/* <RestaurantList href="/" src="/./assets/indexImages/regHallal.png" name={"Reg'Halal"}/>
            <RestaurantList href="/" src="/./assets/indexImages/crepeHh.jpg" name={"Crêpe H&H"}/>
            <RestaurantList href="/" src="/./assets/indexImages/okeanos.png" name={"Okeanos"}/> */}
        </Box>
        <Heading 
            as='h5' 
            fontSize='15px' 
            textAlign='start' 
            ml="25px"
            mb='10px'
            pb='3px'
        >
          Mieux notés
        </Heading>
        <RestaurantCarousel/>
    </Box>
  )
}
