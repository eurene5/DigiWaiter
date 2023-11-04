import { Box, Image, Text, VStack, HStack, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Icon } from '@chakra-ui/icons'
import { FaCashRegister } from 'react-icons/fa6' 
import { PiCookingPotFill } from 'react-icons/pi'
import { MdRestaurantMenu } from 'react-icons/md'
import { AiFillDashboard } from 'react-icons/ai'

const ActiveLink = ({children, href, icon}) => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  const color = {
    color: router.asPath == href ? '#3FCB80' : '#FFF'
  }

  return (
    <Link href={href} style={color}>
      <HStack spacing='2px'>
        <Icon as={icon} onClick={handleClick} boxSize={5}/><Box as='span'>{children}</Box>
      </HStack>
    </Link>
  )
}


const data = {
  'name': "Kebn'Grill",
  'medias': "image1690133620998.jpg",
  'menu': {
    'categories': ["Wrap", "Boissons", "Burger", "Kebab"]
  }
}
const categories = data.menu.categories

const AsideDashboard = () => {
  return (
    <VStack minW='275px' bgColor='#394D5F' opacity='.97' spacing='60px' color='white' h='100vh' position='sticky' top='0'>
        <Box className='logoName'>
            <Image src={`/./upload/${data.medias}`} alt='' width='150' height='150' rounded='full' my='25px' mx='auto' />
            <Text fontWeight='bold' textAlign='center'>{data.name}</Text>
            <Text fontSize='14px'>
              {
                categories.map((categorie, key) => {
                  return (
                    <Box as='span' key={key}>{categorie}{categories.lastIndexOf(categorie) === categories.length - 1? '' : ' - '}</Box>
                  )
                })
              }
            </Text>            
        </Box>
        <Flex>
          <VStack align='flex-start' spacing='16px'>
            <ActiveLink href={'/caisse'} icon={FaCashRegister} >Caisse</ActiveLink>
            <ActiveLink href={'/dashboardCuisine'} icon={PiCookingPotFill} >Cuisine</ActiveLink>
            <ActiveLink href={'/MenusDashboard'} icon={MdRestaurantMenu} >Menus</ActiveLink>
            <ActiveLink href={'/dashboardAdmin'} icon={AiFillDashboard} >Tableau de bord</ActiveLink>
          </VStack>
        </Flex>
    </VStack>
  )
}

export default AsideDashboard