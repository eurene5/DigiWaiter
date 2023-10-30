import { Box, Flex, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Icon } from '@chakra-ui/react'
import React from 'react'
import { BiLock, BiLogOut, BiUserCircle } from 'react-icons/bi'



const HeaderDashboard = () => {
  
  return (
    <Box w='full'>
        <Flex 
            minH='40px'     
            bgColor='#3FCB80'
            color='white'
            justifyContent='end'
            pe='35px'
            alignItems='center'
        >
            <HStack spacing='70px' >
                <Link href='/'><HStack spacing='2px'><Icon as={BiUserCircle} boxSize={6}/><Box as='span'>Consulter mon profil</Box></HStack></Link>
                <Link href='/'><HStack spacing='2px'><Icon as={BiLock} boxSize={6}/><Box as='span'>Securité</Box></HStack></Link>
                <Link href='/'><HStack spacing='2px'><Icon as={BiLogOut} boxSize={6}/><Box as='span'>Se déconnecter</Box></HStack></Link>
            </HStack>      
        </Flex>
    </Box>
  )
}

export default HeaderDashboard