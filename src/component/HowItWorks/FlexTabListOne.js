import { Box, Image, Text, Button, Grid } from "@chakra-ui/react";
import Search from "../../image/search.png";
import Deliverymotor from "../../image/deliverymotor.png";
import TestDrive from "../../image/motortestdrive.jpg";
import MotorPayment from "../../image/motorpayment.png";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function FlexTabListOne() {
  let navigate = useNavigate();
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
          <Box padding={5} position="relative" bgColor="white" h="350px">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              1
            </Text>

            <Image
              src={Search}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text fontWeight="bold" fontSize="lg" marginTop={5}>
              Find Your Motor
            </Text>
            <Text fontSize="md" marginY="2" align="left">
              Browse our carefully curated and professionaly Inspected motors
              online
            </Text>

            <Button
              w="100%"
              bgColor="white"
              fontSize="md"
              paddingBottom="-5"
              onClick={() => {
                navigate("/buy-motor");
              }}
            >
              View your motor
            </Button>
          </Box>

          <Box padding={5} position="relative" bgColor="white" h="350px">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              2
            </Text>

            <Image
              src={TestDrive}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text fontWeight="bold" fontSize="lg" marginTop={5}>
              Test Drive
            </Text>
            <Text fontSize="md" marginY="2" align="left">
              All our motors are sanitized before and after the test drive,
              making your experience safe and sound.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white" h="350px">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              3
            </Text>

            <Image
              src={Deliverymotor}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text fontWeight="bold" fontSize="lg" marginTop={5}>
              Doorstep Delivery
            </Text>
            <Text fontSize="md" marginY="2" align="left">
              Choose to collect your motor from our centers or enjoy a doorstep
              delivery.
            </Text>
          </Box>

          <Box padding={5} position="relative" bgColor="white" h="350px">
            <Text
              position="absolute"
              right="0"
              top="0"
              fontWeight="bold"
              bgColor="gray.300"
              w="5"
              h="5"
              align="center"
              borderBottomLeftRadius={8}
              boxShadow="2xl"
              color="gray.500"
            >
              4
            </Text>

            <Image
              src={MotorPayment}
              w="150px"
              h="150px"
              padding={5}
              borderRadius="100"
              justifyContent="left"
            />
            <Text fontWeight="bold" fontSize="lg" marginTop={5}>
              Worry-free Purchase
            </Text>
            <Text fontSize="md" marginY="2" align="left">
              Enjoy a 5-day money back guarantee when you buy motor Certified
              motor.
            </Text>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default FlexTabListOne;
