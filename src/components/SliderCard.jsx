import React from 'react'
import { Card, Stack, Heading, Text, Button, CardBody, CardFooter, Box, Image } from '@chakra-ui/react'

const SliderCard = ({item}) => {
  return (
   <Box margin="auto" padding="10px" background={"rgb(61,178,255)"}>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  maxW="3xl"
>
  <Image
     maxHeight="600px"  
    sizes='(max-width: 900px) 500vw, 900px'
    src={item["Image"]}
    alt='Caffe Latte'
    maxWidth="400px" // Adjust maximum width of the image
  />

  <Stack>
    <CardBody>
      <Heading size='md'></Heading>

    
    </CardBody>

    <CardFooter>
     
    </CardFooter>
  </Stack>
</Card>
   </Box>
  )
}

export default SliderCard;
