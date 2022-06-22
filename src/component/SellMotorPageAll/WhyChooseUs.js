import React from "react";
import { Box, Heading, Image, Text, Grid, Icon } from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";
import { RiNewspaperLine } from "react-icons/ri";

function WhyChooseUs() {
  return (
    <Box
      paddingTop="10"
      bgColor="gray.100"
      paddingBottom="10"
      marginX={["0", "0", "100", "300"]}
    >
      <Heading align="center">Why Choose Us?</Heading>

      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"]}
        gap={6}
        marginTop={10}
      >
        <Box>
          <Icon as={RiNewspaperLine} />
        </Box>
      </Grid>
    </Box>
  );
}

export default WhyChooseUs;
