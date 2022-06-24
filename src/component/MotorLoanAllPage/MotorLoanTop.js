import React from "react";
import {
  Heading,
  Box,
  Flex,
  Text,
  Button,
  Input,
  Slider,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
} from "@chakra-ui/react";

function MotorLoanPageAll() {
  return (
    <>
      <Heading fontWeight="bold" fontSize="4xl" align="center" marginTop="20">
        Finance Your Dream Motor
      </Heading>
      <Text align="center" fontSize="lg" marginTop={5}>
        We make it easy for you to own the car you want. Let us help you secure
        a loan from paperwork submission to getting fast loan approval.
      </Text>

      <Box
        marginTop={10}
        marginX={["0", "0", "100", "100", "200"]}
        bgColor="gray.200"
        borderRadius={15}
        padding={5}
      >
        <Flex gap={5} flexDir={["column","column","row"]}>
          <Box w="100%" padding={5} backgroundColor="white" borderRadius={15}>
            <Text color="gray.400" fontWeight="bold" fontSize="lg">
              Motor loan Calculator
            </Text>
            <Text color="gray.400" fontWeight="bold">
              Estimate your monthly repayment amount easily with our instant
              motor loan calculator.
            </Text>

            <Flex gap={5} marginTop={5} flexDir={["column","column","row"]}>
              <Box w="100%">
                <Text fontSize="sm" marginBottom={3}>
                  Motor Price(RM)
                </Text>
                <Input />
              </Box>
              <Box w="100%">
                <Text fontSize="sm" marginBottom={3}>
                  Down Payment
                </Text>
                <Input />
              </Box>  
            </Flex>

            <Flex gap={5} marginTop={5} flexDir={["column","column","row"]}>
              <Box w="100%">
                <Text marginBottom={10} fontSize="sm">
                  Interest Rate
                </Text>
                <Slider aria-label="slider-ex-5" defaultValue={10}>
                  <SliderTrack bg="gray.200">
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} bgColor="gray.500" />
                </Slider>
              </Box>
              <Box w="100%" paddingBottom={14}>
                <Text marginBottom={10} fontSize="sm">
                  Loan Period
                </Text>
                <Slider aria-label="slider-ex-5" defaultValue={10}>
                  <SliderTrack bg="gray.200">
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} bgColor="gray.300" />
                </Slider>
              </Box>
            </Flex>
          </Box>

          <Box w={["100%","100%", "70%"]} bgColor="blue.800" borderRadius={15} padding={5}>
            <Text color="white">Your Calculated monthly payment</Text>
            <Flex flexDir="column" gap={5} paddingTop={5}>
              <Text fontWeight="bold" fontSize="2xl" color="white">
                = RM ???
              </Text>
              <Button color="blue.800" bgColor="yellow.400">
                Find Motor whitin Budget
              </Button>
              <Button
                borderColor="white"
                border="2px"
                color="white"
                bgColor="blue.800"
              >
                Get Pre-approved Now
              </Button>
            </Flex>
            <Text color="gray.300" marginTop={5}>
              Disclaimer: All interest rates and calculated amounts are
              estimations only. Actual amounts may differ based on your
              individual credit profile.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default MotorLoanPageAll;
