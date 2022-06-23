import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import CustomerHistory from "./CustomerHistory";

function HappyCustomer() {
  return (
    <>
      <Box
        backgroundImage={Image3}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        paddingY="15"
        w="100%"
      >
        <Text
          align="center"
          color="white"
          fontSize="4xl"
          paddingTop="50"
          fontWeight="bold"
        >
          Happy Customers
        </Text>

        <Flex  flexDirection="column" paddingX={14}>
          <Flex>
            <Icon
              as={FaFacebookSquare}
              w="80px"
              h="80px"
              color="blue.700"
              marginX="6"
            />
            <Flex flexDirection="column" >
              <Flex alignItems="center">
                <Text fontSize="2xl" as="span">
                  4.9
                </Text>
                <Flex>
                  <Icon as={AiFillStar} color="yellow.500" />
                  <Icon as={AiFillStar} color="yellow.500" />
                  <Icon as={AiFillStar} color="yellow.500" />
                  <Icon as={AiFillStar} color="yellow.500" />
                  <Icon as={AiFillStar} color="yellow.500" />
                </Flex>
              </Flex>
              <Text fontSize="xl">Out of 2,598 total reviews</Text>
            </Flex>
          </Flex>

          <CustomerHistory />
        </Flex>
      </Box>
    </>
  );
}

export default HappyCustomer;
