import React from "react";
// import { useParams } from "react-router-dom";
import Gellary from "../Gallery/Gellary";
import { Box, Flex, Text, Link, Icon, Divider, Button } from "@chakra-ui/react";
import sliderJson from "../../Slider.json";

function ShowMotorPageTop() {
  // const { id } = useParams();

  return (
    <Box marginX={["0", "0", "100", "200", "250"]} bgColor="green.200">
      <Flex gap={6} padding={10} flexDirection={["column","column","column", "column","row"]}>
        <Box w={["100","100","100","100","70%"]}>
          <Gellary />
        </Box>

        <Box w="100%">
          <Flex>
            <Text>{sliderJson[0].name}</Text>
          </Flex>

          <Flex>
            <Text>{sliderJson[0].howKm} </Text>
            <hr
              style={{
                height: "1px",
                color: "black",
                width: "12px",
                transform: "rotate(90deg)",
              }}
            />
            <Text>{sliderJson[0].auto}</Text>
          </Flex>

          <Flex>
            <Box>
              <Text>RM</Text>
              <Text>{sliderJson[0].price}</Text>
            </Box>
            <Box></Box>
          </Flex>

          <Flex>
            <Text>RM {sliderJson[0].payMo} /mo</Text>
            <Link>Loan Calculator</Link>
          </Flex>

          <Divider marginTop={2} color="gray.400" />

          <Flex flexDirection="column" gap={2}>
            <Flex justifyContent="space-between">
              <Text>All Inclusive Price</Text>
              <Text>O</Text>
            </Flex>

            <Text color="gray.400" noOfLines={1} textOverflow="ellipsis">
              • Road Tax • 1-YearWarranty • OwnerShip Transfer Fee • Puspakom
              Inspection Fee • Loan Processing Fee
            </Text>

            <Flex justifyContent="space-between">
              <Text>Motor Location</Text>
              <Text>O</Text>
            </Flex>

            <Text color="gray.400" noOfLines={1} textOverflow="ellipsis">
              MotorShop Kuantan, Pahang
            </Text>

            <Divider marginTop={2} color="gray.400" />

            <Flex justifyContent="space-between">
              <Text>All Inclusive Price</Text>
              <Text>O</Text>
            </Flex>

            <Text color="gray.400" noOfLines={1} textOverflow="ellipsis">
              • Keyless Push Start • Touchscreen Audio Display • Reverse Camera
            </Text>
          </Flex>
          <Divider marginTop={2} color="gray.400" />

          <Button marginTop={4} w="100%">
            Get Started
          </Button>

          <Flex marginTop={3}>
            <Text color="gray.400">Need more help? contact us via</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default ShowMotorPageTop;
