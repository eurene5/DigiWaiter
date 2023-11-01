import { Box, Text, HStack, VStack, Icon, Flex, TableContainer, Table, Thead, Tr, Th, Tbody, Td, ButtonGroup, Button } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from "react-chartjs-2";
import React, { useState } from 'react'
import { ImStatsDots }  from 'react-icons/im'
import SearchBar from '../dashboardCaisse/SearchBar';
import { FaCoins, FaPlus, FaUsers } from 'react-icons/fa'


const MainDashboardAdmin = () => {
    const datas = {
    Lundi: {
        NbDeClient: 969,
        RevenueDuJour: 3000000
    },
    Mardi: {
        NbDeClient: 738,
        RevenueDuJour: 2500000
    },
    Mercredi: {
        NbDeClient: 974,
        RevenueDuJour: 3200000
    },
    Jeudi: {
        NbDeClient: 738,
        RevenueDuJour: 2900000
    },
    Vendredi: {
        NbDeClient: 974,
        RevenueDuJour: 3200000
    },
    Samedi: {
        NbDeClient: 451,
        RevenueDuJour: 1000000
    }
    }


    const initialTotalDuRevenue = () => {
        let totalDuRevenue = 0
        for (const jour in datas) {
            if (datas.hasOwnProperty(jour)) {
                totalDuRevenue += datas[jour].RevenueDuJour;
            }
        }
        totalDuRevenue = totalDuRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        return totalDuRevenue
    }



    const initialTotalDeClient = () => {
        let totalDeClient = 0
        for (const jour in datas) {
            if (datas.hasOwnProperty(jour)) {
                totalDeClient += datas[jour].NbDeClient;
            }
        }    
        return totalDeClient
    }


    const initialData1 = () => {
        let data1 = []
        for (const jour in datas) {
            if (datas.hasOwnProperty(jour)) {
                data1.push(datas[jour].NbDeClient)
            }
        }
        return data1
    }

    const data1 = initialData1();

    const data2 = {
        labels: [
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi'
        ],
        datasets: [{
            label: 'Nombre de client',
            data: data1,
            hoverOffset: 4
        }]
    }

    ChartJS.register(ArcElement, Tooltip, Legend, Colors);


    const [totalDeClient, ] = useState(initialTotalDeClient())
    const [totalDuRevenue, ] = useState(initialTotalDuRevenue())


  return (
    <Flex justifyContent='center'>
        <HStack spacing='40px' flexWrap='wrap' justifyContent='center' alignItems='top' >
            <Box>  
                <SearchBar/>
                <Text 
                    mt='30px'
                    fontWeight='bold' 
                    color='#394D5F' 
                    borderBottom='1px' 
                    borderColor='#D9D9D9' 
                    w='66%' 
                    display='flex' 
                    alignItems='center'
                >
                        <Icon as={ImStatsDots} me='4px'/>
                        <Box as='span'>Statistique de vente</Box>
                </Text>
                <HStack spacing='0' w='100%' mt='20px'>
                    <Button type='button' colorScheme='blackAlpha' roundedEnd='none' w='33%' roundedBottomStart='none'>
                        Hebdomadaire
                    </Button>
                    <Button type='button' colorScheme='green' rounded='none' w='33%' borderStart='1px solid white' borderEnd='1px solid white'>
                        Mensuel
                    </Button>
                    <Button type='button' colorScheme='green' roundedStart='none' w='33%' roundedBottomEnd='none'>
                        Annuel
                    </Button>
                </HStack>
                <TableContainer>
                    <Table variant='striped' fontWeight='semibold' color='black'>
                        <Thead>
                            <Tr>
                                <Th textAlign='center' >Jour de la semaine</Th>
                                <Th textAlign='center' >Nombre de client</Th>
                                <Th textAlign='center' >Revenue du jour</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                Object.values(datas).map((data, key) => {
                                    return (
                                        <Tr key={key}>
                                            <Td textAlign='center'>{Object.keys(datas)[key]}</Td>
                                            <Td textAlign='center'>{data.NbDeClient}</Td>
                                            <Td textAlign='center'>{data.RevenueDuJour.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Ar</Td>
                                        </Tr>
                                    )
                                })
                            }
                            <Tr>
                                <Td textAlign='center'>TOTAL</Td>
                                <Td textAlign='center'>{totalDeClient}</Td>
                                <Td textAlign='center'>{totalDuRevenue} Ar</Td>
                            </Tr>
                        </Tbody>

                    </Table>
                </TableContainer>
            </Box>
            <VStack spacing='20px'>
                <HStack 
                    w="100%" justifyContent={"center"}
                    p="10px 0"
                    bgColor={"#394D5F"}
                    borderRadius='3px'
                    alignItems='center'
                    color={"white"}
                >
                    <Icon as={FaPlus}/>
                    <Text fontWeight='bold' >Ajouter un menu à la carte</Text> 
                </HStack>                
                <Box 
                    w='100%' 
                    bg='rgba(217, 217, 217, .37)' 
                    pt='10px' 
                    pb='50px' 
                    boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    borderRadius='6px'
                >
                    <Pie data={data2}/>
                    <Text 
                        fontWeight='bold' 
                        textAlign='center' 
                        color='394D5F' 
                        opacity='.97'
                        mt='30px'
                    >
                        Nombre de client de  la semaine
                    </Text>
                </Box>
                <HStack 
                    bg='rgba(217, 217, 217, .37)' 
                    spacing='25px'  
                    boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    borderRadius='6px'
                    justifyContent='center'
                    py='17px'
                    w='100%'
                >
                    <Icon as={FaUsers} w='40px' h='28px' color='#3FCB80' />
                    <Box textAlign='center'>
                        <Text fontWeight='semibold'>Nombre de Client</Text>
                        <Text color='#394D5F' fontWeight='extrabold'>
                            119 clients
                        </Text>
                    </Box>
                </HStack>
                <HStack 
                    bg='rgba(217, 217, 217, .37)' 
                    spacing='25px'  
                    boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    borderRadius='6px'
                    justifyContent='center'
                    py='17px'
                    w='100%'
                >
                    <Box textAlign='center'>
                        <Text fontWeight='semibold'>Ventes d&apos;aujourdh&apos;hui</Text>
                        <Text color='#394D5F' fontWeight='extrabold'>
                            400 000 Ar
                        </Text>
                    </Box>
                    <Icon as={FaCoins} w='40px' h='40px' color='#FF1B52' />
                </HStack>
            </VStack>
        </HStack>
    </Flex>
    
  )
}

export default MainDashboardAdmin