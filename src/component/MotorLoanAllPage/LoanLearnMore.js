import { Text, Box, Grid, Image, Button, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import InterestRate from "../../image/interestrate.jpg";
import InterestsCalculate from "../../image/interestscalculated.jpg";
import LoanRejected from "../../image/loanrejected.jpg";

function LoanLearnMore() {
  return (
    <>
      <Box bgColor="gray.200" paddingTop={5} paddingBottom={16}>
        <Text fontWeight="bold" fontSize="3xl" align="center" marginTop={14}>
          Learn More
        </Text>
        <Box marginX={["0", "0", "100", "100", "300"]}>
          <Grid
            templateColumns={[
              "repeat(1,1fr)",
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
            ]}
            gap={6}
          >
            <Box
              position="relative"
              bgColor="white"
              paddingBottom="5"
              borderRadius={15}
            >
              <Image
                src={InterestRate}
                w="100%"
                h="250px"
                justifyContent="left"
                borderRadius={15}
              />
              <Text
                paddingLeft="2"
                paddingTop="2"
                fontSize="lg"
                fontWeight="bold"
              >
                A Guide to Motor Loans & Interest Rates in Malaysia
              </Text>
              <Text
                fontSize="sm"
                marginY="2"
                paddingLeft="2"
                paddingTop="2"
                align={["center", "left"]}
              >
                Motor loans and interest rates can be quite confusing especially
                to first-time motor buyers. So, here is a basic guide on motor
                loans and interest rates in Malaysia.
              </Text>
            </Box>

            <Box
              position="relative"
              bgColor="white"
              paddingBottom="5"
              borderRadius={15}
            >
              <Image
                src={InterestsCalculate}
                w="100%"
                h="250px"
                justifyContent="left"
                borderRadius={15}
              />
              <Text
                paddingLeft="2"
                paddingTop="2"
                fontSize="lg"
                fontWeight="bold"
              >
                How are Motor Loans and Interests Calculated?
              </Text>
              <Text
                fontSize="sm"
                marginY="2"
                paddingLeft="2"
                paddingTop="2"
                align={["center", "left"]}
              >
                When you buy a motor, new or used, the most common way is buying
                it via a motor loan. But do you know how to calculate motor
                loans and interests?
              </Text>
            </Box>

            <Box
              position="relative"
              bgColor="white"
              paddingBottom="5"
              borderRadius={15}
            >
              <Image
                src={LoanRejected}
                w="100%"
                h="250px"
                justifyContent="left"
                borderRadius={15}
              />
              <Text
                paddingLeft="2"
                paddingTop="2"
                fontSize="lg"
                fontWeight="bold"
              >
                Motor Loan Rejected as a Fresh Grad? Here's Why & How You Can
                Buy Your First Motor
              </Text>
              <Text
                fontSize="sm"
                marginY="2"
                paddingLeft="2"
                paddingTop="2"
                align={["center", "left"]}
              >
                Here are five reasons why your motor loan might be rejected as a
                fresh graduate applicant and how you can get easy loan approval!
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Flex
          gap={2}
          justifyContent="center"
          marginY={14}
          flexDir={["column", "column", "row"]}
          align="center"
        >
          <Text fontSize="2xl" fontWeight="bold" marginRight={2}>
            Have a quiestion? We are here to help.
          </Text>
          <Button bgColor="green.400" color="white">
            <Icon
              as={IoLogoWhatsapp}
              color="white"
              marginRight={2}
              w="7"
              h="7"
            />
            <Text fontWeight="bold">Ask About Financing</Text>
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default LoanLearnMore;
