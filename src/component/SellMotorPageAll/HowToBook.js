import React from "react";
import { Box, Flex, Text, Image, Icon } from "@chakra-ui/react";
import MobilePhone from "../../image/MobilePhone.png";
import {
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
} from "react-icons/tb";

function HowToBook() {
  return (
    <Box bgColor="#F4F6F8">
      <Box
        marginTop={10}
        marginX={["0", "0", "100", "100", "200"]}
        paddingTop="14"
      >
        <Text as="h1" align="center" fontSize="3xl" fontWeight="bold">
          How to Book a Free Inspection
        </Text>

        <Flex
          marginTop={5}
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
          ]}
          justifyContent="space-around"
          width="100%"
          marginX="auto"
        >
          <Flex
            flexDirection="column"
            gap={2}
            marginX={["5", "5", "14", "20"]}
            marginY={["5", "24"]}
            paddingBottom="14"
            paddingRight="5"
          >
            <Flex alignItems="center">
              <Icon as={TbNumber1} margin={4} />
              <Text paddingX="7" paddingY="4" fontSize="lg">
                Enter your Motor Detail
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={TbNumber2} margin={4} />
              <Text paddingX="7" paddingY="4" fontSize="lg">
                Verify Your Mobile Number
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={TbNumber3} margin={4} />
              <Text paddingX="7" paddingY="4" fontSize="lg">
                Choose Your Motor Condition
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={TbNumber4} margin={4} />
              <Text paddingX="7" paddingY="4" fontSize="lg">
                Get Your Estimated Motor's Price
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={TbNumber5} margin={4} />
              <Text paddingX="7" paddingY="4" fontSize="lg">
                Book a Free Inspection
              </Text>
            </Flex>
          </Flex>

          <Image
            src={MobilePhone}
            height="500px"
            marginTop={["0", "0", "0", "24"]}
            marginBottom="20"
            marginX={["14", "32", "36", "0"]}
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default HowToBook;
