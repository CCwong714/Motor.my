import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import Image3 from "../../image/MotorPhoto/DucatiMultistradaV2/Photo3.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import CustomerHistory from "./CustomerHistory";

function HappyCustomer() {
  return (
    <Box marginX={["0", "0", "100", "100", "200"]}>
      <Box
        backgroundImage={Image3}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        paddingY="15"
        
        w="100%"
      >
        <Box align="center" paddingTop={16}>
          <Text
            align="center"
            color="white"
            fontSize="4xl"
            fontWeight="bold"
            bgColor="black"
            w="365px"
            h="50px"
          >
            Happy Customers
          </Text>
        </Box>

        <Flex flexDirection="column" paddingX={["3", "6", "9", "12", "14"]}>
          <Flex bgColor="gray.100">
            <Icon
              as={FaFacebookSquare}
              w="80px"
              h="80px"
              color="blue.500"
              marginX="6"
            />
            <Flex flexDirection="column">
              <Flex alignItems="center">
                <Text fontSize="2xl" as="span">
                  4.9
                </Text>
                <Flex>
                  <Icon as={AiFillStar} color="yellow.400" />
                  <Icon as={AiFillStar} color="yellow.400" />
                  <Icon as={AiFillStar} color="yellow.400" />
                  <Icon as={AiFillStar} color="yellow.400" />
                  <Icon as={AiFillStar} color="yellow.400" />
                </Flex>
              </Flex>
              <Text fontSize="xl">Out of 2,598 total reviews</Text>
            </Flex>
          </Flex>
          <Box paddingBottom="14">
            <CustomerHistory />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default HappyCustomer;
