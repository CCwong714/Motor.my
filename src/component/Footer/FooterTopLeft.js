import { Flex, Heading, Text ,Icon} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

function FooterTopLeft() {
  return (
    <>
      <Flex flexDirection="column" marginX="5">
        <Heading>Motor</Heading>
        <Text >
          Carsome is Southeast Asia’s largest integrated car e-commerce
          platform, with presence in Malaysia, Indonesia, Thailand and
          Singapore.
        </Text>
        <Flex>
          <Icon as={FaFacebook} w={30} h="30" marginRight="3" color="blue.700"/>
          <Icon as={FaFacebook} w={30} h="30" marginRight="3" color="blue.700"/>
          <Icon as={FaFacebook} w={30} h="30" marginRight="3" color="blue.700"/>
        </Flex>
      </Flex>
    </>
  );
}

export default FooterTopLeft;
