import AsideDashboard from '@/components/dashboard/AsideDashboard'
import HeaderDashboard from '@/components/dashboard/HeaderDashboard'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'

const dashboardAdmin = () => {
    const { data } = useQuery('dataDashboardAdmin', () => {})
    return (
        <Box display='flex'>
            <Box>
                <AsideDashboard restaurant={data} />    
            </Box>           
            <Box w='full'>
                <HeaderDashboard/>
            </Box>
        </Box>
    )
}

export default dashboardAdmin