import { Text, Box, Grid, Image, Button, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import InterestRate from "../../image/interestrate.jpg";
import InterestsCalculate from "../../image/interestscalculated.jpg";
import LoanRejected from "../../image/loanrejected.jpg";

function InsuranceLearnMore() {
  return (
    <>
      <Box bgColor="gray.200" paddingTop={5} paddingBottom={16}>
        <Text fontWeight="bold" fontSize="3xl" align="center" marginTop={14}>
          Learn More
        </Text>
        <Box marginX={["0", "0", "100", "100", "250"]}>
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
              <Text paddingX="2" paddingTop="2" fontSize="lg" fontWeight="bold">
                Everything to Know About Motor Insurance
              </Text>
              <Text
                fontSize="sm"
                marginY="2"
                paddingX="2"
                paddingTop="2"
                align="left"
              >
                Motor insurance is a necessity and requirement by law when you
                purchase a vehicle. Find out more about the 3 policies that are
                available in Malaysia.
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
              <Text paddingX="2" paddingTop="2" fontSize="lg" fontWeight="bold">
                How to Renew Road Tax and Insurance
              </Text>
              <Text
                fontSize="sm"
                marginY="2"
                paddingX="2"
                paddingTop="2"
                align="left"
              >
                Your motor insurance and road tax renewal can now be done online
                or offline. Learn more about that and the relaxation period
                here.
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
              <Text paddingX="2" paddingTop="2" fontSize="lg" fontWeight="bold">
                Insurance Add Ons Worth Adding?
              </Text>
              <Text
                fontSize="sm"
                marginY="2"
                paddingX="2"
                paddingTop="2"
                align="left"
              >
                Insurance companies provide additional options to the policy to
                help include coverage to areas that are not part of the standard
                plan. But what are the optional plans and are they worth it?
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

export default InsuranceLearnMore;
