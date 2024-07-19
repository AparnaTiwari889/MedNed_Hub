import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <Box position="relative" width="100%" padding="20px">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[
          {
            img: "https://demo2.wpopal.com/pharmacy2/wp-content/uploads/2022/03/blog_6-820x580.jpg",
            title: "Why Communication Is Important in Pharmacy Leadership",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          },
          {
            img: "https://demo2.wpopal.com/pharmacy2/wp-content/uploads/2022/03/blog_2-820x580.jpg",
            title: "Beatae vitae dicta sunt explicabo",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          },
          {
            img: "https://demo2.wpopal.com/pharmacy2/wp-content/uploads/2022/03/blog_1-820x580.jpg",
            title: "Pharmacy Technology: What You Need to Know",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          },
          {
            img: "https://demo2.wpopal.com/pharmacy2/wp-content/uploads/2022/03/blog_6-820x580.jpg",
            title: "Navigating DSCSA Compliance: Finding the Right Partner",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          },
          {
            img: "https://demo2.wpopal.com/pharmacy2/wp-content/uploads/2022/03/blog_6-820x580.jpg",
            title: "Why Communication Is Important in Pharmacy Leadership",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          },
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              className="card"
              width="18rem"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              margin="auto"
              backgroundColor="white"
            >
              <img src={item.img} className="card-img-top" alt={item.title} />
              <Box className="card-body" padding="10px">
                <Box className="card-title" as="h5" marginBottom="10px" fontWeight="bold">
                  {item.title}
                </Box>
                <Box className="card-text">{item.text}</Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" style={{ color: 'black' }}></div>
        <div className="swiper-button-prev" style={{ color: 'black' }}></div>
      </Swiper>
    </Box>
  );
};

export default Carousel;
