import { Box, Image, Text, Button, Grid, Flex } from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";

function GetMotorLoanPageOne() {
  return (
    <>
      <Box>
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          gap={6}
        >
          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.300"
              w="6"
              h="8"
              align="center"
              borderBottomLeftRadius={8}
              color="blue.800"
              fontSize="xl"
            >
              1
            </Text>

            <Image
              src={Image3}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text align={["center", "left"]}>
              {" "}
              Get a Carsome Pre-approval Certificate
            </Text>
            <Text fontSize="12" marginY="2" align={["center", "left"]}>
              Submit your Identification Card (IC) and monthly income details to
              us. A Carsome Pre-approval Certificate will be generated with your
              maximum loan amount, repayment period, and interest rate.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.300"
              w="6"
              h="8"
              align="center"
              borderBottomLeftRadius={8}
              color="blue.800"
              fontSize="xl"
            >
              2
            </Text>

            <Image
              src={Image3}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text align={["center", "left"]}>
              Get a Carsome Pre-approval Certificate
            </Text>
            <Text fontSize="12" marginY="2" align={["center", "left"]}>
              Find the car you want on our website. Book a test drive and once
              you make your decision, show your Carsome Pre-approval Certificate
              to get your purchase finalized.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.300"
              w="6"
              h="8"
              align="center"
              borderBottomLeftRadius={8}
              color="blue.800"
              fontSize="xl"
            >
              3
            </Text>

            <Image
              src={Image3}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text align={["center", "left"]}> Collect Your Car Instantly</Text>
            <Text fontSize="12" marginY="2" align={["center", "left"]}>
              Bring your car home! We can arrange for collection at a Carsome
              Experience Center, or deliver it straight to your doorstep.
            </Text>
          </Box>
        </Grid>
        <Flex
          flexDir={["column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
          marginTop={5}
        >
          <Text as="span" marginRight="4">
          Interested in Getting a Loan Before You Find a Car?
          </Text>
          <Button fontWeight="bold" bgColor="yellow.400">
            Get Pre-approved Now
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default GetMotorLoanPageOne;
