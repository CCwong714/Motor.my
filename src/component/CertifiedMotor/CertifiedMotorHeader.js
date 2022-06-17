import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { TiTickOutline } from "react-icons/ti";
import CerdifiedMotorShow from "./CertifiedMotorShow";
import { React, onChange, onClickItem, onClickThumb } from "react";
import { Carousel } from "react-responsive-carousel";

function CerdifiedMotorHeader() {
  return (
    <>
      <Box bgColor="blue.400" paddingBottom="3">
        <Box paddingTop="30">
          <Heading align="center">Shop Motor Certified Motor</Heading>
        </Box>

        <Flex justifyContent="center" marginTop="2">
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

        <Box maxW="1500px" marginX="auto" marginTop="5">
          <Carousel
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
          >
            <Flex justifyContent="center">
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
            </Flex>

            <Flex justifyContent="center">
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
            </Flex>

            <Flex justifyContent="center">
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
            </Flex>
          </Carousel>
        </Box>

        <Box align="center" fontSize="12px" marginTop="-7">
          <Text>
            We deliver the highest quality pre-owned cars that are refurbished
            through out comprehensive Motor Certified Refurbishment Precess
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default CerdifiedMotorHeader;
