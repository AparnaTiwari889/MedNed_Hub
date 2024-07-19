import React from "react";
import ValueStoreBanner from "../components/ValueStoreBanner";
import { Box, Image, Heading} from "@chakra-ui/react";
import HealthCard from "../components/HealthCard";

const ValueStorePage = () => {
  return (
    <>
    <Box>
      <ValueStoreBanner />
      <Box textAlign={"center"} margin={"auto"} padding={"10px"} >
      <Heading>Value Store</Heading>
      </Box>
     
<HealthCard/>
<Box margin={"auto"} padding={"10px"} width={"100%"}>
<Image src='https://demo2.wpthemego.com/themes/sw_pharxtore/intro/images/admin/bg-admin.png'/>
</Box>
     
    </Box>
    </>
  );
};

export default ValueStorePage;
