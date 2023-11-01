import React from 'react'
import {
    Image,
    Text,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Icon,
    HStack,
    VStack,
  } from '@chakra-ui/react'
import { BiStar, BiUserCircle } from 'react-icons/bi'
import Link from 'next/link'
import { HiOutlineUser } from 'react-icons/hi'
import { ImStatsDots } from 'react-icons/im'

const InformationProfilDashboard = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const categories = data.menu.categories


  return (
    <Box>
        <Link onClick={onOpen} href=''>
            <HStack spacing='2px'>
                <Icon as={BiUserCircle} boxSize={6}/>
                <Box as='span'>Consulter mon profil</Box>
            </HStack>
        </Link>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    <Box className='logoName' textAlign='center'>
                        <Image src={`/./upload/${data.medias}`} alt='' width='150' height='150' rounded='full' mx='auto' />
                        <Text fontWeight='bold'>{data.name}</Text>
                        <Text fontSize='14px'>
                        {
                            categories.map((categorie, key) => {
                            return (
                                <Box as='span' key={key}>{categorie}{key === categories.length - 1? '' : ' - '}</Box>
                            )
                            })
                        }
                        </Text>            
                    </Box>
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <VStack>
                        <HStack alignItems='center' fontWeight='semibold' color='#394D5F' borderBottom='1px solid #D9D9D9' w='full'>
                            <Icon as={HiOutlineUser} boxSize={5}/>
                            <Text>Information général</Text>
                        </HStack>
                        <HStack w='full'>
                            <Text fontWeight='semibold'>Localisation: </Text>
                            <Text>Urbania Analakely, Antananarivo</Text>
                        </HStack>
                        <HStack w='full'spacing='55px'>
                            <Text fontWeight='semibold'>Email: </Text>
                            <Text>Kebngrill@gmail.com</Text>
                        </HStack>
                        <HStack w='full' spacing='20px'>
                            <Text fontWeight='semibold'>Téléphone: </Text>
                            <Text>034 58 235 98</Text>
                        </HStack>
                        <HStack alignItems='center' fontWeight='semibold' color='#394D5F' borderBottom='1px solid #D9D9D9' w='full'>
                            <Icon as={ImStatsDots} boxSize={5}/>
                            <Text>Statistique</Text>
                        </HStack>
                        <HStack w='full'>
                            <Text fontWeight='semibold'>Note donnée par les clients: </Text>
                            <HStack alignItems='center' fontWeight='bold'>
                                <Icon as={BiStar}/>
                                <Box as='span'> 4.8 - </Box>
                                <Box as='span' color='#3FCB80'>Excellent</Box>
                            </HStack>
                        </HStack>
                        <HStack w='full'>
                            <Text fontWeight='semibold'>Nombre de client moyenne par jour: </Text>
                            <Text fontWeight='bold'>112 clients</Text>
                        </HStack>
                        <HStack w='full'>
                            <Text fontWeight='semibold'>Valuer des recettes moyenne par jour: </Text>
                            <Text fontWeight='bold'>800 000 Ar</Text>
                        </HStack>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default InformationProfilDashboard