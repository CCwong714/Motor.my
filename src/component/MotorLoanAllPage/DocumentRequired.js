import {
  Text,
  Grid,
  Box,
  Image,
  Icon,
  Flex,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import IconMotor from "../../image/Logo/IconMotor.jpg";
import { TiTick } from "react-icons/ti";

function DocumentRequired() {
  return (
    <>
      <Text
        align="center"
        fontWeight="bold"
        fontSize="2xl"
        marginTop="14"
        marginBottom="10"
      >
        Documenet Required For Motor Loan Application
      </Text>

      <Box marginX={["0", "0", "100", "100", "250"]}>
        {/* Desktop Size */}
        <Box display={["none", "none", "none", "block", "block"]}>
          <Grid
            templateColumns={[
              "repeat(2,1fr)",
              "repeat(3,1fr)",
              "repeat(4,1fr)",
              "repeat(4,1fr)",
            ]}
            gap={6}
          >
            <Box padding={5} position="relative" bgColor="gray.100" w="100%">
              <Image
                src={IconMotor}
                w="150px"
                h="150px"
                padding={5}
                borderRadius="100"
                justifyContent="left"
              />
              <Text
                align={["center", "left"]}
                fontWeight="bold"
                marginTop={2}
                fontSize="xl"
              >
                Public Sector Employees
              </Text>
              <Text fontSize="sm">Ages 21 & Above</Text>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontSize="lg" marginY="2" marginTop="5" fontWeight="bold">
                  Valid Malaysian Identification Card (IC)
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Drinving License
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Latest 3 Months' Payslips
                </Text>
              </Flex>
            </Box>

            <Box padding={5} position="relative" bgColor="gray.100" w="100%">
              <Image
                src={IconMotor}
                w="150px"
                h="150px"
                padding={5}
                borderRadius="100"
                justifyContent="left"
              />
              <Text
                align={["center", "left"]}
                fontWeight="bold"
                marginTop={2}
                fontSize="xl"
              >
                Private Sector Employees
              </Text>
              <Text fontSize="sm">Ages 21 & Above</Text>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontSize="lg" marginY="2" marginTop="5" fontWeight="bold">
                  Valid Malaysian Identification Card (IC)
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Drinving License
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Passport or Employment Letter
                  </Text>

                  <Text>(for applicants working less than 3 months)</Text>
                </Box>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Latest 3 Months' Physlips
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  EPF Statement
                </Text>
              </Flex>
            </Box>

            <Box padding={5} position="relative" bgColor="gray.100" w="100%">
              <Image
                src={IconMotor}
                w="150px"
                h="150px"
                padding={5}
                borderRadius="100"
                justifyContent="left"
              />
              <Text
                align={["center", "left"]}
                fontWeight="bold"
                marginTop={2}
                fontSize="xl"
              >
                Self Employed Individuals
              </Text>
              <Text fontSize="sm">Ages 21 & Above</Text>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontSize="lg" marginY="2" marginTop="5" fontWeight="bold">
                  Valid Malaysian Identification Card (IC)
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Drinving License
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Latest 6 Months' Physlips
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Copy of Company Registration (SSM)
                </Text>
              </Flex>
            </Box>

            <Box padding={5} position="relative" bgColor="gray.100" w="100%">
              <Image
                src={IconMotor}
                w="150px"
                h="150px"
                padding={5}
                borderRadius="100"
                justifyContent="left"
              />
              <Text
                align={["center", "left"]}
                fontWeight="bold"
                marginTop={2}
                fontSize="xl"
              >
                Gradute & Young Professionals Scheme
              </Text>
              <Text fontSize="sm">Ages 18 to 30</Text>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontSize="lg" marginY="2" marginTop="5" fontWeight="bold">
                  Valid Malaysian Identification Card (IC)
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Drinving License
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Latest 3 Months' Payslips
                </Text>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Job Offer Letter
                  </Text>
                  <Text>for applicants working less than 3 months</Text>
                </Box>
              </Flex>

              <Flex gap={2}>
                <Box alignSelf="center">
                  <Icon as={TiTick} w="7" h="7" color="green.400" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" marginY="2">
                  Copy of Degree or Diploma Certificate
                </Text>
              </Flex>
            </Box>
          </Grid>
        </Box>

        {/* Phone Size */}
        <Box  display={["block", "block", "block", "none", "none"]}>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Flex textAlign="left" alignItems="center" w="100%">
                  <Image
                    src={IconMotor}
                    w="150px"
                    h="150px"
                    padding={5}
                    borderRadius="100"
                    justifyContent="left"
                  />
                  <Box>
                    <Text
                      align={["center", "left"]}
                      fontWeight="bold"
                      marginTop={2}
                      fontSize="xl"
                    >
                      Public Sector Employees
                    </Text>
                    <Text fontSize="sm">Ages 21 & Above</Text>
                  </Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text
                    fontSize="lg"
                    marginY="2"
                    marginTop="5"
                    fontWeight="bold"
                  >
                    Valid Malaysian Identification Card (IC)
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Drinving License
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Latest 3 Months' Payslips
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Flex textAlign="left" alignItems="center" w="100%">
                  <Image
                    src={IconMotor}
                    w="150px"
                    h="150px"
                    padding={5}
                    borderRadius="100"
                    justifyContent="left"
                  />
                  <Box>
                    <Text
                      align={["center", "left"]}
                      fontWeight="bold"
                      marginTop={2}
                      fontSize="xl"
                    >
                      Private Sector Employees
                    </Text>
                    <Text fontSize="sm">Ages 21 & Above</Text>
                  </Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text
                    fontSize="lg"
                    marginY="2"
                    marginTop="5"
                    fontWeight="bold"
                  >
                    Valid Malaysian Identification Card (IC)
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Drinving License
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" fontSize="lg" marginY="2">
                      Passport or Employment Letter
                    </Text>

                    <Text>(for applicants working less than 3 months)</Text>
                  </Box>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Latest 3 Months' Physlips
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    EPF Statement
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Flex textAlign="left" alignItems="center" w="100%">
                  <Image
                    src={IconMotor}
                    w="150px"
                    h="150px"
                    padding={5}
                    borderRadius="100"
                    justifyContent="left"
                  />
                  <Box>
                    <Text
                      align={["center", "left"]}
                      fontWeight="bold"
                      marginTop={2}
                      fontSize="xl"
                    >
                      Self Emplyoed Individuals
                    </Text>
                    <Text fontSize="sm">Ages 21 & Above</Text>
                  </Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text
                    fontSize="lg"
                    marginY="2"
                    marginTop="5"
                    fontWeight="bold"
                  >
                    Valid Malaysian Identification Card (IC)
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Drinving License
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Latest 6 Months' Physlips
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Copy of Company Registration (SSM)
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Flex textAlign="left" alignItems="center" w="100%">
                  <Image
                    src={IconMotor}
                    w="150px"
                    h="150px"
                    padding={5}
                    borderRadius="100"
                    justifyContent="left"
                  />
                  <Box>
                    <Text
                      align={["center", "left"]}
                      fontWeight="bold"
                      marginTop={2}
                      fontSize="xl"
                    >
                      Gradute & Young Professionals Scheme
                    </Text>
                    <Text fontSize="sm">Ages 18 to 30</Text>
                  </Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text
                    fontSize="lg"
                    marginY="2"
                    marginTop="5"
                    fontWeight="bold"
                  >
                    Valid Malaysian Identification Card (IC)
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Drinving License
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Latest 3 Months' Payslips
                  </Text>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" fontSize="lg" marginY="2">
                      Job Offer Letter
                    </Text>
                    <Text>for applicants working less than 3 months</Text>
                  </Box>
                </Flex>

                <Flex gap={2}>
                  <Box alignSelf="center">
                    <Icon as={TiTick} w="7" h="7" color="green.400" />
                  </Box>
                  <Text fontWeight="bold" fontSize="lg" marginY="2">
                    Copy of Degree or Diploma Certificate
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  );
}

export default DocumentRequired;
