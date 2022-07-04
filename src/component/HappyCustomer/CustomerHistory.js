import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerHistoryItem from "./CustomerHistoryItem";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-lazy-load-image-component/src/effects/blur.css";

function CustomerHistory() {
  var settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
  };
  var settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  };
  let navigate = useNavigate();
  return (
    <>
      <Box display={["block", "block", "none"]}>
        <Slider {...settings1}>
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
        </Slider>
      </Box>

      <Box display={["none", "none", "block", "block", "none"]}>
        <Slider {...settings2}>
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
        </Slider>
      </Box>

      <Box display={["none", "none", "none", "none", "block"]}>
        <Slider {...settings3}>
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
          <CustomerHistoryItem />
        </Slider>
      </Box>
    </>
  );
}

export default CustomerHistory;
