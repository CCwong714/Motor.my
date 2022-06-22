import React from "react";
import Image3 from "../../image/photo3.jpg";
import { Flex, Box, Image, Text, Grid } from "@chakra-ui/react";
import Corne from "../../image/corne.png";

function TwoPhoto() {
  return (
    <>
      <Flex bgColor="yellow.400">
        <Box
          backgroundImage={[`url(${Image3})`]}
          backgroundPosition="center"
          backgroundSize="cover"
          height={["80vh", "80vh", "80vh", "80vh"]}
          width="50%"
        >
          <Image src={Corne} positio="right center" />
        </Box>

        <Grid templateColumns="repeat(2,1fr)">
          <Box marginRight={5}>
            <Text fontSize="6xl">100,000</Text>
            <Text fontSize="2xl">tranactions on an annualized basis</Text>
          </Box>
          <Box marginRight={5}>
            <Text fontSize="6xl">100,000</Text>
            <Text fontSize="2xl">tranactions on an annualized basis</Text>
          </Box>
          <Box marginRight={5}>
            <Text fontSize="6xl">100,000</Text>
            <Text fontSize="2xl">tranactions on an annualized basis</Text>
          </Box>
          <Box marginRight={5}>
            <Text fontSize="6xl">100,000</Text>
            <Text fontSize="2xl">tranactions on an annualized basis</Text>
          </Box>
        </Grid>
      </Flex>
    </>
  );
}

export default TwoPhoto;
