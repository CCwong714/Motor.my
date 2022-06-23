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
  Center,
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

      <Box marginX="auto" width={["100%", "90%", "80%"]}>
        <Flex>
          <Box>
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

            <Grid templateColumns={["repeat(2, minmax(30px, 1fr))","repeat(4, minmax(30px, 1fr))"]} gap={4}>
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

            <Box overflow="hidden">
              <Grid templateColumns={["repeat(4, minmax(20px, 1fr))","repeat(8, minmax(30px, 1fr))"]} gap={4}>
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

              <Grid templateColumns={["repeat(4, minmax(20px, 1fr))","repeat(8, minmax(30px, 1fr))" ]}gap={4}>
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
                templateColumns="repeat(5,1fr)"
                w={["370px","500px","610px", "100%"]}
                gap={5}
                overflowX="scroll"
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

          <Stack
            px={4}
            py={2}
            display={["none", "none", "none", "none", "block"]}
          >
            <Divider orientation='vertical' bgColor="red.800" w="5px" h="500px"/>
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
