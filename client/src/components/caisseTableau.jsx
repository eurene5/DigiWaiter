import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    SimpleGrid,
    Button,
  } from '@chakra-ui/react'
import { DeleteIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import {FaTrashAlt, FaCheckSquare, FaHeart} from "react-icons/fa"


export default function Tableau(){
    const sxTh = {
        textTransform:'capitalize',
        fontSize:'14px',
        fontWeight:'bold',
        textAlign :"center"
    }
    return(
        <TableContainer alignItems="center" borderRadius="5px" borderBottom="none" 
            justifyContent="center"  maxH={"52vh"} overflowY={"scroll"} 
        >
          <Table variant='striped' 
            size="lg"  
           
          > 
            <Thead >
              <Tr > 
                <Th sx={sxTh}>ID</Th>
                <Th  sx={sxTh}>Table</Th>
                <Th  sx={sxTh}>Personnes</Th>
                <Th sx={sxTh}>Commandes</Th>
                <Th sx={sxTh}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td textAlign={"center"}> 44532</Td>
                <Td textAlign={"center"}>2</Td>
                <Td textAlign={"center"}>3</Td>
                <Td textAlign={"center"}>Tacos kebab, Pizza 4 Fromage</Td>
                <Td>
                    <SimpleGrid gap={"10px"} gridTemplateColumns={"1fr 1fr"}>
                        <Button><CheckCircleIcon /></Button>
                        <Button><DeleteIcon /></Button>
                    </SimpleGrid >
                </Td>
            </Tr>
            <Tr>
                <Td textAlign={"center"}> 44532</Td>
                <Td textAlign={"center"}>2</Td>
                <Td textAlign={"center"}>3</Td>
                <Td textAlign={"center"} whiteSpace={"pre-line"}>Tacos kebab, Pizza 4 Fromage Tacos kebab, Pizza 4 Fromage</Td>
                <Td>
                    <SimpleGrid gap={"10px"} gridTemplateColumns={"1fr 1fr"}>
                        <Button><CheckCircleIcon /></Button>
                        <Button><DeleteIcon /></Button>
                    </SimpleGrid >
                </Td>
            </Tr>
            <Tr>
                <Td textAlign={"center"}> 44532</Td>
                <Td textAlign={"center"}>2</Td>
                <Td textAlign={"center"}>3</Td>
                <Td textAlign={"center"}>Tacos kebab, Pizza 4 Fromage</Td>
                <Td>
                    <SimpleGrid gap={"10px"} gridTemplateColumns={"1fr 1fr"}>
                        <Button><CheckCircleIcon /></Button>
                        <Button><DeleteIcon /></Button>
                    </SimpleGrid >
                </Td>
            </Tr>
            <Tr>
                <Td textAlign={"center"}> 44532</Td>
                <Td textAlign={"center"}>2</Td>
                <Td textAlign={"center"}>3</Td>
                <Td textAlign={"center"}>Tacos kebab, Pizza 4 Fromage</Td>
                <Td>
                    <SimpleGrid gap={"10px"} gridTemplateColumns={"1fr 1fr"}>
                        <Button><Icon as={FaTrashAlt} /></Button>
                        <Button><Icon as={FaCheckSquare} /></Button>
                    </SimpleGrid >
                </Td>
            </Tr>
            <Tr>
                <Td textAlign={"center"}> 44532</Td>
                <Td textAlign={"center"}>2</Td>
                <Td textAlign={"center"}>3</Td>
                <Td textAlign={"center"}>Tacos kebab, Pizza 4 Fromage</Td>
                <Td>
                    <SimpleGrid gap={"10px"} gridTemplateColumns={"1fr 1fr"}>
                        <Button><CheckCircleIcon /></Button>
                        <Button><DeleteIcon /></Button>
                    </SimpleGrid >
                </Td>
            </Tr>
            </Tbody>
          </Table>
      </TableContainer>
    )
}