import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import sliderJson from "../../Slider.json";
import { Carousel } from "react-responsive-carousel";
import { Flex, Text, Icon, Box, Image, Grid, Center } from "@chakra-ui/react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { VscInfo } from "react-icons/vsc";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function SpamMotor() {
  let navigate = useNavigate();
  return (
    <>
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        gap="5"
      >
        {sliderJson.map((motor) => {
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
                      navigate(`/showmotorpage`);
                    }}
                  >
                    <Image
                      src={motor.image}
                      alt={motor.name}
                      w="100%"
                      h="252px"
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
                      h="252px"
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
                      h="252px"
                      borderRadius={5}
                    />
                  </Box>
                </Carousel>
              </Box>

              <Flex flexDirection="column">
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
        {sliderJson.map((motor) => {
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
                      navigate(`/showmotorpage`);
                    }}
                  >
                    <Image
                      src={motor.image}
                      alt={motor.name}
                      w="100%"
                      h="252px"
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
                      h="252px"
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
                      h="252px"
                      borderRadius={5}
                    />
                  </Box>
                </Carousel>
              </Box>

              <Flex flexDirection="column">
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
        {sliderJson.map((motor) => {
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
                      navigate(`/showmotorpage`);
                    }}
                  >
                    <Image
                      src={motor.image}
                      alt={motor.name}
                      w="100%"
                      h="252px"
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
                      h="252px"
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
                      h="252px"
                      borderRadius={5}
                    />
                  </Box>
                </Carousel>
              </Box>

              <Flex flexDirection="column" bgColor="white">
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
        {sliderJson.map((motor) => {
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
                      navigate(`/showmotorpage`);
                    }}
                  >
                    <Image
                      src={motor.image}
                      alt={motor.name}
                      w="100%"
                      h="252px"
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
                      h="252px"
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
                      h="252px"
                      borderRadius={5}
                    />
                  </Box>
                </Carousel>
              </Box>

              <Flex flexDirection="column" >
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
      </Grid>
    </>
  );
}

export default SpamMotor;
