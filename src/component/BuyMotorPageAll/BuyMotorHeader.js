import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  MenuList,
  Menu,
  MenuButton,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Grid,
} from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { BiCaretDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import BuyMotorHeaderButtonItem from "./BuyMotorHeaderButtonItem";
import BigIm1 from "../../image/Logo/BigIm1.jpg";
import BigIm2 from "../../image/Logo/BigIm2.png";
import FullDrawerButton from "./FullDrawerButton";
import ChooseLocation from "./ChooseLocation";

function BuyMotorHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        padding={5}
        justifyContent="center"
        marginX={["5", "5", "100", "100", "200"]}
      >
        <Box>
          <Flex justifyContent="space-between" fontSize="sm">
            <Text>Buy Motor</Text>
            <Button borderRadius={30} bgColor="yellow" onClick={onOpen}>
              <Icon as={ImLocation} h="2" w="2" marginRight={1} />
              <Text fontSize="xs" marginY="auto">
                All states
              </Text>
              <Icon as={BiCaretDown} h="2" w="2" marginLeft={1} />
            </Button>
          </Flex>

          <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Select Your Location</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Box bgColor="gray.200" padding={2}>
                  <Text>
                    Choose one or more location to view motors near you.
                  </Text>
                </Box>
                <Grid templateColumns="repeat(4,1fr)" gap={2} marginTop={4}>
                  <ChooseLocation locationName="Selangor"/>
                  <ChooseLocation locationName="Kuala Lumpur"/>
                  <ChooseLocation locationName="Pulau Pahang"/>
                  <ChooseLocation locationName="Johor"/>
                  <ChooseLocation locationName="Pahang"/>
                  <ChooseLocation locationName="Negeri Sembilan"/>
                  <ChooseLocation locationName="Melaka"/>
                  <ChooseLocation locationName="Perak"/>

                  <ChooseLocation locationName="All State"/>
                </Grid>
              </ModalBody>

              <ModalFooter>
                <Button onClick={onClose} w="100%" color="yellow.400" bgColor="blue.900">
                  View ??? Motors
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>

        <InputGroup marginTop={2}>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray.300" />}
          />
          <Input
            type="text"
            w={["300px", "550px", "100%"]}
            marginBottom={5}
            placeholder="Search for Motor by Brand ,Model"
          />
        </InputGroup>
        <Box display={["none", "block"]}>
          <BuyMotorHeaderButtonItem />
        </Box>
      </Box>
      <Box display={["block", "none"]} marginBottom="10" marginX="40%">
        <FullDrawerButton />
      </Box>
      <Flex
        marginX={["5", "5", "100", "100", "200"]}
        gap={3}
        overflowX="scroll"
      >
        <Image src={BigIm1} h="150" w="300" />
        <Image src={BigIm2} h="150" w="300" />
        <Image src={BigIm1} h="150" w="300" />
        <Image src={BigIm2} h="150" w="300" />
        <Image src={BigIm1} h="150" w="300" />
        <Image src={BigIm2} h="150" w="300" />
        <Image src={BigIm1} h="150" w="300" />
      </Flex>
      <Flex
        justifyContent="space-between"
        marginX={["5", "5", "100", "100", "200"]}
        marginY={2}
      >
        <Text fontSize="sm"> 1477 result(s)</Text>
        <Menu>
          <MenuButton
            marginRight={5}
            variant="ghost"
            _hover={{ backgroundColor: "transparent" }}
          >
            Financing
          </MenuButton>
          <MenuList>
            <MenuItem>Lowest Price</MenuItem>
            <MenuItem>Highest Price</MenuItem>
            <MenuItem>Lowest Mileage</MenuItem>
            <MenuItem>Highest Mileage</MenuItem>
            <MenuItem>New to Old</MenuItem>
            <MenuItem>Old to New</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}

export default BuyMotorHeader;
