import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import InsuranceBG from "../../image/insuranceBG.jpg";

function InsuranceTop() {
  return (
    <Box
      bgImage={InsuranceBG}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      paddingY="15"
      h="45vh"
      w="100%"
    >
      <Text
        color="white"
        fontSize="4xl"
        fontWeight="bold"
        marginLeft="150px"
        marginTop={20}
      >
        Get Motor Insurance in Minutes
      </Text>
      <Text color="white" fontSize="xl" marginLeft="150px" marginTop={5}>
        Stay covered in every journey with the right insurance
      </Text>
      <Button
        bgColor="yellow.500"
        color="blue.900"
        marginLeft="150px"
        marginTop={5}
        fontWeight="bold"
      >
        GET A QUOTE NOW
      </Button>
    </Box>
  );
}

export default InsuranceTop;
