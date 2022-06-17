import { Box, Image, Text, Flex, Icon } from "@chakra-ui/react";
import { React, onChange, onClickItem, onClickThumb } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../image/photo1.jpg";
import Image2 from "../../image/photo2.jpg";
import Image3 from "../../image/photo3.jpg";
import { HiInformationCircle } from "react-icons/hi";

function CerdifiedMotorShow() {
  return (
    <>
      <Box marginRight="4">
        <Box
          w="300px"
          justifyContent="center"
          align="center"
          alignSelf="center"
        >
          <Carousel
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            alignSelf="center"
            autoPlay={true}
          >
            <Box>
              <Image src={Image1} height="220px" />
            </Box>

            <Box>
              <Image src={Image2} height="220px" />
            </Box>

            <Box>
              <Image src={Image3} height="220px" />
            </Box>
          </Carousel>
        </Box>
        <Box>
          <Text fontSize="12px" marginTop="-7">
            Motor Certified
          </Text>
          <Text>2019 BMW</Text>
          <Text>3 30E (CKD) 2.0</Text>
          <Flex marginY="2">
            <Text
              fontSize="12px"
              marginRight="2"
              border="1px solid #3E8BFC"
              borderRadius="4"
              padding="0.5"
            >
              44,587 km
            </Text>

            <Text
              fontSize="12px"
              marginRight="2"
              border="1px solid #3E8BFC"
              borderRadius="4"
              padding="0.5"
            >
              Automatic
            </Text>

            <Text
              fontSize="12px"
              marginRight="2"
              border="1px solid #3E8BFC"
              borderRadius="4"
              padding="0.5"
            >
              Perak
            </Text>
          </Flex>
          <Flex>
            <Flex marginRight="5">
              <Text as="span" fontSize="12" marginY="auto">
                RM
              </Text>
              <Box>
                <Text as="span" fontWeight="bold">
                  161,100
                </Text>
              </Box>
            </Flex>

            <Flex>
              <Text as="span" fontSize="12" marginY="auto">
                RM
              </Text>
              <Box>
                <Text as="span" fontSize="12" marginY="auto">
                  1,767/mo
                </Text>
                <Icon as={HiInformationCircle} marginY="auto" />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default CerdifiedMotorShow;
