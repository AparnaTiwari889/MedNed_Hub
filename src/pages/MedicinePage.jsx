import React from 'react';
import MedicineCards from '../components/MedicineCards';
import MedicineProduct from '../../database/medicine';
import { Box, Heading } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HealthAccor from '../components/HealthAccor';

const MedicinePage = () => {
  return (
    <>
      <Box mt="40px" bg="rgb(61,178,255)" p="10px" w="100%">
        <Heading textAlign="center" color="white" my="20px">Our Medicines</Heading>
        <Box mt="40px">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            style={{ width: "80%", margin: "auto", paddingBottom: "30px" }}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              MedicineProduct.map((item, index) => (
                <SwiperSlide key={index}>
                  <MedicineCards item={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Box>
       
      </Box>

      <HealthAccor/>
    </>
  );
}

export default MedicinePage;
