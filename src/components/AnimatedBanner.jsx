import React from "react";
import { Box, Image, Text, Flex, Heading, keyframes } from "@chakra-ui/react";

// Define keyframes for animations
const slideRight = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideFwdLeft = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const AnimatedBanner = () => {
  return (
    <Box position="relative" mt="10px" mb="80px">
      <Image
        width="100%"
        height="100%"
        background="rgb(61,178,255)"
        objectFit="cover"
        src="https://demo2.wpopal.com/pharmacy2/wp-content/uploads/2022/03/rev_home6.png"
        alt="banner"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          margin="20px"
          padding="40px"
          gap="10px"
          align="center"
          justify="center"
        >
          <Box
            animation={`${slideRight} 1s ease-out`}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: "20px", md: "0" }}
          >
            <Text color="white" fontSize={{ base: "md", lg: "lg" }}>
              From MedNedHub Store
            </Text>
            <Heading color="white" size={{ base: "md", lg: "lg" }}>
              Blood Pressure Monitor
            </Heading>
          </Box>

          <Box animation={`${slideFwdLeft} 1s ease-out`}>
            <Image
              display="block"
              margin="auto"
              width={{ base: "100%", md: "800px" }}
              src="https://demo2.wpopal.com/pharmacy2/wp-content/uploads/2022/03/rev_home6_1.png"
              alt="Blood Pressure Monitor"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AnimatedBanner;
