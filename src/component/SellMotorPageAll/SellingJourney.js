import React from "react";
import { Box, Heading, Image, Text, Grid } from "@chakra-ui/react";
import MotorInspected from "../../image/motorinspected.jpg"
import FreeInspcetion from "../../image/freeinspection.jpg"
import GetPaid from "../../image/getpaid.png"
import SellMotor from "../../image/sellmotor.jpg"

function SellingJourney() {
  return (
    <>
      <Box
        paddingTop="10"
        bgColor="gray.100"
        paddingBottom="10"
        marginX={["0", "0", "100", "100", "100", "200"]}
      >
        <Heading align="center">
          Your Car Selling Journey Made Hassle-free
        </Heading>

        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
          ]}
          gap={6}
          marginTop={10}
        >
          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              1
            </Text>

            <Image
              src={MotorInspected}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text fontSize="lg">1. Book a Free Inspection</Text>
            <Text marginY="2">
              Submit your details and get an instant estimated price for your
              motor before booking an appointment.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              2
            </Text>

            <Image
              src={FreeInspcetion}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text fontSize="lg">2. Get Your Motor Inspected</Text>
            <Text marginY="2">
              Our skilled inspectors will conduct a 175-point check and make you
              an offer.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              3
            </Text>

            <Image
              src={SellMotor}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text fontSize="lg">3. Sell Your Motor</Text>
            <Text marginY="2">
              Satisfied with our offer? Sell it directly to us or opt for live
              bidding.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              4
            </Text>

            <Image
              src={GetPaid}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text fontSize="lg">4. Get Paid in 1 Hour*</Text>
            <Text marginY="2">
              Leave all the paperwork to us and enjoy fast payment.
            </Text>
            <Text fontSize="xs">*Terms & Conditions Apply</Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default SellingJourney;
