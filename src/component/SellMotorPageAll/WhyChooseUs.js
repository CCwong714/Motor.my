import React from "react";
import { Box, Heading, Image, Text, Grid, Icon, Flex } from "@chakra-ui/react";
import { RiNewspaperLine } from "react-icons/ri";
import WithCustomer from "../../image/Logo/withCustomer.jpg"


function WhyChooseUs() {
  return (
    <Box
      paddingTop="10"
      bgColor="gray.100"
      paddingBottom="10"
      marginX={["0", "0", "100","100","100", "200"]}
    >
      <Heading align="center">Why Choose Us?</Heading>

      <Flex flexDirection={["column","column","column", "row"]}>
        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"]}
          gap={6}
          marginTop={10}
          w="100%"
        >
          <Box margin={5}>
            <Icon as={RiNewspaperLine} />
            <Text fontSize="sm">Hassle-free Process</Text>
            <Text fontSize="sm">
              Expect a seamless journey from a free inspection to handling all
              the paperwork for you.
            </Text>
          </Box>
          <Box margin={5}>
            <Icon as={RiNewspaperLine} />
            <Text fontSize="sm">Hassle-free Process</Text>
            <Text fontSize="sm">
              Expect a seamless journey from a free inspection to handling all
              the paperwork for you.
            </Text>
          </Box>
          <Box margin={5}>
            <Icon as={RiNewspaperLine} />
            <Text fontSize="sm">Hassle-free Process</Text>
            <Text fontSize="sm">
              Expect a seamless journey from a free inspection to handling all
              the paperwork for you.
            </Text>
          </Box>
          <Box margin={5}>
            <Icon as={RiNewspaperLine} />
            <Text fontSize="sm">Hassle-free Process</Text>
            <Text fontSize="sm">
              Expect a seamless journey from a free inspection to handling all
              the paperwork for you.
            </Text>
          </Box>
        </Grid>
        <Image src={WithCustomer} w={["100","100%","100%", "50%"]} />
      </Flex>
    </Box>
  );
}

export default WhyChooseUs;
