import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { TiTickOutline } from "react-icons/ti";
import CerdifiedMotorShow from "./CertifiedMotorShow";
import { React, onChange, onClickItem, onClickThumb } from "react";
import { Carousel } from "react-responsive-carousel";

function CerdifiedMotorHeader() {
  return (
    <>
      <Box>
        <Box paddingTop="30">
          <Heading align="center">Shop Motor Cerdified Motor</Heading>
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

        <Box maxW="1500px" marginX="auto" justifyContent="center">
          <Carousel
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            alignSelf="center"
            autoPlay={true}
          >
            <Flex>
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
            </Flex>

            <Flex>
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
            </Flex>

            <Flex>
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
              <CerdifiedMotorShow />
            </Flex>
          </Carousel>
        </Box>
      </Box>
    </>
  );
}

export default CerdifiedMotorHeader;
