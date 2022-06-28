import { Box, Image, Text, Flex, Icon } from "@chakra-ui/react";
import { React, onChange, onClickItem, onClickThumb } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HiInformationCircle } from "react-icons/hi";

function CertifiedMotorShow({
  changeImage1,
  changeImage2,
  changeImage3,
  brand,
  year,
  howManyKM,
  howManyRM,
  howManyPayMo,
  isAutomatic,
  whereFrom,
  origin,
}) {
  return (
    <>
      <Box marginRight="4">
        <Box bgColor="white" w="300px" h="300px">
          <Carousel
            showThumbs={false}
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            autoPlay={true}
            stopOnHover={false}
          >
            <Box h="250px" w="100%">
              <Image src={changeImage1} height="100%" w="100%" fit="cover" />
            </Box>
            <Box h="250px" w="100%">
              <Image src={changeImage2} height="100%" w="100%" fit="cover" />
            </Box>
            <Box h="250px" w="100%">
              <Image src={changeImage3} height="100%" w="100%" fit="cover" />
            </Box>
          </Carousel>
        </Box>
        <Box bgColor="white" textAlign="left">
          <Text fontSize="12px" marginTop="-7" marginX={5}>
            Motor Certified
          </Text>
          <Text marginX={5}>
            {year} {brand}
          </Text>
          <Text marginX={5}>{origin}</Text>

          <Flex marginY="2" paddingLeft="5">
            <Text fontSize="12px" marginRight="2" padding="0.5">
              {howManyKM} km
            </Text>

            <Text fontSize="12px" marginRight="2" padding="0.5">
              {isAutomatic ? "Automatic" : "Manual"}
            </Text>

            <Text fontSize="12px" marginRight="2" padding="0.5">
              {whereFrom}
            </Text>
          </Flex>

          <Flex marginY="2" paddingLeft="5">
            <Text
              fontSize="12px"
              marginRight="2"
              border="1px solid #3E8BFC"
              borderRadius="4"
              padding="0.5"
              color="#3E8BFC"
            >
              View 360
            </Text>

            <Text
              fontSize="12px"
              marginRight="2"
              border="1px solid #3E8BFC"
              borderRadius="4"
              padding="0.5"
              color="#3E8BFC"
            >
              Sunroof
            </Text>

            <Text
              fontSize="12px"
              marginRight="2"
              border="1px solid #3E8BFC"
              borderRadius="4"
              padding="0.5"
              color="#3E8BFC"
            >
              Auto Cruise Control
            </Text>
          </Flex>
          <Flex paddingLeft="5" flexDirection="column">
            <Flex justifyContent="flex-end">
              <Text fontSize="xs" marginY="auto">
                RM
              </Text>
              <Box>
                <Text as="span" fontSize="xs" marginY="auto">
                  {howManyPayMo}/mo
                </Text>
                <Icon as={HiInformationCircle} marginY="auto" />
              </Box>
            </Flex>
            <Flex marginRight="5">
              <Text fontSize="sm" marginY="auto" marginRight={1}>
                RM
              </Text>
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  {howManyRM}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default CertifiedMotorShow;
