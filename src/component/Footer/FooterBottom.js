import { Flex, Text, Link, Divider, Select } from "@chakra-ui/react";
function FooterBottom() {
  return (
    <>
      <Flex paddingY="5" justifyContent={["space-between"]}>
        <Flex flexDirection="column">
          <Text color="gray.400">
            More ways to shop :
            <Link fontSize="12px" marginX="1" color="blue.500">
              Find a Carsome Center near you.
            </Link>
            Or call
            <Link fontSize="12px" marginX="1" color="blue.500">
              {" "}
              1-800-82-3388{" "}
            </Link>
          </Text>
          <Flex>
            <Text color="gray.400" marginRight="2">
              © 2016-2022 Carsome Sdn Bhd (201401025864) All rights reserved.
            </Text>
            <Link variant="ghost" marginX="1" color="gray.500">
              Privacy Policy
            </Link>
            <Divider
              orientation="vertical"
              bgColor="gray.300"
              w="1px"
              h="4"
              marginX="2"
              alignSelf="center"
            />
            <Link variant="ghost" marginX="1" color="gray.500">
              Terms of Use
            </Link>
          </Flex>
        </Flex>

        <Select placeholder="Select Option" color="gray.400" w="auto">
          <option>Malaysia</option>
          <option>Singapore</option>
          <option>Indonesia</option>
          <option>Thailand</option>
        </Select>
      </Flex>
    </>
  );
}

export default FooterBottom;
