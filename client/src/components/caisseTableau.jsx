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
import { useState } from 'react';


const list =[
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage tacos, kebab Pizza 4 fromage"},
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage tacos, kebab Pizza 4 fromage"},
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage tacos, kebab Pizza 4 fromage"},
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage tacos, kebab Pizza 4 fromage"},
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage"},
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage"},
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage"},
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage"},
    {id : 12256, table : 2, personnes : 5, commandes : "tacos, kebab Pizza 4 fromage"},
]

export default function Tableau(){
    const [state , setState] = useState(list)
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
          <Table variant="striped"
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
            {/* <Tr> */}
                {ListCommande(state)}
            {/* </Tr> */}
            
            </Tbody>
          </Table>
      </TableContainer>
    )
}

function ListCommande(list){
    return list.map((el)=>{
        return(
            <Tr key={el.id} >
                <Td textAlign={"center"} whiteSpace={"pre-line"}>{el.id}</Td>
                <Td textAlign={"center"} whiteSpace={"pre-line"}>{el.table}</Td>
                <Td textAlign={"center"} whiteSpace={"pre-line"}>{el.personnes}</Td>
                <Td textAlign={"center"} whiteSpace={"pre-line"}>{el.commandes}</Td>
                <Td>
                    <SimpleGrid gap={"10px"} gridTemplateColumns={"1fr 1fr"}>
                        <Button><Icon as={FaCheckSquare} /></Button>
                        <Button><Icon as={FaTrashAlt} /></Button>
                    </SimpleGrid >
                </Td>
            </Tr>
        )
    })
}