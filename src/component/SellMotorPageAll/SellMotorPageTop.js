import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Select,
  Button,
} from "@chakra-ui/react";

function SellMotorPageTop() {
  return (
    <>
      <Box bgColor="yellow.300">
        <Box marginX={["0", "0", "100", "200", "300"]}>
          <Flex flexDirection={["column" ,"column","column", "row"]}>
            <Box  marginTop="20" w="100%" textAlign="center">
              <Heading>Sell Your Motor to MotorShop</Heading>
              <Text fontSize="lg" marginTop="2">
                Get Your Motor's Price Within Minutes — It's Fast And Easy!
              </Text>
            </Box>
            <Box w="100%">
              <Box
                bgColor="white"
                marginX="15"
                marginY="20"
                padding={5}
                borderRadius={15}
              >
                <Text fontSize="xl" align="center">
                  Enter Your Detail & Get Your Motor's Price Instantly
                </Text>
                {/* <Flex paddingTop={2}> */}
                <Grid templateColumns="repeat(2,1fr)" gap={5}>
                  <Box>
                    <Text fontSize="sm">Motor Brand</Text>
                    <Select
                      placeholder="Select Motor Brand"
                      color="gray.400"
                      w="auto"
                    >
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Indonesia</option>
                      <option>Thailand</option>
                    </Select>
                  </Box>
                  <Box>
                    <Text fontSize="sm">Motor Model</Text>
                    <Select
                      placeholder="Select Motor Model"
                      color="gray.400"
                      w="auto"
                    >
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Indonesia</option>
                      <option>Thailand</option>
                    </Select>
                  </Box>
                  <Box>
                    <Text fontSize="sm">Motor Year</Text>
                    <Select
                      placeholder="Select Motor Year"
                      color="gray.400"
                      w="auto"
                    >
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Indonesia</option>
                      <option>Thailand</option>
                    </Select>
                  </Box>
                  <Box>
                    <Text fontSize="sm">Motor Variant</Text>
                    <Select
                      placeholder="Select Motor Variant"
                      color="gray.400"
                      w="auto"
                    >
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Indonesia</option>
                      <option>Thailand</option>
                    </Select>
                  </Box>
                  <Box>
                    <Text fontSize="sm">Engine</Text>
                    <Select
                      placeholder="Select Engine"
                      color="gray.400"
                      w="auto"
                    >
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Indonesia</option>
                      <option>Thailand</option>
                    </Select>
                  </Box>
                  <Box>
                    <Text fontSize="sm">Transmission</Text>
                    <Select
                      placeholder="Select Transmission"
                      color="gray.400"
                      w="auto"
                    >
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Indonesia</option>
                      <option>Thailand</option>
                    </Select>
                  </Box>
                </Grid>
                <Button bgColor="yellow.400" marginTop={2} w="100%">Get Your Motor's Price</Button>
                {/* </Flex> */}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default SellMotorPageTop;
