import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Flex, Image, Icon } from "@chakra-ui/react";
import sliderJson from "../../Slider.json";
import { VscInfo } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-lazy-load-image-component/src/effects/blur.css";

function OtherMotor() {
  var settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
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
    slidesToShow: 1,
  };
  let navigate = useNavigate();
  return (
    <>
      <Box
        marginTop={20}
        marginX={["5", "5", "5", "200", "250"]}
        paddingTop={5}
      >
        <Text fontWeight="bold" fontSize="3xl" align="center" marginBottom={20}>
          Other Motor You May Like
        </Text>
        <Box display={["none", "none", "none", "none", "block"]}>
          <Slider {...settings1}>
            {sliderJson.map((motor) => {
              return (
                <Box key={motor.id} borderRadius={5}>
                  <Box marginRight={5}>
                    <Carousel
                      showThumbs={false}
                      showArrows={true}
                      // onChange={onChange}
                      // onClickItem={onClickItem}
                      // onClickThumb={onClickThumb}
                      alignSelf="center"
                      infiniteLoop={false}
                    >
                      <Box
                        onClick={() => {
                          navigate(`/show-motor`);
                        }}
                      >
                        <Image
                          src={motor.image}
                          alt={motor.name}
                          w="100%"
                          h="350px"
                          borderRadius={5}
                        />
                      </Box>
                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image
                          src={motor.image2}
                          alt={motor.name}
                          w="100%"
                          borderRadius={5}
                        />
                      </Box>

                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image
                          src={motor.image3}
                          alt={motor.name}
                          w="100%"
                          borderRadius={5}
                        />
                      </Box>
                    </Carousel>
                  </Box>

                  <Flex
                    flexDirection="column"
                    marginRight={5}
                    bgColor="white"
                    borderBottomRadius={15}
                  >
                    <Flex justifyContent="space-between" paddingX="3">
                      <Text marginTop="6" fontSize="xl" alignSelf="center">
                        {motor.year} {motor.brands}
                      </Text>
                      <Icon as={FcLikePlaceholder} alignSelf="center" />
                    </Flex>
                    <Text fontSize="lg" paddingX="3" paddingTop={2}>
                      {motor.name} {motor.cc}
                    </Text>
                    <Flex paddingX="3" gap={2} paddingTop={2}>
                      <Text
                        paddingRight={2}
                        fontSize="xs"
                        alignContent="center"
                      >
                        {motor.howKm}
                      </Text>
                      <Box marginY="auto">
                        <hr
                          style={{
                            height: "1px",
                            color: "black",
                            width: "12px",
                            transform: "rotate(90deg)",
                          }}
                        />
                      </Box>
                      <Text paddingRight={2} fontSize="xs">
                        {motor.auto}
                      </Text>
                      <Box marginY="auto">
                        <hr
                          style={{
                            height: "1px",
                            color: "black",
                            width: "12px",
                            transform: "rotate(90deg)",
                          }}
                        />
                      </Box>
                      <Text paddingRight={2} fontSize="xs">
                        {motor.place}
                      </Text>
                    </Flex>

                    <Flex
                      marginTop={1}
                      alignItems="center"
                      paddingX="3"
                      paddingTop={2}
                    >
                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                        marginRight={1}
                      >
                        {motor.power}
                      </Text>

                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                        marginRight={1}
                      >
                        {motor.torque}
                      </Text>

                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                      >
                        {motor.fuel}
                      </Text>
                    </Flex>

                    <Flex
                      justifyContent="space-between"
                      paddingX="3"
                      paddingY={2}
                    >
                      <Flex marginRight={2}>
                        <Text
                          fontSize="lg"
                          alignSelf="center"
                          marginRight={1}
                          color="red"
                        >
                          RM
                        </Text>
                        <Text
                          fontSize="2xl"
                          alignSelf="center"
                          color="red"
                          fontWeight="bold"
                        >
                          {motor.price}
                        </Text>
                      </Flex>

                      <Flex>
                        <Text
                          fontSize="md"
                          alignSelf="center"
                          marginRight={0.5}
                          color="red"
                        >
                          RM {motor.payMo} /mo
                        </Text>
                        <Box alignSelf="center">
                          <Icon as={VscInfo} />
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          </Slider>
        </Box>
        <Box display={["none", "none", "block","block","none"]}>
          <Slider {...settings2}>
            {sliderJson.map((motor) => {
              return (
                <Box key={motor.id} borderRadius={5}>
                  <Box marginRight={5}>
                    <Carousel
                      showThumbs={false}
                      showArrows={true}
                      // onChange={onChange}
                      // onClickItem={onClickItem}
                      // onClickThumb={onClickThumb}
                      alignSelf="center"
                      infiniteLoop={false}
                    >
                      <Box
                        onClick={() => {
                          navigate(`/show-motor`);
                        }}
                      >
                        <Image
                          src={motor.image}
                          alt={motor.name}
                          w="100%"
                          h="350px"
                          borderRadius={5}
                        />
                      </Box>
                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image
                          src={motor.image2}
                          alt={motor.name}
                          w="100%"
                          borderRadius={5}
                        />
                      </Box>

                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image
                          src={motor.image3}
                          alt={motor.name}
                          w="100%"
                          borderRadius={5}
                        />
                      </Box>
                    </Carousel>
                  </Box>

                  <Flex
                    flexDirection="column"
                    marginRight={5}
                    bgColor="white"
                    borderBottomRadius={15}
                  >
                    <Flex justifyContent="space-between" paddingX="3">
                      <Text marginTop="6" fontSize="xl" alignSelf="center">
                        {motor.year} {motor.brands}
                      </Text>
                      <Icon as={FcLikePlaceholder} alignSelf="center" />
                    </Flex>
                    <Text fontSize="lg" paddingX="3" paddingTop={2}>
                      {motor.name} {motor.cc}
                    </Text>
                    <Flex paddingX="3" gap={2} paddingTop={2}>
                      <Text
                        paddingRight={2}
                        fontSize="xs"
                        alignContent="center"
                      >
                        {motor.howKm}
                      </Text>
                      <Box marginY="auto">
                        <hr
                          style={{
                            height: "1px",
                            color: "black",
                            width: "12px",
                            transform: "rotate(90deg)",
                          }}
                        />
                      </Box>
                      <Text paddingRight={2} fontSize="xs">
                        {motor.auto}
                      </Text>
                      <Box marginY="auto">
                        <hr
                          style={{
                            height: "1px",
                            color: "black",
                            width: "12px",
                            transform: "rotate(90deg)",
                          }}
                        />
                      </Box>
                      <Text paddingRight={2} fontSize="xs">
                        {motor.place}
                      </Text>
                    </Flex>

                    <Flex
                      marginTop={1}
                      alignItems="center"
                      paddingX="3"
                      paddingTop={2}
                    >
                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                        marginRight={1}
                      >
                        {motor.power}
                      </Text>

                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                        marginRight={1}
                      >
                        {motor.torque}
                      </Text>

                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                      >
                        {motor.fuel}
                      </Text>
                    </Flex>

                    <Flex
                      justifyContent="space-between"
                      paddingX="3"
                      paddingY={2}
                    >
                      <Flex marginRight={2}>
                        <Text
                          fontSize="lg"
                          alignSelf="center"
                          marginRight={1}
                          color="red"
                        >
                          RM
                        </Text>
                        <Text
                          fontSize="2xl"
                          alignSelf="center"
                          color="red"
                          fontWeight="bold"
                        >
                          {motor.price}
                        </Text>
                      </Flex>

                      <Flex>
                        <Text
                          fontSize="md"
                          alignSelf="center"
                          marginRight={0.5}
                          color="red"
                        >
                          RM {motor.payMo} /mo
                        </Text>
                        <Box alignSelf="center">
                          <Icon as={VscInfo} />
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          </Slider>
        </Box>

        <Box display={["block", "block", "none", "none", "none"]} marginX="10">
          <Slider {...settings3}>
            {sliderJson.map((motor) => {
              return (
                <Box key={motor.id} borderRadius={5}>
                  <Box marginRight={5}>
                    <Carousel
                      showThumbs={false}
                      showArrows={true}
                      // onChange={onChange}
                      // onClickItem={onClickItem}
                      // onClickThumb={onClickThumb}
                      alignSelf="center"
                      infiniteLoop={false}
                    >
                      <Box
                        onClick={() => {
                          navigate(`/show-motor`);
                        }}
                      >
                        <Image
                          src={motor.image}
                          alt={motor.name}
                          w="100%"
                          borderRadius={5}
                        />
                      </Box>
                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image
                          src={motor.image2}
                          alt={motor.name}
                          w="100%"
                          h={["300px"]}
                          borderRadius={5}
                        />
                      </Box>

                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image
                          src={motor.image3}
                          alt={motor.name}
                          w="100%"
                          borderRadius={5}
                        />
                      </Box>
                    </Carousel>
                  </Box>

                  <Flex
                    flexDirection="column"
                    marginRight={5}
                    bgColor="white"
                    borderBottomRadius={15}
                  >
                    <Flex justifyContent="space-between" paddingX="3">
                      <Text marginTop="6" fontSize="xl" alignSelf="center">
                        {motor.year} {motor.brands}
                      </Text>
                      <Icon as={FcLikePlaceholder} alignSelf="center" />
                    </Flex>
                    <Text fontSize="lg" paddingX="3" paddingTop={2}>
                      {motor.name} {motor.cc}
                    </Text>
                    <Flex paddingX="3" gap={2} paddingTop={2}>
                      <Text
                        paddingRight={2}
                        fontSize="xs"
                        alignContent="center"
                      >
                        {motor.howKm}
                      </Text>
                      <Box marginY="auto">
                        <hr
                          style={{
                            height: "1px",
                            color: "black",
                            width: "12px",
                            transform: "rotate(90deg)",
                          }}
                        />
                      </Box>
                      <Text paddingRight={2} fontSize="xs">
                        {motor.auto}
                      </Text>
                      <Box marginY="auto">
                        <hr
                          style={{
                            height: "1px",
                            color: "black",
                            width: "12px",
                            transform: "rotate(90deg)",
                          }}
                        />
                      </Box>
                      <Text paddingRight={2} fontSize="xs">
                        {motor.place}
                      </Text>
                    </Flex>

                    <Flex
                      marginTop={1}
                      alignItems="center"
                      paddingX="3"
                      paddingTop={2}
                    >
                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                        marginRight={1}
                      >
                        {motor.power}
                      </Text>

                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                        marginRight={1}
                      >
                        {motor.torque}
                      </Text>

                      <Text
                        padding={0.5}
                        fontSize="xs"
                        border="1px"
                        borderRadius={4}
                        color="blue.500"
                      >
                        {motor.fuel}
                      </Text>
                    </Flex>

                    <Flex
                      justifyContent="space-between"
                      paddingX="3"
                      paddingY={2}
                    >
                      <Flex marginRight={2}>
                        <Text
                          fontSize="lg"
                          alignSelf="center"
                          marginRight={1}
                          color="red"
                        >
                          RM
                        </Text>
                        <Text
                          fontSize="2xl"
                          alignSelf="center"
                          color="red"
                          fontWeight="bold"
                        >
                          {motor.price}
                        </Text>
                      </Flex>

                      <Flex>
                        <Text
                          fontSize="md"
                          alignSelf="center"
                          marginRight={0.5}
                          color="red"
                        >
                          RM {motor.payMo} /mo
                        </Text>
                        <Box alignSelf="center">
                          <Icon as={VscInfo} />
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default OtherMotor;
