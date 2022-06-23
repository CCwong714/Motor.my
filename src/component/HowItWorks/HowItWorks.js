import {
  Box,
  Heading,
  Flex,
  TabPanel,
  Tab,
  Tabs,
  TabPanels,
  TabList,
} from "@chakra-ui/react";
import FlexTabListOne from "./FlexTabListOne";
import FlexTabListTwo from "./FlexTabListTwo";

function HowItWorks() {
  return (
    <>
      <Box paddingTop="10" bgColor="gray.100" paddingBottom="10" marginX={["0","0","100","100","300"]}>
        <Heading align="center">How It Works </Heading>
        <Flex justify="center">
          <Tabs variant="unstyled">
            <TabList justifyContent="center">
              <Tab
                _selected={{ color: "white", bg: "blue.500" }}
                borderRadius={30}
              >
                Tab 1
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "yellow.400" }}
                borderRadius={30}
                justify="center"
              >
                Tab 2
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FlexTabListOne />
              </TabPanel>
              <TabPanel>
                <FlexTabListTwo/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </>
  );
}

export default HowItWorks;
