import { Text, Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import Image3 from "../../image/photo3.jpg";

function LoanLearnMore() {
  return (
    <>
      <Text fontWeight="bold" fontSize="3xl" align="center" marginTop={14}>
        Learn More
      </Text>
      <Box marginX={["0", "0", "100", "100", "200"]}>
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
          ]}
          gap={6}
        >
          <Box position="relative" bgColor="white" paddingBottom="5">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.500"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
            >
              1
            </Text>

            <Image src={Image3} w="100%" h="150px" justifyContent="left" />
            <Text paddingLeft="2" paddingTop="2" align={["center", "left"]}>
              Book an Appointment
            </Text>
            <Text
              fontSize="12"
              marginY="2"
              paddingLeft="2"
              paddingTop="2"
              align={["center", "left"]}
            >
              It only takes 2 minutes to book an inspection slot
            </Text>
          </Box>

          <Box position="relative" bgColor="white" paddingBottom="5">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.500"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
            >
              2
            </Text>

            <Image src={Image3} w="100%" h="150px" justifyContent="left" />
            <Text paddingLeft="2" paddingTop="2" align={["center", "left"]}>
              Free Motor Inspection
            </Text>
            <Text
              fontSize="12"
              marginY="2"
              paddingLeft="2"
              paddingTop="2"
              align={["center", "left"]}
            >
              Our professionals will inspect your car in just 30 minutes!
            </Text>
          </Box>

          <Box position="relative" bgColor="white" paddingBottom="5">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="yellow.500"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
            >
              3
            </Text>

            <Image src={Image3} w="100%" h="150px" justifyContent="left" />
            <Text paddingLeft="2" paddingTop="2" align={["center", "left"]}>
              Sell Your Motor
            </Text>
            <Text
              fontSize="12"
              marginY="2"
              paddingLeft="2"
              paddingTop="2"
              align={["center", "left"]}
            >
              Accept our offer on the spot, or opt for bidding with Carsome's
              network of dealers!
            </Text>
          </Box>

        
        </Grid>
      </Box>
    </>
  );
}

export default LoanLearnMore;
