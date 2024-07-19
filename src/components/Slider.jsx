
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import SliderCard from './SliderCard';
import SliderProduct from '../../database/slider';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Box } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <>
    <Box className='scale-up-right' marginTop={"80px"} background={" rgb(61,178,255)"} padding="10px"  width="100%" >
      <Box marginTop={"80px"} >
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{width:"80%", margin:"auto",   paddingBottom:"30px"}}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation
   
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

    >
       {
          SliderProduct.map((item)=>(
            <SwiperSlide><SliderCard item={item} /></SwiperSlide>
          ))
        }
    </Swiper>
    </Box>
    </Box>
    </>
  );
};




