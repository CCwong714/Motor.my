import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import StarSVG from "../../image/Star.svg";
import FiveDayMoney from "../../image/5Daymoney.svg";
import HiddenFees from "../../image/hiddenfees.svg";
import Point175 from "../../image/175-point.svg";
import Warranty from "../../image/warranty.svg";

function ShowMotorBody() {
  return (
    <>
      <Flex justifyContent="center" gap={2} marginTop={5}>
        <Button>
          <a href="#motor1">Motor details</a>
        </Button>
        <Button>
          <a href="#motor2">feature and specs</a>
        </Button>
        <Button>
          <a href="#motor3">inspection report</a>
        </Button>
        <Button>
          <a href="#motor4">financing</a>
        </Button>
      </Flex>

      {/* Motor Details */}
      <Box id="motor1" marginY={14} marginX={["0", "0", "100", "200", "250"]}>
        <Text fontSize="3xl" fontWeight="bold" align="center">
          Motor details
        </Text>
        <Text align="center">ID :CHQ4000</Text>

        <Divider color="gray.400" marginY={2} />
        <Flex
          gap={6}
          justifyContent="center"
          flexDirection={["column", "column", "row"]}
          padding={5}
        >
          <Box w="100%">
            <Flex justifyContent="space-between" marginY={2}>
              <Text>Full Type</Text>
              <Text fontWeight="bold">Petrol</Text>
            </Flex>

            <Divider color="gray.400" />

            <Flex justifyContent="space-between" marginY={2}>
              <Text>Seat</Text>
              <Text fontWeight="bold">7{`&`}above</Text>
            </Flex>

            <Divider color="gray.400" />

            <Flex justifyContent="space-between" marginY={2}>
              <Text>Registration Type</Text>
              <Text fontWeight="bold">Private</Text>
            </Flex>

            <Divider color="gray.400" />

            <Flex justifyContent="space-between" marginY={2}>
              <Text>Spare Key</Text>
              <Text fontWeight="bold">No</Text>
            </Flex>

            <Divider color="gray.400" />

            <Flex justifyContent="space-between" marginY={2}>
              <Text>Principal Warranty Exp Date</Text>
              <Text fontWeight="bold">Feb 2024</Text>
            </Flex>
          </Box>

          <Box w="100%">
            <Flex justifyContent="space-between" marginY={2}>
              <Text>Current Color</Text>
              <Text fontWeight="bold">Gray</Text>
            </Flex>

            <Divider color="gray.400" />

            <Flex justifyContent="space-between" marginY={2}>
              <Text>Registration Date</Text>
              <Text fontWeight="bold">Feb 2019</Text>
            </Flex>

            <Divider color="gray.400" />

            <Flex justifyContent="space-between" marginY={2}>
              <Text>Current Mileage</Text>
              <Text fontWeight="bold">30,616KM</Text>
            </Flex>

            <Divider color="gray.400" />

            <Flex justifyContent="space-between" marginY={2}>
              <Text>Service Book</Text>
              <Text fontWeight="bold">Yes</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* specifications */}
      <Box bgColor="gray.100" paddingY={16}>
        <Box id="motor2" marginY={14} marginX={["0", "0", "100", "200", "250"]}>
          <Text
            borderRadius={30}
            bgColor="blue.900"
            fontSize="3xl"
            fontWeight="bold"
            color="yellow.400"
            align="center"
          >
            Specifications
          </Text>

          <Divider color="gray.400" marginY={2} />

          <Flex
            gap={6}
            justifyContent="center"
            flexDirection={["column", "column", "row"]}
            padding={5}
          >
            <Box w="100%">
              <Flex justifyContent="space-between" marginY={2}>
                <Text>Transmission</Text>
                <Text fontWeight="bold">Manual</Text>
              </Flex>

              <Divider color="gray.400" />

              <Flex justifyContent="space-between" marginY={2}>
                <Text>Seat Capacity</Text>
                <Text fontWeight="bold">2</Text>
              </Flex>

              <Divider color="gray.400" />

              <Flex justifyContent="space-between" marginY={2}>
                <Text>Engine CC</Text>
                <Text fontWeight="bold">1497</Text>
              </Flex>
            </Box>

            <Box w="100%">
              <Flex justifyContent="space-between" marginY={2}>
                <Text>Doors</Text>
                <Text fontWeight="bold">5</Text>
              </Flex>

              <Divider color="gray.400" />

              <Flex justifyContent="space-between" marginY={2}>
                <Text>Assembled</Text>
                <Text fontWeight="bold">Locally bulit</Text>
              </Flex>

              <Divider color="gray.400" />

              <Flex justifyContent="space-between" marginY={2}>
                <Text>Peak Power(hp)</Text>
                <Text fontWeight="bold">120</Text>
              </Flex>
            </Box>
          </Flex>
          <Box align="center">
            <Button
              bgColor="gray.100"
              border="2px"
              color="blue.500"
              paddingX="14"
            >
              View All
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Inspection Report */}
      <Box id="motor3" marginY={14} marginX={["0", "0", "100", "200", "250"]}>
        <Flex
          justifyContent="center"
          flexDirection={["column", "column", "row"]}
        >
          <Box bgColor="blue.800" borderLeftRadius={15}>
            <Box w="100%" marginY={14}>
              <Text
                align="center"
                fontWeight="bold"
                fontSize="2xl"
                color="#FFEAC1"
              >
                Quality Assured Motors
              </Text>
              <Text align="center" color="#FFEAC1">
                Our strict 175-point inspection and comprehensive refurbishment
                process ensure Motorshop Certified motors hold the highest
                standards of quality.
              </Text>

              <Flex gap={2} w="360px" marginX="auto" paddingTop={5}>
                <Box
                  borderRadius={30}
                  bgColor="yellow.400"
                  padding={4}
                  w="100%"
                  h="150px"
                >
                  <Image src={StarSVG} />
                  <Text align="center">Safety Beyond Standard</Text>
                </Box>

                <Box
                  borderRadius={30}
                  bgColor="yellow.400"
                  padding={4}
                  w="100%"
                  h="150px"
                >
                  <Image src={StarSVG} />
                  <Text align="center">Complete Comfort</Text>
                </Box>

                <Box
                  borderRadius={30}
                  bgColor="yellow.400"
                  padding={4}
                  w="100%"
                  h="150px"
                >
                  <Image src={StarSVG} />
                  <Text align="center">Refurbished Aesthetics</Text>
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box
            w="100%"
            padding={5}
            border="1px"
            borderColor="gray.200"
            borderRightRadius={15}
          >
            <Flex flexDir="column" gap={3}>
              <Flex justifyContent="space-between">
                <Text fontWeight="bold" fontSize="lg">
                  Exterior
                </Text>

                <Flex gap={1}>
                  <Text color="orange" display="flex" fontSize="lg">
                    1 Detected
                  </Text>
                  <Text color="gray.400" fontSize="lg">
                    / 53
                  </Text>
                </Flex>
              </Flex>

              <Flex gap={1}>
                <Text color="gray.400">Right Rear Door</Text>
                <Text color="orange.400" fontSize="lg">
                  DENT
                </Text>
              </Flex>

              <Divider color="gray.200" />

              <Flex justifyContent="space-between">
                <Text fontWeight="bold" fontSize="lg">
                  Interior
                </Text>
                <Text color="green.300" fontSize="lg">
                  84 Passed
                </Text>
              </Flex>

              <Divider color="gray.200" />

              <Flex justifyContent="space-between">
                <Text fontWeight="bold" fontSize="lg">
                  Road Test
                </Text>
                <Text color="green.300" fontSize="lg">
                  15 Passed
                </Text>
              </Flex>

              <Divider color="gray.200" />

              <Flex justifyContent="space-between">
                <Text fontWeight="bold" fontSize="lg">
                  UnderBody
                </Text>
                <Text color="green.300" fontSize="lg">
                  23 Passed
                </Text>
              </Flex>

              <Divider color="gray.200" />

              <Box align="center">
                <Button w="80%" bgColor="white" color="blue.400" border="1px">
                  Get Full Report
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* video */}
      <Box marginY={14} marginX={["0", "0", "100", "200", "250"]}>
        <Flex flexDir={["column", "column", "column", "column", "row"]} gap={5}>
          <Box w="100%" marginY="auto" padding={5}>
            <Text align="center" fontSize="2xl" fontWeight="bold">
              Delivering Quality Refubished Motors to You
            </Text>
            <Text align="center">
              Every MotorShop Certified motor undergoes a thorough refurbishment
              process and strict quality control so you can be completely
              confident when you buy from us. Learn more about MotorShop
              Certified Lab, where motors are transformed to be quality
              refurbished motors.
            </Text>
          </Box>

          <Box w="100%">
            <Box
              as="iframe"
              width="100%"
              h="500px"
              src={`https://www.youtube.com/embed/JLf3GLVPRaU`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Box>
        </Flex>
      </Box>

      <Box
        marginY={14}
        marginX={["0", "0", "100", "200", "250"]}
        borderRadius={15}
        padding={10}
        bgColor="gray.100"
      >
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
          ]}
          gap={5}
        >
          <Flex gap={2} align="center">
            <Image src={Point175} />
            <Text fontWeight="bold">175-Point Inspection</Text>
          </Flex>

          <Flex gap={2} align="center">
            <Image src={HiddenFees} />
            <Text fontWeight="bold">Fixed Price No Hidden Fees</Text>
          </Flex>

          <Flex gap={2} align="center">
            <Image src={Warranty} />
            <Text fontWeight="bold">1-Year Warranty</Text>
          </Flex>

          <Flex gap={2} align="center">
            <Image src={FiveDayMoney} />
            <Text fontWeight="bold">5-Day Money-back Guarantee</Text>
          </Flex>
        </Grid>
      </Box>

      {/* Financing */}
      <Box id="motor4" marginY={14} marginX={["0", "0", "100", "200", "250"]}>
        <Text align="center"> Financing</Text>
        <Text align="center">
          Let us find a monthly budget that works for you.
        </Text>
        <Flex>
          <Flex padding={10} flexDir="column" w="100%">
            <Box>
              <Text align="center">Estimated Monthly Payment</Text>
              <Text align="center">RM1000 /month</Text>
              <Text align="center">
                This is based on a 3.5% interest rate. Any fluctuations in the
                interest rate will affect the monthly payment amount.
              </Text>
            </Box>

            <Flex w="100%" gap={5} marginTop={10}>
              <Box w="100%">
                <Flex justifyContent="space-between">
                  <Text>Down Payment</Text>
                  <Text>RM 46,187</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Motor Price</Text>
                  <Text>RM 73,300</Text>
                </Flex>
              </Box>

              <Flex justifyContent="space-between" w="100%">
                <Text>Loan Amount</Text>
                <Text>RM 27,113</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex w="40%" padding={10} flexDir="column" gap={6}>
            <Text>Down Payment</Text>

            <Slider aria-label="slider-ex-5" defaultValue={10}>
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="yellow.300" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="tomato" />
              </SliderThumb>
            </Slider>

            <Text>Loan Tenure</Text>
            <Slider aria-label="slider-ex-5" defaultValue={10}>
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="yellow.300" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="tomato" />
              </SliderThumb>
            </Slider>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default ShowMotorBody;
