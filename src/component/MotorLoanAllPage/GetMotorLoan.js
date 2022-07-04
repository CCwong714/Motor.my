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
import GetMotorLoanPageOne from "./GetMotorLoanPageOne";
import GetMotorLoanPageTwo from "./GetMotorLoanPageTwo";

function GetMotorLoan() {
  return (
    <Box bgColor="gray.100">
      <Box
        paddingTop="10"
        paddingBottom="10"
        marginX={["5", "5", "100", "100", "200"]}
      >
        <Heading align="center" marginY="5">
          Get a Motor Loan in 3 Easy Steps
        </Heading>

        <Flex justify="center">
          <Tabs variant="unstyled">
            <TabList justifyContent="center">
              <Tab
                _selected={{ color: "white", bg: "yellow.300" }}
                borderLeftRadius={30}
                color="gray.300"
                bgColor="white"
              >
                Pre-appreved Motor Loan
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "yellow.300" }}
                borderRightRadius={30}
                color="gray.300"
                bgColor="white"
              >
                Conventional Motor Loan
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <GetMotorLoanPageOne />
              </TabPanel>
              <TabPanel>
                <GetMotorLoanPageTwo />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </Box>
  );
}

export default GetMotorLoan;
