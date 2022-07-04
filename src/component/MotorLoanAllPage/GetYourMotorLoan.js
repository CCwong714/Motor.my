import React from "react";
import { Box, Flex, Text, Icon, Button, Image } from "@chakra-ui/react";
import { TbReportMoney } from "react-icons/tb";
import MotorShowTime from "../../image/Logo/MotorShowTime.jpg"

function GetYourMotorLoan() {
  return (
    <Box bgColor="gray.200">
      <Box
        paddingTop={14}
        marginX={["5", "5", "100", "100", "200"]}
        paddingBottom={24}
      >
        <Flex
          gap={5}
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          <Box>
            <Text fontSize="3xl" fontWeight="bold">
              Get Your Motor Loan Per-approved
            </Text>
            <Text marginTop="2">
              Worried about loan rejection? Avoid the wait and get a Motor
              Pre-approval Certificate before you shop for your dream Motor
              Certified motor!
            </Text>

            <Flex gap={5} marginTop={5} flexDir={["column", "column", "row"]}>
              <Box w="100%">
                <Icon as={TbReportMoney} w="8" h="8" />
                <Text fontWeight="bold"> Set Your Budget Before hand</Text>
                <Text>
                  Find out the maximum amount you can borrow and pick a motor that
                  you can afford within your budget.
                </Text>
              </Box>
              <Box w="100%">
                <Icon as={TbReportMoney} w="8" h="8" />
                <Text fontWeight="bold">Stay in Control</Text>
                <Text>
                  Find out your credit health and plan your finances properly.
                </Text>
              </Box>
            </Flex>
            <Flex gap={5} marginTop={5} flexDir={["column", "column", "row"]}>
              <Box w="100%">
                <Icon as={TbReportMoney} w="8" h="8" />
                <Text fontWeight="bold">Fast & Free Application</Text>
                <Text>
                  Get a Motor Pre-approval Certificate with just your
                  Identification Card (IC) and monthly income details. It's
                  completely free.
                </Text>
              </Box>
              <Box w="100%">
                <Icon as={TbReportMoney} w="8" h="8" />
                <Text fontWeight="bold">Collect Your Motor Easily</Text>
                <Text>
                  Secure the Motor Certified Motor you want by showing your
                  Motor Pre-approval Certificate and collect your motor in 1
                  working day*.
                </Text>
              </Box>
            </Flex>

            <Text align="right" marginTop="5">
              *Subject to terms and Coditions
            </Text>
            <Flex
              justifyContent="space-around"
              marginTop={5}
              flexDir={["column", "column", "row"]}
            >
              <Button alignSelf="center" fontWeight="bold" bgColor="green.400" color="white" w={["90%","90%","50%","50%","50%"]}>
                Get Pre-approved Now
              </Button>

              <Box alignSelf="center">
                <Text as="span">
                  Powered by 
                  <Text as="span" fontWeight="bold" fontSize="lg" marginLeft={1}>
                    Motor
                  </Text>
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box w={["100%","100%","100%","100%","120%"]}>
            <Image src={MotorShowTime} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default GetYourMotorLoan;
