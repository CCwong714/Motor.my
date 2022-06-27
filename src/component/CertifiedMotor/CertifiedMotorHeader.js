import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { TiTickOutline } from "react-icons/ti";
import CertifiedMotorShow from "./CertifiedMotorShow";
import { React /*, onChange, onClickItem, onClickThumb*/ } from "react";
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

// import { Carousel } from "react-responsive-carousel";

function CerdifiedMotorHeader() {
  return (
    <Box bgColor="blue.400" marginTop={14}>
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
          <Flex alignItems="center" gap={4}>
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
          </Flex>
          {/* </Carousel> */}
        </Box>

        <Box align="center" fontSize="12px" marginTop="">
          <Text>
            We deliver the highest quality pre-owned cars that are refurbished
            through out comprehensive Motor Certified Refurbishment Precess
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default CerdifiedMotorHeader;
