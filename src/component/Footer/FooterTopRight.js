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
      <Box w={["250px","100%"]} marginTop={["10", "5", "5", "5", "5"]}>
        <Flex flexDirection="column">
          <Heading fontSize="lg" color="white">
            Subscribe to Our Newsletter
          </Heading>

          <Text color="white">
            Get the latest discounts, promotions & exclusive benefits delivered
            straight to your inbox.
          </Text>
          <Flex marginTop="3">
            <Input w={["180px","250px"]} bgColor="white" placeholder="Email address" />
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
              display={["none", "none", "none", "block", "block"]}
            >
              Service
            </Link>

            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Buy Car
            </Link>
            <Link
              color="white"
              fontSize="sm"
              justifyContent="left"
              marginBottom="3"
              display={["none", "none", "none", "block", "block"]}
            >
              Sell Car
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Dealer Login
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
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
              display={["none", "none", "none", "block", "block"]}
            >
              Support
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Insurance
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              FAQ
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Contact Us
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
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
              display={["none", "none", "none", "block", "block"]}
            >
              About Motor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Our Story
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Motor Certified Lab
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Buying from Motor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Quality Assured Motor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Motor Reviews
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Articles
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Motor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              Motor Academy
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
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
              display={["none", "none", "none", "block", "block"]}
            >
              Partner Websites
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              WapMotor
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              PropSocial
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              ZeroHero
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
            >
              MotorTimes
            </Link>
            <Link
              color="white"
              marginBottom="3"
              fontSize="sm"
              justifyContent="left"
              display={["none", "none", "none", "block", "block"]}
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
