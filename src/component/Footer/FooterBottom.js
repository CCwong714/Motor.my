import { Flex, Text, Link, Divider, Box } from "@chakra-ui/react";
import { useState } from "react";
import SelectCountry from "../SelectCountry";

const items = [
  {
    label: "Malaysia",
    value: "malaysia",
  },
  {
    label: "Indonesia",
    value: "indonesia",
  },
  {
    label: "Thailand",
    value: "thailand",
  },
  {
    label: "Singapore",
    value: "singapore",
  },
];

function FooterBottom() {
  const [value, setValue] = useState("");

  return (
    <>
      <Flex paddingY="5" justifyContent={["space-between"]}>
        <Flex flexDirection="column" marginX={5}>
          <Text color="gray.400">
            More ways to shop :
            <Link fontSize="sm" marginX="1" color="blue.500">
              Find a Motor Center near you.
            </Link>
            Or call
            <Link fontSize="sm" marginX="1" color="blue.500">
              1-800-82-3388
            </Link>
          </Text>
          <Flex
            display={["column", "column", "row", "row", "row"]}
            justifyContent="space-between"
          >
            <Box
              display={["block", "block", "none", "none", "none"]}
              marginBottom={2}
              marginTop={2}
              w="auto"
            >
              <SelectCountry
                items={items}
                onChange={(newValue) => setValue(newValue)}
                value={value}
              />
            </Box>

            <Text color="gray.400" marginRight="2" marginBottom={2}>
              © 2016-2022 Motor Sdn Bhd (201401025864) All rights reserved.
            </Text>
            <Flex>
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
        </Flex>

        <Box display={["none", "none", "block", "block", "block"]}>
          <SelectCountry
            items={items}
            onChange={(newValue) => setValue(newValue)}
            value={value}
          />
        </Box>
      </Flex>
    </>
  );
}

export default FooterBottom;
