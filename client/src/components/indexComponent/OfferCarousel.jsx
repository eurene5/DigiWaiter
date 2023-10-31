
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OfferCard } from './offerCard';
export const OfferCarousel = () => {
  // Configuration des options du carousel
  const settings = {
    dots: false,
    adaptiveHeight:true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
            centerPadding: "0px",
            autoplay : true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box w={"98%"} mt="10px">
      <Slider {...settings}>
        <OfferCard name="burger"src="/./assets/burger.jpg" href="/" />
        <OfferCard name="panini" src="/./assets/panini.jpg" href="/" />
        <OfferCard name="burger"src="/./assets/burger.jpg" href="/" />
        <OfferCard name="panini" src="/./assets/panini.jpg" href="/" />
      </Slider>
    </Box>
  );
};
