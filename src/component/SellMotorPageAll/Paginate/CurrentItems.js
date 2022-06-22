import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
            padding="10"
            textAlign="left"
            width="100%"
          >
            <LazyLoadImage
              alt={item.name.common}
              effect="blur"
              src={item.flags.png}
            />

            <Text marginTop={4} fontSize="lg">
              2022 {item.name.common}
            </Text>
            <Text fontSize="lg">{item.name.common}</Text>
            <Text fontSize="sm">123</Text>
          </Flex>
        ))}
    </>
  );
}

export default CurrentItems;
