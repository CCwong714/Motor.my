import React from "react";
import sliderJson from "../../Slider.json";
import { Flex, Text, Icon, Box,Image,Grid } from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { VscInfo } from "react-icons/vsc";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

function SpamMotor() {
  return (
    <>
    <Grid templateColumns="repeat(4,1fr)" gap="5">
      {sliderJson.map((motor) => {
        return (
          <Box key={motor.id}>
            <Image src={motor.image} alt={motor.name} h="300px" w="100%" />

            <Flex flexDirection="column">
              <Flex justifyContent="space-between">
                <Text marginTop="2" fontSize="lg">
                  {motor.year} {motor.barnds}
                </Text>
                <Icon as={FcLikePlaceholder} alignSelf="center" />
              </Flex>
              <Text fontSize="lg">{motor.name} {motor.cc}</Text>
              <Flex>
                <Text paddingRight={2} fontSize="xs">
                  {motor.howKm}
                </Text>
                <Text paddingRight={2} fontSize="xs">
                  {motor.auto}
                </Text>
                <Text paddingRight={2} fontSize="xs">
                  {motor.place}
                </Text>
              </Flex>

              <Flex marginTop={1} alignItems="center">
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

              <Flex>
                <Flex marginRight={2}>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    RM
                  </Text>
                  <Text fontSize="lg" alignSelf="center">
                    {motor.price}
                  </Text>
                </Flex>

                <Flex>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    RM
                  </Text>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    {motor.payMo}
                  </Text>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    /mo
                  </Text>
                  <Box>
                    <Icon as={VscInfo} />
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        );
      })}
      {sliderJson.map((motor) => {
        return (
          <Box key={motor.id}>
            <Image src={motor.image} alt={motor.name} h="300px" w="100%" />

            <Flex flexDirection="column">
              <Flex justifyContent="space-between">
                <Text marginTop="2" fontSize="lg">
                  {motor.year} {motor.barnds}
                </Text>
                <Icon as={FcLikePlaceholder} alignSelf="center" />
              </Flex>
              <Text fontSize="lg">{motor.name} {motor.cc}</Text>
              <Flex>
                <Text paddingRight={2} fontSize="xs">
                  {motor.howKm}
                </Text>
                <Text paddingRight={2} fontSize="xs">
                  {motor.auto}
                </Text>
                <Text paddingRight={2} fontSize="xs">
                  {motor.place}
                </Text>
              </Flex>

              <Flex marginTop={1} alignItems="center">
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

              <Flex>
                <Flex marginRight={2}>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    RM
                  </Text>
                  <Text fontSize="lg" alignSelf="center">
                    {motor.price}
                  </Text>
                </Flex>

                <Flex>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    RM
                  </Text>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    {motor.payMo}
                  </Text>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    /mo
                  </Text>
                  <Box>
                    <Icon as={VscInfo} />
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        );
      })}
      </Grid>
    </>
  );
}

export default SpamMotor;
