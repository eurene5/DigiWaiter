import AsideDashboard from '@/components/dashboard/AsideDashboard'
import HeaderDashboard from '@/components/dashboard/HeaderDashboard'
import MainDashboardAjoutMenu from '@/components/dashboardAjoutMenu/MainDashboardAjoutMenu'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'

const dashboardAjoutMenu = () => {
    const { data } = useQuery('dataDashboardAdmin', () => {})

  return (
    <Box display='flex'>
        <Box>
            <AsideDashboard restaurant={data} />    
        </Box>           
        <Box w='full'>
            <HeaderDashboard/>
            <Box my='30px'>
                <MainDashboardAjoutMenu/>
            </Box>
        </Box>
    </Box>
  )
}

export default dashboardAjoutMenu