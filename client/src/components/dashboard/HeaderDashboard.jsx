import { Box, Flex, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Icon } from '@chakra-ui/react'
import React from 'react'
import { BiLock, BiLogOut, BiUserCircle } from 'react-icons/bi'
import InformationProfilDashboard from './InformationProfilDashboard'

const data = {
  'name': "Kebn'Grill",
  'medias': "image1690133620998.jpg",
  'menu': {
    'categories': ["Wrap", "Boissons", "Burger", "Kebab"]
  }
}


const categories = data.menu.categories

const HeaderDashboard = () => {
  
  return (
    <Box w='full' position='sticky' top='0' zIndex='100'>
        <Flex 
            minH='40px'     
            bgColor='#3FCB80'
            color='white'
            justifyContent='end'
            pe='35px'
            alignItems='center'
        >
            <HStack spacing='70px' >
                <InformationProfilDashboard data={data}/>
                <Link href='/'><HStack spacing='2px'><Icon as={BiLock} boxSize={6}/><Box as='span'>Securité</Box></HStack></Link>
                <Link href='/'><HStack spacing='2px'><Icon as={BiLogOut} boxSize={6}/><Box as='span'>Se déconnecter</Box></HStack></Link>
            </HStack>      
        </Flex>
    </Box>
  )
}

export default HeaderDashboard