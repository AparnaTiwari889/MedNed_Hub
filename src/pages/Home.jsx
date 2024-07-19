import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Slider from '../components/Slider';
import Banner from '../components/Banner';
import MedicinePage from './MedicinePage';
import ChooseUS from '../components/ChooseUS';
import { NavLink, useNavigate } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/MedPage');
  };

  const cardItems = [
    { name: "Medicine", image: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0", onClick: handleImageClick, link: "" },
    { name: "Test Lab", image: "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0", link: "/Testlab" },
    { name: "Health and Care", image: "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0", link: "/Healthcare" },
    { name: "Health Blogs", image: "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0", link: "/HealthBlogs" },
    { name: "PLUS", image: "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0", link: "/Plus", extraText: "SAVE 5% EXTRA" },
    { name: "Offers", image: "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0", link: "/Offers" },
    { name: "Value Store", image: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0", link: "/ValueStore", extraText: "UPTO 50% OFF" }
  ];

  return (
    <>
    
      <Box className='scale-up-hor-center' w={'100%'} mt={'30px'} p={'10px'} bg={"white"} color={"white"} background={'rgb(241, 241, 241)'} margin={'auto'} padding={'10px'} width={'100%'}>
        <Box mt={'30px'}>
          <Flex mt={'10px'} gap="20px" margin={'auto'} p={'10px'} wrap="wrap" justifyContent="center">
            {cardItems.map((item, index) => (
              item.link ? (
                <NavLink to={item.link} key={index}>
                  <Box
                    boxShadow={"md"}
                    bg={"rgb(61,178,255)"}
                    textAlign="center"
                    w="150px"
                    h="200px"
                    cursor="pointer"
                  >
                    <Image borderBottom={"1px solid white"} width="150px" height="auto" src={item.image} />
                    <Heading size="sm" m={"auto"} p={"10px"}>{item.name}</Heading>
                    {item.extraText && <Text color={'red'}>{item.extraText}</Text>}
                  </Box>
                </NavLink>
              ) : (
                <Box
                  boxShadow={"md"}
                  bg={"rgb(61,178,255)"}
                  textAlign="center"
                  w="150px"
                  h="200px"
                  cursor="pointer"
                  onClick={item.onClick}
                  key={index}
                >
                  <Image borderBottom={"1px solid white"} width="150px" height="auto" src={item.image} />
                  <Heading size="sm" m={"auto"} p={"10px"}>{item.name}</Heading>
                  {item.extraText && <Text color={'red'}>{item.extraText}</Text>}
                </Box>
              )
            ))}
          </Flex>
        </Box>
      </Box>

      <Slider />
      <Banner />
      <MedicinePage />
      <NewsCard />
      <ChooseUS />

      <Box margin={"auto"} p={"10px"} mt={"30px"} bg={"rgb(255,255,255)"}>
        <Heading size={"sm"}>Top-Tests we cover:</Heading>
        <Text>
          Free Thyroxine (FT4) Test | Anti Chlamydia Antibody - IgG Test | Urine Culture Test | Protein Creatinine Ratio (Urine) Test |
          Tissue Transglutaminase - IgA Test | Rh Antibody Titre Test | RA Factor Test | Rubella - IgM Test | Herpes Simplex Virus Test |
          PPBS Test | Vitamin Profile Test | Coombs Test | Urinary Spot Creatinine Test | Glucose-6-phosphate dehydrogenase (G6PD) Test |
          HCV Test | Immunoglobulin G (IgG) Test | Cardiolipin - IgA Test | Culture Stool Test | FBS Test | Gram Stain Test
        </Text>

        <Heading size={"sm"}>Top-Selling Healthcare Products:</Heading>
        <Text>
          Cremaffin Syrup | Aptivate Syrup | Ethiglo Face Wash | Revital H Men | Becozym C Forte | Volini Gel | M2-Tone Tablets |
          Scalpe Plus Anti Dandruff Shampoo | Bold Care Extend Delay Spray | Himalaya Tentex | Abzorb Antifungal Soap | Vwash Plus |
          B-Protin Powder | Enterogermina Probiotic | Durex Play Lubricant | Eno Fruit Sachet | Speman Tablets | Prohance D Vanilla Powder |
          Hamdard Hamdogen for men | Charak Addyzoa CAPS
        </Text>

        <Heading size={"sm"}>Top-Selling Medicines:</Heading>
        <Text>
          Diamicron XR | Gemcal Capsules | Rozavel 10 | Tresiba Penfill INJ | Brilinta 90 | Actrapid HM | Uprise D3 | Mesacol OD |
          Huminsulin INJ | Flavedon MR 35 | Pantocid DSR | Oxra 10 | Januvia 100 | Toujeo INJ | Minipress Xl 5 | Concor 5 |
          Novorapid Penfill INJ | Nikoran 5 | Duolin 3 | Silodal 8
        </Text>

        <Heading size={"sm"}>Top-Searched Medicines:</Heading>
        <Text>
          Norflox TZ | Deriphyllin | Meftal Spas | Neosporin | Signoflam | Wikoryl 10 | Drotin 40 | Alex Syrup | Folvite | Azee |
          Mucinac 600 | Nucoxia MR | No Scars Cream | Flexon MR | Zytee L Tube | Meftal P | Bifilac | Skinshine Tube | Janumet Tablet | Norflox 400
        </Text>

        <Heading size={"sm"}>COVID-19 Preventatives:</Heading>
        <Text>
          Hand Gloves, Disinfectants, Thermometers & more! | N95 Masks | Hand Sanitizers
        </Text>
      </Box>
    </>
  );
}

export default Home;
