import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Link,
  Grid,
} from "@chakra-ui/react";
function FooterTopRight() {
  return (
    <>
      <Box w="100%" marginTop="5">
        <Flex flexDirection="column">
          <Heading fontSize="lg" color="white">
            Subscribe to Our Newsletter
          </Heading>

          <Text color="white">
            Get the latest discounts, promotions & exclusive benefits delivered
            straight to your inbox.
          </Text>
          <Flex marginTop="3">
            <Input w="250px" bgColor="white" placeholder="Email address"/>
            <Button color="white" bgColor="yellow.500">
              Submit
            </Button>
          </Flex>
        </Flex>
        <Grid templateColumns="repeat(4,1fr)" gap={5} w="100%" marginTop="2">
          <Flex flexDirection="column">
            <Link
              color="gray.400"
              marginBottom="5"
              fontSize="lg"
              justifyContent="left"
              fontWeight="bold"
            >
              Service
            </Link>

            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Buy Car
            </Link>
            <Link
              color="white"
              fontSize="sm"
              justifyContent="left"
              marginBottom="3"
            >
              Sell Car
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Dealer Login
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Business
            </Link>
          </Flex>
          <Flex flexDirection="column">
            <Link
              color="gray.400"
              marginBottom="5"
              fontSize="lg"
              justifyContent="left"
              fontWeight="bold"
            >
              Support
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Insurance
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              FAQ
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Contact Us
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Locate Us
            </Link>
          </Flex>
          <Flex flexDirection="column">
            <Link
              color="gray.400"
              marginBottom="5"
              fontSize="lg"
              justifyContent="left"
              fontWeight="bold"
            >
              About Motor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Our Story
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Motor Certified Lab
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Buying from Motor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Quality Assured Motor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Motor Reviews
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Articles
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Motor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Motor Academy
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Motor Capital
            </Link>
          </Flex>
          <Flex flexDirection="column">
            <Link
              color="gray.400"
              marginBottom="3"
              fontSize="lg"
              justifyContent="left"
              fontWeight="bold"
            >
              Partner Websites
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              WapMotor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              PropSocial
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              ZeroHero
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              MotorTimes
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
            >
              Motorlist
            </Link>
          </Flex>
        </Grid>
      </Box>
    </>
  );
}

export default FooterTopRight;
