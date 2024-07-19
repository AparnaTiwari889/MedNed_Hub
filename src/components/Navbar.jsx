import React from 'react'
import { Flex,Box,Heading} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Flex gap="10px" padding="10px" color="black" bg="white" boxShadow={"lg"} justifyContent={"space-between"} background={"rgb(61,178,255)"}>
    <Flex >
        <Box className='tracking-in-expand '>
            <NavLink to="/"><Heading color={"white"}>MedNedHub</Heading></NavLink>
        </Box>

    </Flex>
    <Flex justifyContent={"space-evenly"} gap={"20px"} padding={"10px"} topMargin={"10px"} color={"white"}>
        
    <Box>
            <NavLink to="/productpage"> ProductPage </NavLink>
        </Box>
       
        <Box>
            <NavLink to="/loginpage"> LoginPage </NavLink>
        </Box>

        </Flex>
    
    </Flex>
    
    </>
  )
}

export default Navbar
