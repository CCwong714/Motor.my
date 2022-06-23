import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { TiTickOutline } from "react-icons/ti";
import CertifiedMotorShow from "./CertifiedMotorShow";
import { React/*, onChange, onClickItem, onClickThumb*/ } from "react";

// import { Carousel } from "react-responsive-carousel";

function CerdifiedMotorHeader() {
  return (
    <Box bgColor="blue.400">
      <Box  paddingBottom="3" marginX={["2","300"]}>
        <Box paddingTop="30">
          <Heading align="center">Shop Motor Certified Motor</Heading>
        </Box>

        <Flex justifyContent="center" marginTop="2" flexDirection={["column" ,"column","column","row","row"]} marginX={["30","50","none","none","none"]}>
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

        <Box w="100%"  marginTop="5" marginBottom={2}>
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
            <Flex gap={2}  overflowX="scroll" >
              <CertifiedMotorShow />
              <CertifiedMotorShow />
              <CertifiedMotorShow />
              <CertifiedMotorShow />
              <CertifiedMotorShow />
              <CertifiedMotorShow />
              <CertifiedMotorShow />
              <CertifiedMotorShow /> 
              <CertifiedMotorShow />
              <CertifiedMotorShow />
              <CertifiedMotorShow />
              <CertifiedMotorShow />
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
