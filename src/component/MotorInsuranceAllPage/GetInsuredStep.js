import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Grid,
  Flex,
  Heading,
} from "@chakra-ui/react";
import IconMotor from "../../image/Logo/IconMotor.jpg";

function GetInsuredStep() {
  return (
    <>
      <Box
        paddingTop="10"
        paddingBottom="14"
        marginX={["5", "5", "100", "100", "200"]}
      >
        <Heading align="center" marginY="5">
          Get Insured in 3 Easy Steps
        </Heading>

        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          gap={6}
          marginTop={7}
        >
          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.300"
              w="6"
              h="8"
              align="center"
              borderBottomLeftRadius={8}
              color="blue.800"
              fontSize="xl"
            >
              1
            </Text>

            <Image
              src={IconMotor}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text align="left" fontWeight="bold">
              Get an Instant Quotation
            </Text>
            <Text fontSize="md" marginY="2" align="left">
              Tell us about your motor, and we will work on generating instant
              quotations from various insurance providers, tailored to your
              details.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.300"
              w="6"
              h="8"
              align="center"
              borderBottomLeftRadius={8}
              color="blue.800"
              fontSize="xl"
            >
              2
            </Text>

            <Image
              src={IconMotor}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text align="left" fontWeight="bold">
              Choose an Insurance Provider
            </Text>
            <Text fontSize="md" marginY="2" align="left">
              Compare quotations easily from our wide selection of insurers and
              decide on any add-ons, such as road tax renewal, that you may
              need.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.300"
              w="6"
              h="8"
              align="center"
              borderBottomLeftRadius={8}
              color="blue.800"
              fontSize="xl"
            >
              3
            </Text>

            <Image
              src={IconMotor}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text align="left" fontWeight="bold" >
              Confirm Your Details {`&`} Make Payment
            </Text>
            <Text fontSize="md" marginY="2" align="left">
              Review your overall quotation and make payment with either credit
              or debit card, online banking, e-wallet, or by cash.
            </Text>
          </Box>
        </Grid>
        
      </Box>
    </>
  );
}

export default GetInsuredStep;
