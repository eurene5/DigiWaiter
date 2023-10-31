import { Box, Text, HStack, Icon, Flex, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from "react-chartjs-2";
import React, { useState } from 'react'
import { ImStatsDots }  from 'react-icons/im'


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
        <HStack spacing='60px' flexWrap='wrap'>
            <Box>  
                <Text 
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
                <TableContainer>
                    <Table variant='striped' fontWeight='semibold' color='black'>
                        <Thead>
                            <Tr>
                                <Th>Jour de la semaine</Th>
                                <Th>Nombre de client</Th>
                                <Th>Revenue du jour</Th>
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
            <Box>
                <Pie data={data2}/>
            </Box>
        </HStack>
    </Flex>
    
  )
}

export default MainDashboardAdmin