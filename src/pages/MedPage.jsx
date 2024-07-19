// import { Box } from '@chakra-ui/react'
// import React from 'react'
// import MedicinePage from './MedicinePage'


// const MedPage = () => {
//   console.log("MedPage rendered");
//   return (
//     <Box>
//         <MedicinePage/>
//     </Box>
//   )
// }

// export default MedPage
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import MedicinePage from './MedicinePage';
import MedTextCard from '../components/MedTextSlider';

const MedPage = () => {
  console.log("MedPage rendered");
  return (
    <Box>
      
      <Box >
        <MedTextCard/>
      </Box>
      <Box marginTop={"50px"}>
      <Heading color={"rgb(79,88,94)"}>What our customers have to say....</Heading>
      </Box>

      <MedicinePage />
    </Box>
  );
};

export default MedPage;
