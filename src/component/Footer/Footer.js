import { Box, Flex, Divider } from "@chakra-ui/react";
import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";
import FooterCenter from "./FooterCenter";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <>
      <Box bgColor="gray.700">
        <Flex flexDirection={["row","row","row","row" ,"column" ]}marginX={["0","0","50","100","150"]}>
          <Flex marginX="5" flexDirection={["column","column","column","row" ,"row" ]}>
            <FooterTopLeft />
            <FooterTopRight />
          </Flex>
          
        </Flex>
        <Box marginX={["0","0","50","100","150"]}>
        <FooterCenter />
        </Box>
        <Divider orientation="horizontal" bgColor="gray.800" w="100%" h="1px" />

        <Box marginX={["0","0","50","100","150"]} bgColor="gray.700">
          <FooterBottom />
        </Box>
      </Box>
    </>
  );
}

export default Footer;
