import { Box, Flex, Heading, Text, Icon,Image } from "@chakra-ui/react";
import { TiTickOutline } from "react-icons/ti";
import CertifiedMotorShow from "./CertifiedMotorShow";
import { React , onChange, onClickItem, onClickThumb } from "react";
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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
  };
  return (
    <Box bgColor="cyan.300" marginTop={14}>
      <Box paddingBottom="3" marginX={["2", "50", "100", "100", "200"]}>
        <Box paddingTop="30">
          <Heading align="center">Shop Motor Certified Motor</Heading>
        </Box>

        <Flex
          justifyContent="center"
          marginTop="2"
          flexDirection={["column", "column", "column", "row", "row"]}
          marginX={["30", "50", "none", "none", "none"]}
        >
          <Text marginRight="8">
            <Icon as={TiTickOutline} /> 175-Point Inspection
          </Text>
          <Text marginRight="8">
            <Icon as={TiTickOutline} /> Fixed Price, No Hidden Fees
          </Text>
          <Text marginRight="8">
            <Icon as={TiTickOutline} /> 1-Year Warranty
          </Text>
          <Text marginRight="8">
            <Icon as={TiTickOutline} /> 5-Day Money-back Guarantee
          </Text>
        </Flex>

        <Box w="100%" marginTop="5" marginBottom={2}>
          {/* <Carousel
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            alignSelf="center"
            autoPlay={true}
            stopOnHover={false}
            infiniteLoop={true}
            interval={10000}
            showIndicators={false}
          > */}

          {/* <Flex alignItems="center" gap={4} >
            <Icon as={TiChevronLeftOutline} w="8" h="8" />
            <Flex gap={2} overflowX="scroll">
              <CertifiedMotorShow
                changeImage1={DSFV21}
                changeImage2={DSFV22}
                changeImage3={DSFV23}
                year="2022"
                brand="DucatiStreetfighterV2"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="101,900"
                howManyPayMo="1,482"
              />
              <CertifiedMotorShow
                changeImage1={DMV21}
                changeImage2={DMV22}
                changeImage3={DMV23}
                year="2022"
                brand="DucatiMultistradaV2"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="???"
                howManyPayMo="1,774"
              />
              <CertifiedMotorShow
                changeImage1={DSFV41}
                changeImage2={DSFV42}
                changeImage3={DSFV43}
                year="2022"
                brand="DucatiStreetfighterV4"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="121,900"
                howManyPayMo="1,774"
              />
              <CertifiedMotorShow
                changeImage1={DSFV21}
                changeImage2={DSFV22}
                changeImage3={DSFV23}
                year="2022"
                brand="DucatiStreetfighterV2"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="101,900"
                howManyPayMo="1,482"
              />
              <CertifiedMotorShow
                changeImage1={DMV21}
                changeImage2={DMV22}
                changeImage3={DMV23}
                year="2022"
                brand="DucatiMultistradaV2"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="???"
                howManyPayMo="1,774"
              />
              <CertifiedMotorShow
                changeImage1={DSFV41}
                changeImage2={DSFV42}
                changeImage3={DSFV43}
                year="2022"
                brand="DucatiStreetfighterV4"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="121,900"
                howManyPayMo="1,774"
              />
              <CertifiedMotorShow
                changeImage1={DSFV21}
                changeImage2={DSFV22}
                changeImage3={DSFV23}
                year="2022"
                brand="DucatiStreetfighterV2"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="101,900"
                howManyPayMo="1,482"
              />
              <CertifiedMotorShow
                changeImage1={DMV21}
                changeImage2={DMV22}
                changeImage3={DMV23}
                year="2022"
                brand="DucatiMultistradaV2"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="???"
                howManyPayMo="1,774"
              />
              <CertifiedMotorShow
                changeImage1={DSFV41}
                changeImage2={DSFV42}
                changeImage3={DSFV43}
                year="2022"
                brand="DucatiStreetfighterV4"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="121,900"
                howManyPayMo="1,774"
              />
              <CertifiedMotorShow
                changeImage1={DSFV21}
                changeImage2={DSFV22}
                changeImage3={DSFV23}
                year="2022"
                brand="DucatiStreetfighterV2"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="101,900"
                howManyPayMo="1,482"
              />
              <CertifiedMotorShow
                changeImage1={DMV21}
                changeImage2={DMV22}
                changeImage3={DMV23}
                year="2022"
                brand="DucatiMultistradaV2"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="???"
                howManyPayMo="1,774"
              />
              <CertifiedMotorShow
                changeImage1={DSFV41}
                changeImage2={DSFV42}
                changeImage3={DSFV43}
                year="2022"
                brand="DucatiStreetfighterV4"
                origin="???"
                whereFrom="Kuala Lumpur"
                howManyKM="12,345"
                // isAutomatic
                howManyRM="121,900"
                howManyPayMo="1,774"
              />
            </Flex>
            <Icon as={TiChevronRightOutline} w="8" h="8" />
          </Flex> */}
          {/* </Carousel> */}

          <Slider {...settings}>
          {sliderJson.map((motor) => {
            return (
              <Box
                key={motor.id}
               
                borderRadius={5}
                
              >
                <Box marginRight={4}>
                  <Carousel
                    showThumbs={false}
                    showArrows={true}
                    onChange={onChange}
                    onClickItem={onClickItem}
                    onClickThumb={onClickThumb}
                    alignSelf="center"
                    infiniteLoop={false}
                    
                  >
                    <Box
                      onClick={() => {
                        navigate(`/showmotorpage`);
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
                        navigate(`/showmotorpage/${motor.id}`);
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
                        navigate(`/showmotorpage/${motor.id}`);
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

                <Flex flexDirection="column" marginRight={4}>
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
                    <Text paddingRight={2} fontSize="xs" alignContent="center">
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

        <Box align="center" fontSize="12px" marginTop="">
          <Text>
            We deliver the highest quality pre-owned motors that are refurbished
            through out comprehensive Motor Certified Refurbishment Precess
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default CerdifiedMotorHeader;
