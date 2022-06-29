import React from "react";
import { Box, Image, Flex, Button, Input, Text } from "@chakra-ui/react";
// import CerdifiedMotorShow from "../CertifiedMotor/CertifiedMotorShow";
import AllPaginate from "./Paginate/AllPaginate";
import PopularUsedMotorsForSale from "../PopularUsedCarsForSale/PopularUsedMotorsForSale";
import MotorGif from "../../image/Logo/Motor.gif";

function BuyMotorBody() {
  return (
    <>
      <Box marginX={["0", "0", "100", "100", "200"]}>
        {/* <Grid templateColumns="repeat(3,1fr)" gap={3} justifyContent="center">
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
      </Grid> */}
        <AllPaginate />

        <Flex
          justifyContent="center"
          flexDirection={["column", "column", "column", "row"]}
        >
          <Image src={MotorGif} w="300" h="300" align="left" margin={10} />
          <Flex flexDirection="column" alignItems="center" margin={10} w="80%">
            <Text marginTop={10} fontWeight="bold" as="h2" fontSize="xl">
              Can't find wht you're looking for?
            </Text>
            <Text fontSize="sm">
              Get notified when we have new Motors in store.
            </Text>
            <Input w="80%" marginY={4} placeholder="Email address" />
            <Button w="80%">Nofity Me</Button>
          </Flex>
        </Flex>
      </Box>
      <PopularUsedMotorsForSale />
    </>
  );
}

export default BuyMotorBody;
