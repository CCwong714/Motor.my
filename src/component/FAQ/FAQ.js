import { Box, Heading, Text, Button } from "@chakra-ui/react";

function FAQ() {
  return (
    <>
      <Box padding="10" w="1500" marginX="300">
        <Box paddingX="5">
          <Heading align="center"> FAQ</Heading>
          <Text marginTop="10" fontSize="lg" fontWeight="bold" variant="link">
            Why Buy from Motor?
          </Text>
          <Text marginTop="5" fontSize="lg" fontWeight="bold">
            What are Motor Certified Motor?
          </Text>
          <Text marginTop="5" fontSize="lg" fontWeight="bold">
            What does the 175-point inspection include?
          </Text>
          <Text marginTop="5" fontSize="lg" fontWeight="bold">
            What is Motor Certified Lab?
          </Text>
          <Box align="center" marginTop="8">
            <Button
              _hover={{  boxShadow:'dark-lg' }}
              variant="link"
              textDecoration="underline"
              fontSize="lg"
              color="blue.400"
              fontWeight="bold"
            >
              More FAQs
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default FAQ;
