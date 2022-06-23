import { Box, Image, Text, Button, Grid } from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";

function FlexTabListTwo() {
  return (
    <>
      <Box>
        <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']} gap={6}>
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
            <Text paddingLeft="2" paddingTop="2">
              {" "}
              Book an Appointment
            </Text>
            <Text fontSize="12" marginY="2" paddingLeft="2" paddingTop="2">
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
            <Text paddingLeft="2" paddingTop="2">
              Free Motor Inspection
            </Text>
            <Text fontSize="12" marginY="2" paddingLeft="2" paddingTop="2">
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
            <Text paddingLeft="2" paddingTop="2">
              {" "}
              Sell Your Motor
            </Text>
            <Text fontSize="12" marginY="2" paddingLeft="2" paddingTop="2">
              Accept our offer on the spot, or opt for bidding with Carsome's
              network of dealers!
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
              4
            </Text>

            <Image src={Image3} w="100%" h="150px" justifyContent="left" />
            <Text paddingLeft="2" paddingTop="2">
              {" "}
              Get Paid in 1 Hour
            </Text>
            <Text fontSize="12" marginY="2" paddingLeft="2" paddingTop="2">
              Plus, leave all the paperwork to us for a hassle-free experience.
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default FlexTabListTwo;
