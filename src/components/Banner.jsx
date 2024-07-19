// import { Box, Image} from '@chakra-ui/react'
// import React from 'react'

// const Banner = ({url}) => {
    
//   return (
  
  
// <Box>
//     <Image background={"rgb(215,250,248)"} src={url} alt="banner"/>
//  </Box> 




//   )
// }

// export default Banner
{/* // <Box>
    //     <Image background={"rgb(215,250,248)"} src={url} alt="banner"/>
    // </Box> */}

  

    import { Box, Flex, Image, Text } from '@chakra-ui/react';
    import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Box position={"relative"} marginTop={"80px"} marginBottom={"80px"}>
      <Image background={"rgb(61,178,255)"} src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100" alt="banner" />
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
        <Text fontSize="4xl" fontWeight="bold" color="black" mb={4}>Simplifying</Text>
        <Text fontSize="4xl" fontWeight="bold" color="black" mb={4}>Healthcare</Text>
        <Text fontSize="2xl" fontWeight="semibold" color="black" mb={8}>Impacting Lives</Text>
        <Text fontSize="lg" color="black">Download the App for Free</Text><br/>
        <Flex gap={"20px"}>

      <Link to={"https://pharmeasy.sng.link/Ahz6r/exsh?_dl=push.pharmeasy.clevertap%3A%2F%2Fdeeplink%2Fhome&_smtype=3&_force_redirect=0"}>  <Image src='https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=360x0'/></Link>

       <Link to={"https://pharmeasy.sng.link/Ahz6r/exsh?_dl=push.pharmeasy.clevertap%3A%2F%2Fdeeplink%2Fhome&_smtype=3&_force_redirect=0"}><Image src='https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=360x0'/></Link> 
        </Flex>


      </Box>
    </Box>
  );
};

export default Banner;
