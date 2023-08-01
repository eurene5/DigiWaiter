// Carousel.js
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RestaurantCard } from './restaurantCard';
export const RestaurantCarousel = () => {
  // Configuration des options du carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
            autoplay : true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box mt="10px">
      <Slider {...settings}>
        <RestaurantCard name="Extra Pizza" src="/./assets/indexImages/extraPizza.png" href="/" note={"4.1 - Bien"}/>
        <RestaurantCard name="Okeanos" src="/./assets/indexImages/okeanos.png" href="/" note={"4.1 - Bien"}/>
        <RestaurantCard name="Reg'Halal" src="/./assets/indexImages/regHallal.png" href="/" note={"4.1 - Bien"}/>
      </Slider>
    </Box>
  );
};


