'use client'
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import ProductModal from "./ProductModal";
import DrinkModal from "./DrinkModal";

const MainSingleRestaurant = ({datas, data2}) => {

  return(
    <Box>
      <Tabs isLazy align='center' variant='unstyled' defaultIndex={0} >
        <TabList 
          fontWeight='bold' 
          fontSize='13px' 
          borderTop='1px solid #3FCB80' 
          borderBottom='1px solid #3FCB80'
          height='40px'
          bgColor='#FFF'
          color='#394D5F'
        >
          {datas.map(categorie => {
            <Tab _selected={{ color: '#3FCB80'}} fontSize='13px'>{categorie.name}</Tab>
          })}
          {/* <Tab _selected={{ color: '#3FCB80'}} fontSize='13px'>Pizzas</Tab>
          <Tab _selected={{ color: '#3FCB80'}} fontSize='13px'>Tacos</Tab>
          <Tab _selected={{ color: '#3FCB80'}} fontSize='13px'>Boissons</Tab> */}
        </TabList>

        <TabPanels>
          {datas.map(categorie => {
            <TabPanel className='Nouveautés' >
              <Heading 
                as='h5' 
                fontSize='15px' 
                textAlign='start' 
                borderBottom='1px solid #F5F5F5' 
                mb='10px'
                pb='3px'
              >
                {categorie.name}
              </Heading>
              
              <Box className={`${categorie.name != 'Boissons' ? '' : 'flex flex-wrap justify-center px-[25px]'}`}  >
                {data2.map(menu => {
                  if(menu.categorie.name == categorie.name) {
                    if(categorie.name != 'Boissons') {
                      <ProductModal />
                    } else {
                      <DrinkModal src={`/./upload/${menu.medias}`} price={menu.price} name={menu.name} />
                    }
                  }
                })}
                {/* <ProductModal />
                <ProductModal />
                <ProductModal /> */}
              </Box>
            </TabPanel>
          })}
          
          {/* <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          
          <TabPanel className='Boissons'>
            <Heading 
              as='h5' 
              fontSize='15px' 
              borderBottom='1px solid #F5F5F5' 
              mb='10px'
              pb='3px'
            >
              Boissons
            </Heading>
            <Box className='Boissons' display='flex' flexWrap='wrap' justifyContent='center' px='25px' flex>
              <DrinkModal src='/./assets/WOCO_30_PACKSHOT_0.png' price='1.500' name='World Cola 35cl' />
              <DrinkModal src='/./assets/WOCO_30_PACKSHOT_0.png' price='1.500' name='World Cola 35cl' />
              <DrinkModal src='/./assets/WOCO_30_PACKSHOT_0.png' price='1.500' name='World Cola 35cl' />
              <DrinkModal src='/./assets/WOCO_30_PACKSHOT_0.png' price='1.500' name='World Cola 35cl' />
            </Box>
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Box>
  )
};

export default MainSingleRestaurant;
