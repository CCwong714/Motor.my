import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Grid,
  Flex,
} from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";

function SafetyPriority() {
  return (
    <>
      <Box
        paddingTop="10"
        bgColor="gray.100"
        paddingBottom="10"
        marginX={["0", "0", "100", "100", "200", "250"]}
      >
        <Heading align="center">
          Your Car Selling Journey Made Hassle-free
        </Heading>

        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)"]}
          gap={6}
          marginTop={10}
        >
          <Box position="relative" bgColor="white">
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
            <Flex padding={5} flexDir={["column", "column", "row"]}>
              <Image
                marginX="auto"
                src={Image3}
                w="150px"
                h="150px"
                padding={5}
                borderRadius="100"
              />
              <Flex
                flexDirection="column"
                marginY="auto"
                paddingRight={["0", "0", "5"]}
              >
                <Text
                  align={["center", "center", "left"]}
                  fontSize={["lg", "2xl", "lg", "2xl"]}
                >
                  Social Distancing
                </Text>
                <Text
                  fontSize={["12", "md", "12", "md"]}
                  marginY="2"
                  align={["center", "center", "left"]}
                >
                  Dedicated customer and staff areas will be labelled
                  accordingly with social distancing rules of at least 1 meter.
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box position="relative" bgColor="white">
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
            <Flex padding={5} flexDir={["column", "column", "row"]}>
              <Image
                marginX="auto"
                src={Image3}
                w="150px"
                h="150px"
                padding={5}
                borderRadius="100"
              />
              <Flex
                flexDirection="column"
                marginY="auto"
                paddingRight={["0", "0", "5"]}
              >
                <Text
                  align={["center", "center", "left"]}
                  fontSize={["lg", "2xl", "lg", "2xl"]}
                >
                  Mask On, Always
                </Text>
                <Text
                  fontSize={["12", "md", "12", "md"]}
                  marginY="2"
                  align={["center", "center", "left"]}
                >
                  All Motor inspectors are required to wear and swap out new
                  masks every four hours.
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box position="relative" bgColor="white">
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
            <Flex padding={5} flexDir={["column", "column", "row"]}>
              <Image
                marginX="auto"
                src={Image3}
                w="150px"
                h="150px"
                padding={5}
                borderRadius="100"
              />
              <Flex
                flexDirection="column"
                marginY="auto"
                paddingRight={["0", "0", "5"]}
              >
                <Text
                  align={["center", "center", "left"]}
                  fontSize={["lg", "2xl", "lg", "2xl"]}
                >
                  Strict Hygiene Practices
                </Text>
                <Text
                  fontSize={["12", "md", "12", "md"]}
                  marginY="2"
                  align={["center", "center", "left"]}
                >
                  We abide by strict Standard Operating Procedures including
                  regular temperature checks and sanitization.
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box position="relative" bgColor="white">
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
            <Flex padding={5} flexDir={["column", "column", "row"]}>
              <Image
                marginX="auto"
                src={Image3}
                w="150px"
                h="150px"
                padding={5}
                borderRadius="100"
              />
              <Flex
                flexDirection="column"
                marginY="auto"
                paddingRight={["0", "0", "5"]}
              >
                <Text
                  align={["center", "center", "left"]}
                  fontSize={["lg", "2xl", "lg", "2xl"]}
                >
                  Contactless Transactions
                </Text>
                <Text
                  fontSize={["12", "md", "12", "md"]}
                  marginY="2"
                  align={["center", "center", "left"]}
                >
                  Areas in our inspection centers will be marked for social
                  distancing and touch points will be disinfected frequently.
                </Text>
              </Flex>

            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default SafetyPriority;
