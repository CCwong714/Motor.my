import { Box, Flex, Divider } from "@chakra-ui/react";
import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";
import FooterCenter from "./FooterCenter";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <>
      <Box bgColor="gray.700">
        <Flex flexDirection="column" marginX="300">
          <Flex marginX="5">
            <FooterTopLeft />
            <FooterTopRight />
          </Flex>
          <FooterCenter />
        </Flex>
        <Divider orientation="horizontal" bgColor="gray.800" w="100%" h="1px" />

        <Box marginX="300" bgColor="gray.700">
          <FooterBottom />
        </Box>
      </Box>
    </>
  );
}

export default Footer;
