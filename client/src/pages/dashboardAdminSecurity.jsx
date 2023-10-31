import React from "react";
import PasswordGroup from "@/components/dashboardAdminSecurity/PasswordGroup";
import AsideDashboard from "@/components/dashboard/AsideDashboard";
import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import UsersManager from "@/components/dashboardAdminSecurity/UsersManager";
import CreditCard from "@/components/dashboardAdminSecurity/CreditCard";
import { Box, Text } from "@chakra-ui/react";
const DashboardAdminSecurity = ()=>{
    return (
        <Box>
            <Box display="flex">
                <AsideDashboard/>
                <Box w="full">
                    <HeaderDashboard/> 
                    <Text color="#292D32" fontWeight="bold" m="20px 0px 10px 40px"> Paramètres de sécurité</Text>
                    <PasswordGroup w="50%"/>
                    <UsersManager/>
                    <CreditCard/>
                </Box>  
            </Box>            
        </Box>
    )
}

export default DashboardAdminSecurity