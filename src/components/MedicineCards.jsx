import { Box } from '@chakra-ui/react';
import React from 'react';
import { Card, CardBody, Image } from '@chakra-ui/react';

const MedicineCards = ({ item }) => {
  return (
    <Box width="100%">
      <Card
        maxWidth="400px"
        width="100%"
        height="fit-content"
        boxShadow="lg"
        borderRadius="md"
        overflow="hidden"
        _hover={{
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <CardBody padding="0">
          <Image
            src={item["Image1"]}
            alt={item.alt}
            borderRadius="md"
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </CardBody>
      </Card>
    </Box>
  );
};

export default MedicineCards;
