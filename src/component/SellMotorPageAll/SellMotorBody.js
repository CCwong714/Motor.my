import React from "react";
import { Grid, Box, Image } from "@chakra-ui/react";
import CerdifiedMotorShow from "../CertifiedMotor/CertifiedMotorShow";
import Image3 from "../../image/photo3.jpg";

function SellMotorBody() {
  return (
    <Box marginX="300">
      <Grid templateColumns="repeat(3,1fr)" gap={3} justifyContent="center">
        <CerdifiedMotorShow w="100%" />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
      </Grid>

      <Grid templateColumns="repeat(4,1fr)" gap={3} marginY="4">
        <Image src={Image3} w="100%" h="100%" />
        <Image src={Image3} w="100%" h="100%" />
        <Image src={Image3} w="100%" h="100%" />
        <Image src={Image3} w="100%" h="100%" />
      </Grid>

      <Grid templateColumns="repeat(3,1fr)" gap={3} justifyContent="center">
        <CerdifiedMotorShow w="100%" />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
      </Grid>

      <Grid templateColumns="repeat(4,1fr)" gap={3} marginY="4">
        <Image src={Image3} w="100%" h="100%" />
        <Image src={Image3} w="100%" h="100%" />
        <Image src={Image3} w="100%" h="100%" />
        <Image src={Image3} w="100%" h="100%" />
      </Grid>

      <Grid templateColumns="repeat(3,1fr)" gap={3} justifyContent="center">
        <CerdifiedMotorShow w="100%" />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
        <CerdifiedMotorShow />
      </Grid>
      
    </Box>
  );
}

export default SellMotorBody;
