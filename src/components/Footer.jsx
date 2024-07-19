import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box mt="80px" p="40px" bg="rgb(241, 241, 241)" color="black">
      <Flex justify="space-between" flexWrap="wrap" gap="40px">
        <Box flex="1" minW="200px">
          <Heading size="md" mb="10px">Company</Heading>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>About Us</Text>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>Careers</Text>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>Blog</Text>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>Partner With MedNedHub</Text>
          <Text color="rgb(102, 102, 102)" _hover={{ color: 'black', cursor: 'pointer' }}>Sell at MedNedHub</Text>
        </Box>
        
        <Box flex="1" minW="200px">
          <Heading size="md" mb="10px">Our Services</Heading>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>Order Medicine</Text>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>Healthcare Products</Text>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>Lab Tests</Text>
          <Text color="rgb(102, 102, 102)" _hover={{ color: 'black', cursor: 'pointer' }}>Find Nearest Collection Centre</Text>
        </Box>

        <Box flex="1" minW="200px">
          <Heading size="md" mb="10px">Contact Us</Heading>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>Customer Support</Text>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>FAQs</Text>
          <Text color="rgb(102, 102, 102)" mb="5px" _hover={{ color: 'black', cursor: 'pointer' }}>Shipping & Returns</Text>
          <Text color="rgb(102, 102, 102)" _hover={{ color: 'black', cursor: 'pointer' }}>Privacy Policy</Text>
        </Box>

        <Box flex="1" minW="200px">
          <Heading size="md" mb="10px">Follow Us On</Heading>
          <Flex justify="start" gap="10px">
            <Image src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=64x0" alt="Instagram" boxSize="40px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=64x0" alt="Facebook" boxSize="40px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=64x0" alt="YouTube" boxSize="40px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}/>
            <Image src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=64x0" alt="Twitter" boxSize="40px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}/>
          </Flex>
        </Box>
      </Flex>
      <Heading size="md" mt="40px" mb="20px">Our Payment Partners</Heading>
      <Flex justify="space-evenly" flexWrap="wrap" gap="10px">
        <Image src='https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0' alt="GPay" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0' alt="Paytm" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0' alt="PhonePe" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0' alt="Amazon Pay" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0' alt="MobiKwik" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0' alt="Ola Money" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0' alt="Maestro" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0' alt="MasterCard" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0' alt="Visa" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
        <Image src='https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0' alt="RuPay" boxSize="60px" _hover={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }} />
      </Flex>
    </Box>
  )
}

export default Footer
