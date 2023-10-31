import MenuPromotions from "../components/menuDashboard/MenuPromotions"
import SearchBar from '../components/menuDashboard/SearchBar'
import AsideDashboard from '../components/dashboard/AsideDashboard'
import MenuProductList from '../components/menuDashboard/MenuProductList'
import { Box } from '@chakra-ui/react'

const MenusDashboard = () => {
    return (
        <Box display='flex'>
            <Box>
                <AsideDashboard/>    
            </Box>           
            <Box w='full' display="flex">
                <Box w='full'>
                    <SearchBar/>
                    <MenuProductList/>
                </Box>
                <MenuPromotions/>
            </Box>         
        </Box>
        
    )
}

export default MenusDashboard