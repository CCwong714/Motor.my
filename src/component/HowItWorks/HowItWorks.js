import {
  Box,
  Heading,
  Flex,
  TabPanel,
  Tab,
  Tabs,
  TabPanels,
  TabList,
  Text,
} from "@chakra-ui/react";
import FlexTabListOne from "./FlexTabListOne";
import FlexTabListTwo from "./FlexTabListTwo";

function HowItWorks() {
  return (
    <>
      <Box
        paddingTop="10"
        bgColor="gray.100"
        paddingBottom="10"
        marginX={["0", "0", "100", "100", "200"]}
      >
        <Heading align="center">How It Works </Heading>
        <Flex justify="center" marginTop="5">
          <Tabs variant="unstyled">
            <TabList justifyContent="center">
              <Tab
                _selected={{ color: "white", bg: "blue.500" }}
                borderRadius={30}
              >
                <Text fontSize="xl">How to Buy</Text>
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "yellow.400" }}
                borderRadius={30}
                justify="center"
              >
                <Text fontSize="xl">How to Sell</Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FlexTabListOne />
              </TabPanel>
              <TabPanel>
                <FlexTabListTwo />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </>
  );
}

export default HowItWorks;
