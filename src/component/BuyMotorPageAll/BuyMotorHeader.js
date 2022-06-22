import React from "react";
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
} from "@chakra-ui/react";
import { ImLocation } from "react-icons/im";
import { BiCaretDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import BuyMotorHeaderButtonItem from "./BuyMotorHeaderButtonItem";
import Image3 from "../../image/photo3.jpg";
import FullDrawerButton from "./FullDrawerButton";

function BuyMotorHeader() {
  return (
    <>
      <Box
        padding={5}
        justifyContent="center"
        marginX={["5", "5", "100", "200", "300"]}
      >
        <Flex justifyContent="space-between" fontSize="sm">
          <Text>Buy Car</Text>
          <Button borderRadius={30} bgColor="yellow">
            <Icon as={ImLocation} h="2" w="2" marginRight={1} />
            <Text fontSize="xs" marginY="auto">
              All states
            </Text>
            <Icon as={BiCaretDown} h="2" w="2" marginLeft={1} />
          </Button>
        </Flex>

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
      <Box
        Box
        display={["block", "none"]}
        marginBottom="10"
        marginX="40%"
      >
        <FullDrawerButton />
      </Box>
      <Flex marginX={["5", "5", "100", "200", "300"]} overflowX="scroll">
        <Image marginRight={3} src={Image3} h="150" w="300" />
        <Image marginRight={3} src={Image3} h="150" w="300" />
        <Image marginRight={3} src={Image3} h="150" w="300" />
        <Image marginRight={3} src={Image3} h="150" w="300" />
        <Image marginRight={3} src={Image3} h="150" w="300" />
        <Image marginRight={3} src={Image3} h="150" w="300" />
        <Image src={Image3} h="150" w="300" />
      </Flex>
      <Flex
        justifyContent="space-between"
        marginX={["5", "5", "100", "200", "300"]}
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
