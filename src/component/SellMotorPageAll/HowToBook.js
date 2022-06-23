import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function HowToBook() {
  return (
    <>
      <Box marginTop={10} marginX={["0", "0", "100", "200", "300"]}>
        <Text as="h1" align="center" fontSize="3xl" fontWeight="bold">
          How to Book a Free Inspection
        </Text>

        <Flex marginTop={5}>
          <Flex
            flexDirection="column"
            gap={2}
            marginX="40"
            marginY="24"
            paddingBottom="14"
            paddingRight="5"
          >
            <Text paddingX="7" paddingY="4" fontSize="lg">
              Enter your Motor Detail
            </Text>
            <Text paddingX="7" paddingY="4" fontSize="lg">
              Verify Your Mobile Number
            </Text>
            <Text paddingX="7" paddingY="4" fontSize="lg">
              Choose Your Car Condition
            </Text>
            <Text paddingX="7" paddingY="4" fontSize="lg">
              Get Your Estimated Car's Price
            </Text>
            <Text paddingX="7" paddingY="4" fontSize="lg">
              Book a Free Inspection
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default HowToBook;
