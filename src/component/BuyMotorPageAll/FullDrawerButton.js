import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Flex,
  Box,
  Grid,
} from "@chakra-ui/react";
import FullDrawerButtonRight from "./FullDrawerButtonRight";

function FullDrawerButton() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  const sizes = "full";

  return (
    <>
      <Button
        onClick={() => handleClick("full")}
        key={size}
      >{`Filters`}</Button>

      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size={size}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader alignSelf="center">{`All Filters`}</DrawerHeader>
          <DrawerBody padding="0">
            <Flex bgColor="gray.100">
              <Flex flexDirection="column" position="relative" width="120px">
                <Button fontSize="xs"> Brand & Model</Button>
                <Button fontSize="xs"> Body Type</Button>
                <Button fontSize="xs"> Budget</Button>
                <Button fontSize="xs"> Year</Button>
                <Button fontSize="xs"> Transmission</Button>
                <Button fontSize="xs"> Mileage</Button>
                <Button fontSize="xs"> Color</Button>
                <Button fontSize="xs"> Motor Certified</Button>
                <Button fontSize="xs"> Store </Button>
              </Flex>
              <Flex flexDirection="column" w="100%" overflowY="scroll">
                <FullDrawerButtonRight/>
              </Flex>
            </Flex>

            <Flex
              gap={2}
              justifyContent="space-between"
              bottom="0"
              left="0"
              width="100%"
              position="fixed"
              padding="4"
              bgColor="white"
              zIndex="999"
            >
              <Button flexBasis={300} bgColor="gray.200" color="blue.700">
                Reset
              </Button>
              <Button flexBasis={300} bgColor="blue.900" color="yellow">
                Apply (123 Motor)
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FullDrawerButton;
