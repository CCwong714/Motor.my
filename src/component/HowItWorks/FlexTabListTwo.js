import { Box, Image, Text, Grid } from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";
import BookAppointment from "../../image/bookappointment.jpg"
import InspectionMotor from "../../image/inspectionmotor.jpg"
import SellYourMotor from "../../image/sellyourmotor.jpg"
import GetPaid from "../../image/getpaid.jpg"

function FlexTabListTwo() {
  return (
    <>
      <Box>
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
          ]}
          gap={6}
        >
          <Box position="relative" bgColor="white" paddingBottom="5" h="350px">
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

            <Image src={BookAppointment} w="100%" h="200px" justifyContent="left" />
            <Text
              paddingLeft="2"
              paddingTop="2"
              fontWeight="bold"
              fontSize="lg"
            >
              Book an Appointment
            </Text>
            <Text
              fontSize="sm"
              marginY="2"
              paddingLeft="2"
              paddingTop="2"
              align="left"
              color="gray.500"
            >
              It only takes 2 minutes to book an inspection slot
            </Text>
          </Box>

          <Box position="relative" bgColor="white" paddingBottom="5" h="350px">
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

            <Image src={InspectionMotor} w="100%" h="200px" justifyContent="left" />
            <Text
              paddingLeft="2"
              paddingTop="2"
              fontWeight="bold"
              fontSize="lg"
            >
              Free Motor Inspection
            </Text>
            <Text
              fontSize="sm"
              marginY="2"
              paddingLeft="2"
              paddingTop="2"
              align="left"
              color="gray.500"
            >
              Our professionals will inspect your Motor in just 30 minutes!
            </Text>
          </Box>

          <Box position="relative" bgColor="white" paddingBottom="5" h="350px">
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

            <Image src={SellYourMotor} w="100%" h="200px" justifyContent="left" />
            <Text
              paddingLeft="2"
              paddingTop="2"
              fontWeight="bold"
              fontSize="lg"
            >
              Sell Your Motor
            </Text>
            <Text
              fontSize="sm"
              marginY="2"
              paddingLeft="2"
              paddingTop="2"
              align="left"
              color="gray.500"
            >
              Accept our offer on the spot, or opt for bidding with Motor's
              network of dealers!
            </Text>
          </Box>

          <Box position="relative" bgColor="white" paddingBottom="5" h="350px">
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

            <Image src={GetPaid} w="100%" h="200px" justifyContent="left" />
            <Text
              paddingLeft="2"
              paddingTop="2"
              fontWeight="bold"
              fontSize="lg"
            >
              Get Paid in 1 Hour
            </Text>
            <Text
              fontSize="sm"
              marginY="2"
              paddingLeft="2"
              paddingTop="2"
              align="left"
              color="gray.500"
            >
              Plus, leave all the paperwork to us for a hassle-free experience.
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default FlexTabListTwo;
