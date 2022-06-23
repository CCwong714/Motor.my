import { Flex, Heading, Text ,Icon} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

function FooterTopLeft() {
  return (
    <>
      <Flex flexDirection="column" marginRight="5" w={["250","320px","400px"]} marginTop="5">
        <Heading color="yellow.400" marginBottom="3">Motor</Heading>
        <Text color="gray.300" marginBottom="3">
          Carsome is Southeast Asia’s largest integrated car e-commerce
          platform, with presence in Malaysia, Indonesia, Thailand and
          Singapore.
        </Text>
        <Flex>
          <Icon as={FaFacebook} w={30} h="30" marginRight="3" color="gray.400"/>
          <Icon as={FaFacebook} w={30} h="30" marginRight="3" color="gray.400"/>
          <Icon as={FaFacebook} w={30} h="30" marginRight="3" color="gray.400"/>
        </Flex>
      </Flex>
    </>
  );
}

export default FooterTopLeft;
