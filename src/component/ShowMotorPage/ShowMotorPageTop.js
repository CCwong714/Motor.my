import React from "react";
// import { useParams } from "react-router-dom";
import Gellary from "../Gallery/Gellary";
import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  Divider,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import sliderJson from "../../Slider.json";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import ShowMotorModal from "./ShowMotorModal";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaShareAlt } from "react-icons/fa";

function ShowMotorPageTop() {
  // const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box marginX={["0", "0", "100", "200", "250"]}>
      <Flex
        gap={6}
        padding={10}
        flexDirection={["column", "column", "column", "column", "row"]}
      >
        <Box w={["100", "100", "100", "100", "70%"]}>
          <Gellary />
        </Box>

        <Box w="100%">
          <Flex>
            <Text fontSize="xl" fontWeight="bold">
              {sliderJson[0].year} {sliderJson[0].name}
            </Text>
          </Flex>

          <Flex>
            <Text>{sliderJson[0].howKm} </Text>
            <Box marginTop={3}>
              <hr
                style={{
                  height: "1px",
                  color: "black",
                  width: "12px",
                  transform: "rotate(90deg)",
                }}
              />
            </Box>
            <Text>{sliderJson[0].auto}</Text>
          </Flex>

          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <Text marginRight={2} color="red.500">
                RM
              </Text>
              <Text color="red.500" fontSize="xl" fontWeight="bold">
                {sliderJson[0].price}
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2} >
              <Icon as={FaShareAlt} onClick={onOpen} _hover={{cursor:"pointer" }}/>

              <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="sm"
                isCentered={true}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <Text align="center">
                      Share with Family {`&`} Friends !
                    </Text>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Box></Box>
                  </ModalBody>
                </ModalContent>
              </Modal>

              <Icon as={FcLikePlaceholder} />
            </Flex>
          </Flex>

          <Flex>
            <Text color="red.500" marginRight={3}>
              RM {sliderJson[0].payMo} /mo
            </Text>
            <Link color="blue.600">Loan Calculator</Link>
          </Flex>

          <Divider marginTop={2} color="gray.400" />

          <Flex flexDirection="column" gap={2}>
            <ShowMotorModal
              title="All Inclusive Price"
              text=" • Road Tax • 1-YearWarranty • OwnerShip Transfer Fee • Puspakom Inspection Fee • Loan Processing Fee"
              header="All Inclusive Price"
            >
              <Flex padding={2} flexDir="column" gap={2}>
                <Text>
                  <Icon as={TiTick} marginRight={1} color="green.300" />
                  Road Text
                </Text>
                <Text>
                  <Icon as={TiTick} marginRight={1} color="green.300" />
                  1-Year Warranty
                </Text>
                <Text>
                  <Icon as={TiTick} marginRight={1} color="green.300" />
                  Ownership Transfer Fee
                </Text>
                <Text>
                  <Icon as={TiTick} marginRight={1} color="green.300" />
                  Puspakom Inspection Fee
                </Text>
                <Text>
                  <Icon as={TiTick} marginRight={1} color="green.300" />
                  Loan Processing Fee
                </Text>
              </Flex>
            </ShowMotorModal>

            <Divider marginTop={2} color="gray.400" />

            <ShowMotorModal
              title="Motor Location"
              text="Motorshop Ipoh,Perak"
              header="MotorShop Ipoh"
            >
              <Flex padding={2} flexDir="column" gap={2}>
                <Text>Ipoh No 177, Jalan Lahat,30200 Ipoh ,Perak</Text>
                <Flex gap={1}>
                  <Icon as={FaClock} marginTop={1} />
                  <Flex flexDir="column">
                    <Text>Opening Hours</Text>
                    <Text>9.00 -18.00 (Monday - Sunday)</Text>
                  </Flex>
                </Flex>
                <Flex alignItems="center" gap={1}>
                  <Icon as={FaPhoneAlt} />
                  <Text>1800823388</Text>
                </Flex>
              </Flex>
            </ShowMotorModal>

            <Divider marginTop={2} color="gray.400" />

            <ShowMotorModal
              title="Highlight"
              text="•View 360 •Sunroof •Auto Cruise Control •Electric Powered Seats"
              header="Hightlight"
            >
              <Flex flexWrap="wrap" gap={2}>
                <Text
                  bgColor="blue.100"
                  align="center"
                  w="100"
                  border="1px"
                  borderRadius="5"
                  padding={2}
                >
                  View 360
                </Text>
                <Text
                  bgColor="blue.100"
                  align="center"
                  w="100"
                  border="1px"
                  borderRadius="5"
                  padding={2}
                >
                  Sunroof
                </Text>
                <Text
                  bgColor="blue.100"
                  align="center"
                  w="100"
                  border="1px"
                  borderRadius="5"
                  padding={2}
                >
                  Auto Cruise Control
                </Text>
                <Text
                  bgColor="blue.100"
                  align="center"
                  w="100"
                  border="1px"
                  borderRadius="5"
                  padding={2}
                >
                  Eletric Powered Seats
                </Text>
              </Flex>
            </ShowMotorModal>
          </Flex>
          <Divider marginTop={2} color="gray.400" />

          <Button
            marginTop={4}
            w="100%"
            bgColor="yellow.400"
            color="blue.900"
            _hover={{ bgColor: "yellow.300" }}
          >
            Get Started
          </Button>

          <Flex marginTop={3}>
            <Text color="gray.400">Need more help? contact us via</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default ShowMotorPageTop;
