import { Box, Flex, Heading, Image, Text  } from '@chakra-ui/react'
import React from 'react'

const ChooseUS = () => {
  return (
   <Box bg={'rgb(248,249,255)'} margin={"auto"} padding={"10px"} gap={"10px"} marginTop={"30px"} >
    <Heading size={"lg"}> Why Choose US ? </Heading>
    <Flex>
        <Box>
          <Image width="156px" src='https://assets.pharmeasy.in/apothecary/images/family.svg?dim=256x0'/>
        </Box>
           <Box marginTop={"35px"} padding={"10px"} ><Heading size={"lg"}>32 Million+</Heading><Text style={{marginTop:"10px"}}>Registered users as of Mar 31, 2022</Text></Box>

           <Box>
          <Image width="156px" src='https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=256x0'/>
        </Box>
           <Box marginTop={"35px"} padding={"10px"} ><Heading size={"lg"}>36 Million+</Heading><Text style={{marginTop:"10px"}}>Orders on Pharmeasy till date</Text></Box>

           <Box>
          <Image width="156px" src='https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=256x0'/>
        </Box>
           <Box marginTop={"35px"} padding={"10px"} ><Heading size={"lg"}>99000+</Heading><Text style={{marginTop:"10px"}}>Unique items sold last 3 months</Text></Box>

           <Box>
          <Image width="156px" src='https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=256x0'/>
        </Box>
           <Box marginTop={"35px"} padding={"10px"} ><Heading size={"lg"}>19500+</Heading><Text style={{marginTop:"10px"}}>Pin codes serviced last 3 months</Text></Box>
        
    </Flex>
   </Box>
  )
}

export default ChooseUS
