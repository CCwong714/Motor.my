import React from "react";
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
  color,
  Button,
} from "@chakra-ui/react";
import FAQSellingMotor from "../FAQTwoPage/FAQSellingMotor";
import { MdBorderColor } from "react-icons/md";
import FAQBuyingMotor from "../FAQTwoPage/FAQBuyingMotor";
import { useState } from "react";

function FAQpage() {
  const [isSellingMotor, setIsSellingMotor] = useState(true);

  return (
    <>
      <Box paddingY={14} bgColor="gray.100">
        <Heading align="center">Frequently Asked Question</Heading>
      </Box>
      <Box>
        <Flex flexDir="column" justify="center">
          {/* <Flex>
            <Button onClick={() => setIsSellingMotor(true)}>
              Selling motor
            </Button>
            <Button onClick={() => setIsSellingMotor(false)}>
              Buying motor
            </Button>
          </Flex>
          <Box>
            {isSellingMotor ? <FAQSellingMotor /> : <FAQSellingMotor />}
          </Box> */}
          <Tabs variant="unstyled">
            <TabList justifyContent="center">
              <Tab
                _selected={{ borderBottom: "2px", color: "#3D82C3" }}
                justify="center"
              >
                <Text fontSize="xl">Selling A Motor</Text>
              </Tab>
              <Tab
                _selected={{ borderBottom: "2px", color: "#3D82C3" }}
                justify="center"
              >
                <Text fontSize="xl">Buying A Motor</Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FAQSellingMotor />
              </TabPanel>
              <TabPanel>
                <FAQBuyingMotor />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </>
  );
}

export default FAQpage;
