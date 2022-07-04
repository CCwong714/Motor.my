import React from "react";
import {
  Text,
  Box,
  Modal,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  Flex,
  Icon
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {MdKeyboardArrowDown} from "react-icons/md"

function ShowMotorModal({ children, text, title, header }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box onClick={onOpen} cursor="pointer">
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">{title}</Text>
        <Icon as={MdKeyboardArrowDown} w="18px" h="18px" />
      </Flex>

      <Text color="gray.400" noOfLines={1} textOverflow="ellipsis">
        {text}
      </Text>

      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ShowMotorModal;
