import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { VscInfo } from "react-icons/vsc";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

function CurrentItems({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Flex
            key={item.name.common}
            border="1px"
            borderColor="blackAlpha.500"
            borderRadius="lg"
            flexDirection="column"
            paddingTop="10"
            paddingX="10"
            alignItems="center"
          >
            <LazyLoadImage
              alt={item.name.common}
              effect="blur"
              src={item.flags.png}
            />

            <Flex flexDirection="column">
              <Flex justifyContent="space-between">
                <Text marginTop="2" fontSize="lg">
                  2022 {item.name.common}
                </Text>
                <Icon as={FcLikePlaceholder} alignSelf="center" />
              </Flex>
              <Text fontSize="lg">{item.name.common}</Text>
              <Flex>
                <Text paddingRight={2} fontSize="xs">
                  12,345 km
                </Text>
                <Text paddingRight={2} fontSize="xs">
                  Automatic
                </Text>
                <Text paddingRight={2} fontSize="xs">
                  Selangor
                </Text>
              </Flex>

              <Flex marginTop={1} alignItems="center">
                <Text
                  padding={0.5}
                  fontSize="xs"
                  border="1px"
                  borderRadius={4}
                  color="blue.500"
                  marginRight={1}
                >
                  View 360
                </Text>
                <Text
                  padding={0.5}
                  fontSize="xs"
                  border="1px"
                  borderRadius={4}
                  color="blue.500"
                  marginRight={1}
                >
                  Sunroof
                </Text>
                <Text
                  padding={0.5}
                  fontSize="xs"
                  border="1px"
                  borderRadius={4}
                  color="blue.500"
                >
                  Auto Cruise Control
                </Text>
              </Flex>

              <Flex>
                <Flex marginRight={2}>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    RM
                  </Text>
                  <Text fontSize="lg" alignSelf="center">
                    {item.name.common}
                  </Text>
                </Flex>

                <Flex>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    RM
                  </Text>
                  <Text fontSize="sm" alignSelf="center"marginRight={0.5}>
                    {item.name.common}
                  </Text>
                  <Text fontSize="sm" alignSelf="center" marginRight={0.5}>
                    /mo
                  </Text>
                  <Box>
                    <Icon as={VscInfo} />
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
    </>
  );
}

export default CurrentItems;
