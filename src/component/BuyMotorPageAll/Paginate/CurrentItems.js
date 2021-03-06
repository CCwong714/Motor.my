import { Flex, Text, Icon, Box,Image } from "@chakra-ui/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { VscInfo } from "react-icons/vsc";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function CurrentItems({ currentItems }) {
  let navigate = useNavigate();
  return (
    <>
      {currentItems &&
        currentItems.map((motor) => {
          return (
            <Box
              key={motor.id}
              border="1px"
              borderColor="gray.400"
              borderRadius={5}
              
            >
              <Box>
                <Carousel
                  showThumbs={false}
                  showArrows={true}
                  // onChange={onChange}
                  // onClickItem={onClickItem}
                  // onClickThumb={onClickThumb}
                  alignSelf="center"
                  infiniteLoop={true}
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
                      h="325px"
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
                      h="325px"
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
                      h="325px"
                      borderRadius={5}
                    />
                  </Box>
                </Carousel>
              </Box>

              <Flex flexDirection="column" justifyContent="space-evenly">
                <Flex justifyContent="space-between" paddingX="3">
                  <Text marginTop="6" fontSize="lg" alignSelf="center">
                    {motor.year} {motor.brands}
                  </Text>
                  <Icon as={FcLikePlaceholder} alignSelf="center" />
                </Flex>
                <Text fontSize="md" paddingX="3" paddingTop={2}>
                  {motor.name} {motor.cc}
                </Text>
                <Flex paddingX="3" gap={0.5} paddingTop={2}>
                  <Text fontSize="xs" alignContent="center">
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
                  <Text  fontSize="xs">
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

                <Flex justifyContent="space-between" paddingX="3" paddingY={2}>
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
    </>
  );
}

export default CurrentItems;
