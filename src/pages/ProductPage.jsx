import React from 'react';
import { Box, Flex, Heading, Image, Text, Stack, Button, SimpleGrid, Link } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';
import Banner from '../components/Banner';
import ChooseUS from '../components/ChooseUS';
import NewsCard from '../components/NewsCard';

const HomePage = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/MedPage');
  };

  return (
    <>
     
          
      

      <Box bg={"white"} mt={'30px'} p={'10px'}>
        <Heading size="lg" textAlign="center" mb={'20px'} color={'black'}>Top Products</Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {/* Example Product Cards */}
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image height='400px' borderBottom={"1px solid #eee"} width="100%"  src="https://cdn01.pharmeasy.in/dam/products_otc/J58419/softovac-liquifibre-mango-flavour-sugar-free-bottle-of-225ml-liquid-6.1-1714735927.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 1</Heading>
            <Text mt={2}>Description of Product 1</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cdn01.pharmeasy.in/dam/products_otc/V70393/pharmeasy-pill-box-organizer-white-6.01-1715862610.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>

          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cdn01.pharmeasy.in/dam/products_otc/D37576/nycil-germ-expert-classic-powder-150-g-free-50-g-nycil-powder-150-g-2-1681722325.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cdn01.pharmeasy.in/dam/products_otc/K07568/hairbless-health-supplement-bottle-of-30-tablets-1-1685601651.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cdn01.pharmeasy.in/dam/products_otc/R80446/revital-cal-500mg-strip-of-15-tablets-6.1-1713858040.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cdn01.pharmeasy.in/dam/products_otc/D04145/dr-morepen-blood-pressure-monitor-model-bp-14-2-1713857489.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>

          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image height='400px' borderBottom={"1px solid #eee"} width="100%"  src="https://cdn01.pharmeasy.in/dam/products_otc/U23304/baidyanath-khadirarishta-helps-in-blood-purification-skin-and-intestinal-problems-2-1664626400.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>

          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height='400px'  src="https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>

          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height='400px' src="https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>

          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height='400px' src="https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height='400px' src="https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>

          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cms-contents.pharmeasy.in/carousel_item/c9fc0cd6ef6-Revital-min.png?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>
          <Box boxShadow={"md"} bg={"white"} textAlign="center" p={5}  style={{ height: "400px" }}>
            <Image borderBottom={"1px solid #eee"} width="100%" height="auto" src="https://cms-contents.pharmeasy.in/carousel_item/e9f676e803b-Polycrol.jpg?dim=1440x0" />
            <Heading size="md" mt={4}>Product 2</Heading>
            <Text mt={2}>Description of Product 2</Text>
            <Button mt={4} colorScheme="blue">Buy Now</Button>
          </Box>


          {/* Add more product cards as needed */}
        </SimpleGrid>
      </Box>
      <Box mt={'30px'}>
        <Slider />
        <Banner />
      </Box>

      <Box mt={'30px'}>
        <NewsCard />
        <ChooseUS />
      </Box>

      <Box margin={"auto"} p={"10px"} mt={"30px"} bg={"rgb(255,255,255)"}>
        <Heading size={"sm"}>Top Tests we cover:</Heading>
        <Text>
          Free Thyroxine (FT4) Test | Anti Chlamydia Antibody - IgG Test | Urine Culture Test | Protein Creatinine Ratio (Urine) Test | Tissue Transglutaminase - IgA Test | Rh Antibody Titre Test | RA Factor Test | Rubella - IgM Test | Herpes Simplex Virus Test | PPBS Test | Vitamin Profile Test | Coombs Test | Urinary Spot Creatinine Test | Glucose-6-phosphate dehydrogenase (G6PD) Test | HCV Test | Immunoglobulin G (IgG) Test | Cardiolipin - IgA Test | Culture Stool Test | FBS Test | Gram Stain Test
        </Text>

        <Heading size={"sm"} mt={4}>Top-Selling Healthcare Products:</Heading>
        <Text>
          Cremaffin Syrup | Aptivate Syrup | Ethiglo Face Wash | Revital H Men | Becozym C Forte | Volini Gel | M2-Tone Tablets | Scalpe Plus Anti Dandruff Shampoo | Bold Care Extend Delay Spray | Himalaya Tentex | Abzorb Antifungal Soap | Vwash Plus | B-Protin Powder | Enterogermina Probiotic | Durex Play Lubricant | Eno Fruit Sachet | Speman Tablets | Prohance D Vanilla Powder | Hamdard Hamdogen for men | Charak Addyzoa CAPS
        </Text>

        <Heading size={"sm"} mt={4}>Top-Selling Medicines:</Heading>
        <Text>
          Diamicron XR | Gemcal Capsules | Rozavel 10 | Tresiba Penfill INJ | Brilinta 90 | Actrapid HM | Uprise D3 | Mesacol OD | Huminsulin INJ | Flavedon MR 35 | Pantocid DSR | Oxra 10 | Januvia 100 | Toujeo INJ | Minipress Xl 5 | Concor 5 | Novorapid Penfill INJ | Nikoran 5 | Duolin 3 | Silodal 8
        </Text>

        <Heading size={"sm"} mt={4}>Top-Searched Medicines:</Heading>
        <Text>
          Norflox TZ | Deriphyllin | Meftal Spas | Neosporin | Signoflam | Wikoryl 10 | Drotin 40 | Alex Syrup | Folvite | Azee | Mucinac 600 | Nucoxia MR | No Scars Cream | Flexon MR | Zytee L Tube | Meftal P | Bifilac | Skinshine Tube | Janumet Tablet | Norflox 400
        </Text>

        <Heading size={"sm"} mt={4}>COVID-19 Preventatives:</Heading>
        <Text>
          Hand Gloves, Disinfectants, Thermometers & more! | N95 Masks | Hand Sanitizers
        </Text>
      </Box>
    </>
  );
};

export default HomePage;
