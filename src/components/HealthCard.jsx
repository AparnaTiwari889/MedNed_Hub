import { Box, Flex, Image, Text, Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';

const HealthCard = () => {
  const cardData = [
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    },
    {
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png",
      lastUpdated: "Last updated 3 mins ago"
    }
    
  ];

  return (
    <>
      <Flex direction="column" p="10px" align="center">
        <Grid templateColumns="repeat(3, 1fr)" gap="10px">
          {cardData.map((card, index) => (
            <GridItem key={index} maxW="540px">
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">
                <Flex>
                  <Box flexShrink={0}>
                    <Image src={card.imgSrc} alt={card.title} borderRadius="lg" />
                  </Box>
                  <Box p="6">
                    <Heading as="h5" size="sm" mb="2">{card.title}</Heading>
                    <Text mb="4">{card.text}</Text>
                    <Text fontSize="sm" color="gray.500">{card.lastUpdated}</Text>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default HealthCard;
