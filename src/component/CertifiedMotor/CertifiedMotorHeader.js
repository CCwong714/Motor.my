import { Box, Flex, Heading, Text, Icon, Image, Grid } from "@chakra-ui/react";
import { TiTickOutline } from "react-icons/ti";
import CertifiedMotorShow from "./CertifiedMotorShow";
import React from "react";
import DSFV21 from "../../image/MotorPhoto/DucatiStreetfighterV2/Motor1.jpg";
import DSFV22 from "../../image/MotorPhoto/DucatiStreetfighterV2/Motor2.jpg";
import DSFV23 from "../../image/MotorPhoto/DucatiStreetfighterV2/Motor3.jpg";
import DMV21 from "../../image/MotorPhoto/DucatiMultistradaV2/Photo1.jpg";
import DMV22 from "../../image/MotorPhoto/DucatiMultistradaV2/Photo2.jpg";
import DMV23 from "../../image/MotorPhoto/DucatiMultistradaV2/Photo3.jpg";
import DSFV41 from "../../image/MotorPhoto/DucatiStreetfighterV4/photo1.jpg";
import DSFV42 from "../../image/MotorPhoto/DucatiStreetfighterV4/photo2.jpg";
import DSFV43 from "../../image/MotorPhoto/DucatiStreetfighterV4/photo3.jpg";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";
import sliderJson from "../../Slider.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { VscInfo } from "react-icons/vsc";

function CerdifiedMotorHeader() {
  let navigate = useNavigate();

  var settingsPhone = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  var settingsTab = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
  };
  var settingsPC = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  };
  return (
    <Box bgColor="blue.900" marginTop={14}>
      <Box paddingBottom="3" marginX={["2", "50", "100", "100", "200"]}>
        <Box paddingTop="30">
          <Heading align="center" color="white">
            Shop Motor Certified Motor
          </Heading>
        </Box>

        <Grid
          justifyContent="center"
          marginTop="2"
          marginX={["30", "50", "none", "none", "none"]}
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
          ]}
        >
          <Text marginRight="8" color="white" align={["left","left","left","left", "center"]}>
            <Icon as={TiTickOutline} /> 175-Point Inspection
          </Text>
          <Text marginRight="8" color="white" align={["left","left","left","left", "center"]}>
            <Icon as={TiTickOutline} /> Fixed Price, No Hidden Fees
          </Text>
          <Text marginRight="8" color="white" align={["left","left","left","left", "center"]}>
            <Icon as={TiTickOutline} /> 1-Year Warranty
          </Text>
          <Text marginRight="8" color="white" align={["left","left","left","left", "center"]}>
            <Icon as={TiTickOutline} /> 5-Day Money-back Guarantee
          </Text>
        </Grid>

        <Box
          w="100%"
          marginTop="5"
          marginBottom={2}
          display={["block", "block", "none"]}
        >
          <Slider {...settingsPhone}>
            {sliderJson.map((motor) => {
              return (
                <Box key={motor.id}>
                  <Box marginRight={4} bgColor="white">
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
                        />
                      </Box>
                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image src={motor.image2} alt={motor.name} w="100%" />
                      </Box>

                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image src={motor.image3} alt={motor.name} w="100%" />
                      </Box>
                    </Carousel>
                  </Box>

                  <Flex flexDirection="column" marginRight={4} bgColor="white">
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

        <Box
          w="100%"
          marginTop="5"
          marginBottom={2}
          display={["none", "none", "block", "none"]}
        >
          <Slider {...settingsTab}>
            {sliderJson.map((motor) => {
              return (
                <Box key={motor.id}>
                  <Box marginRight={4} bgColor="white">
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
                        />
                      </Box>
                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image src={motor.image2} alt={motor.name} w="100%" />
                      </Box>

                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image src={motor.image3} alt={motor.name} w="100%" />
                      </Box>
                    </Carousel>
                  </Box>

                  <Flex flexDirection="column" marginRight={4} bgColor="white">
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

        <Box
          w="100%"
          marginTop="5"
          marginBottom={2}
          display={["none", "none", "none", "block"]}
        >
          <Slider {...settingsPC}>
            {sliderJson.map((motor) => {
              return (
                <Box key={motor.id}>
                  <Box marginRight={4} bgColor="white">
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
                        />
                      </Box>
                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image src={motor.image2} alt={motor.name} w="100%" />
                      </Box>

                      <Box
                        onClick={() => {
                          navigate(`/show-motor/${motor.id}`);
                        }}
                      >
                        <Image src={motor.image3} alt={motor.name} w="100%" />
                      </Box>
                    </Carousel>
                  </Box>

                  <Flex flexDirection="column" marginRight={4} bgColor="white">
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

        <Box align="center" fontSize="12px">
          <Text color="gray.300">
            We deliver the highest quality pre-owned motors that are refurbished
            through out comprehensive Motor Certified Refurbishment Precess
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default CerdifiedMotorHeader;
