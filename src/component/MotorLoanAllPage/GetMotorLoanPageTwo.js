import { Box, Image, Text, Button, Grid, Link, Flex } from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";

function GetMotorLoanPageTwo() {
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
            <Text align={["center", "left"]}>Browse for a Car</Text>
            <Text fontSize="12" marginY="2" align={["center", "left"]}>
              Test drive and book a car from our large selection of quality used
              cars online with close-up pictures, a 360-degree view, inspection
              report, and more.
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
            <Text align={["center", "left"]}>Apply for a Loan</Text>
            <Text fontSize="12" marginY="2" align={["center", "left"]}>
              Talk to our Carsome Consultants who will guide you every step of
              the way from applications to fast approval from our panel of loan
              financiers.
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
            <Text align={["center", "left"]}> Get Approved</Text>
            <Text fontSize="12" marginY="2" align={["center", "left"]}>
              Get fast loan approval within 3 to 7 days, and collect your car
              from a Carsome Experience Center, or have it delivered straight to
              your home.
            </Text>
            <Link color="blue.400">
              Skip the wait and get your car loan pre-approved.
            </Link>
          </Box>
        </Grid>
        <Flex
          flexDir={["column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
          marginTop={5}
        >
          <Text as="span" marginRight="4">
            Ready to Find Your Dream Motor?
          </Text>
          <Button fontWeight="bold" bgColor="yellow.400">
            Browse Motor Certified Motor Now
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default GetMotorLoanPageTwo;
