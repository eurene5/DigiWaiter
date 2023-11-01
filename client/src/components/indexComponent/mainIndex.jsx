import React from 'react'
import {Box, Heading, Text} from '@chakra-ui/react'
import {RestaurantList } from './RestaurantList'
import {RestaurantCarousel} from './restaurantCarousel'
import { OfferCarousel } from './OfferCarousel'
import { SearchBar } from './searchBar'
import { useRouter } from 'next/router'


export const MainIndex = ({datas}) => {
  const router = useRouter()

  return (
    <Box mt="20px" px='20px'>
        <Box mb='20px' >
          <Text fontSize='16px' fontWeight='semibold' color='rgba(0, 0, 0, 0.8)'>
            Bonjour<br/>
            Quel genre d&apos;<Box as='span' color="#3FCB80" fontWeight='bold'>aventure culinaire</Box> allez-vous <Box as='span' color="#3FCB80" fontWeight='bold'>expérimenter</Box> aujourd&apos;hui
          </Text>
        </Box>
        <SearchBar />
        <Box>
          <Text color='#394D5F' textTransform='uppercase' fontWeight='semibold'>Offres</Text>
          <OfferCarousel/>
        </Box>
        <Box display='flex' flexWrap='wrap' justifyContent='center'>
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
