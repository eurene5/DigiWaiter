import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
  // import data from "public/dataFacture.json"


export function Tableau({data}){
    const sxth={
      backgroundColor:"#394D5F",
    }
    const th={
      textAlign:"center",
      color:"#FFF",
      minWidth:"25px",
      fontSize:"12px",
      p:"10px",
    }
    const listProd = ()=>{
      const sxTd = {
        whiteSpace:"pre-line",
        textAlign:"center",
        p:"5px 3px 5px 3px" 
      }
      const rowsdata = data.map((item, i)=>{
        return (
          <Tr key={i}>
            <Td sx={sxTd}> {item.nom} </Td>
            <Td sx={sxTd}> {item.quantite} </Td>
            <Td sx={sxTd}> {item.prix} </Td>
            <Td sx={sxTd}>{item.quantite * item.prix}</Td>
          </Tr>)
      })
      return rowsdata  
    }
    const total = ()=>{
      let tab = [0, 0]
      data.forEach((item)=>{
        tab[0] += item.quantite
        tab[1] += item.prix * item.quantite
      })
      return tab
    }

    return(
        <TableContainer alignItems="center" borderRadius="5px" borderBottom="none" justifyContent="center" display="flex">
          <Table variant='simple' 
          size="xs"  
          __css={{'tableLayout':"fixed", "width" : "430px", "height":"auto"}}
          > 
            <Thead sx={sxth}>
              <Tr > 
                <Th sx={th} textTransform='capitalize' fontSize='14px' fontWeight='bold'>Désignation</Th>
                <Th sx={th} border="1px" textTransform='capitalize' fontSize='14px' fontWeight='bold'>Quantité</Th>
                <Th sx={th} borderRight="1px" textTransform='capitalize' fontSize='14px' fontWeight='bold'>Prix</Th>
                <Th sx={th} textTransform='capitalize' fontSize='14px' fontWeight='bold'>Sous total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {listProd()}
            </Tbody>
            <Tfoot>
              <Tr fontWeight="bold">
                <Td textAlign="center" p="10px 0px 10px 0px">Total</Td>
                <Td textAlign="center">{total()[0]}</Td>
                <Td></Td>
                <Td textAlign="center">{total()[1]}</Td>
              </Tr>
            </Tfoot>
          </Table>
      </TableContainer>
    )
  }