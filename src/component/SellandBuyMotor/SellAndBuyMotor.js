import {
  Box,
  Flex,
  Input,
  Text,
  Image,
  Button,
  Grid,
  Divider,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";
import SellAndBuyMotorRight from "../SellandBuyMotor/SellAndBuyMotorRight";
import { FiSearch } from "react-icons/fi";

function SellAndBuyMotor() {
  return (
    <>
      <Grid templateColumns="repeat(2,1fr)" gap={5} marginX={["5", "10", "14"]}>
        <Button
          display={["block", "block", "block", "block", "none"]}
          bgColor="blue.700"
          color="yellow.400"
        >
          Buy a Motor
        </Button>
        <Button
          display={["block", "block", "block", "block", "none"]}
          bgColor="yellow.400"
          color="blue.700"
        >
          Sell Your Motor
        </Button>
      </Grid>
      <Box marginX="auto" width={["100%", "90%", "80%"]} padding="5">
        <Flex>
          <Box padding="5">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiSearch color="gray.300" />}
              />
              <Input
                type="text"
                w={["300px", "550px", "100%"]}
                marginBottom={5}
                placeholder="Search for Motor by Brand ,Model"
              />
            </InputGroup>
            <Box>
              <Grid templateColumns="repeat(4, minmax(40px, 1fr))" gap={4}>
                <Box>
                  <Image src={Image3} />
                </Box>
                <Box>
                  <Image src={Image3} />
                </Box>
                <Box>
                  <Image src={Image3} />
                </Box>
                <Box>
                  <Image src={Image3} />
                </Box>
              </Grid>
            </Box>

            <Box>
              <Grid templateColumns="repeat(8, minmax(20px, 1fr))" gap={4}>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
              </Grid>

              <Grid templateColumns="repeat(8, minmax(20px, 1fr))" gap={4}>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
                <Box>
                  <Image src={Image3} />
                  <Text>Perodua</Text>
                </Box>
              </Grid>

              <Grid
                templateColumns="repeat(auto-fit, minmax(100px, 1fr))"
                gap={5}
              >
                <Box textAlign="center">
                  <Button fontSize="11px">Under RM30,000</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">Under RM30,000-50,000</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">Under RM50,000-80,000</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">Under RM80,000-100,000</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">View All Motor</Button>
                </Box>
              </Grid>
            </Box>
          </Box>

          <Stack px={4} py={2} display={["none", "none", "none", "none","block"]}>
            <Divider
              orientation="vertical"
              bgColor="red.800"
              w="1px"
              h="450px"
            />
          </Stack>

          <Box display={["none", "none", "none", "none", "block"]}>
            <SellAndBuyMotorRight />
          </Box>
        </Flex>
        <Box marginTop={10}>
          <Image src={Image3} w="100%" h="150px" />
        </Box>
      </Box>
    </>
  );
}

export default SellAndBuyMotor;
