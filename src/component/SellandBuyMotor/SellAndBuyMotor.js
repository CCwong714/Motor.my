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
  Link,
} from "@chakra-ui/react";
import SellAndBuyMotorRight from "../SellandBuyMotor/SellAndBuyMotorRight";
import Honda from "../../image/Logo/Honda.png";
import BigIm1 from "../../image/Logo/BigIm1.jpg";
import BigIm2 from "../../image/Logo/BigIm2.png";
import { Carousel } from "carousel-react-rcdev";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Cruiser from "../../image/BuyPageMotorStyle/cruiser.png";
import Moped from "../../image/BuyPageMotorStyle/moped.png";
import OffRoad from "../../image/BuyPageMotorStyle/offroad.png";
import Scooter from "../../image/BuyPageMotorStyle/scooter.png";
import Street from "../../image/BuyPageMotorStyle/street1.png";
import SuperBike from "../../image/BuyPageMotorStyle/superbike.png";
import Touring from "../../image/BuyPageMotorStyle/touring.png";
// import {
//   SiYamahamotorcorporation,
//   SiHonda,
//   SiSuzuki,
//   SiKtm,
//   SiBmw,
// } from "react-icons/si";

function SellAndBuyMotor() {
  let navigate = useNavigate();
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
            <Link
              fontSize="2xl"
              fontWeight="bold"
              onClick={() => {
                navigate("/buymotorpage");
              }}
              _hover="none"
            >
              Buy a Motor {`>`}
            </Link>

            <InputGroup marginTop="4">
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

            <Grid
              templateColumns={[
                "repeat(2, minmax(30px, 1fr))",
                "repeat(4, minmax(30px, 1fr))",
              ]}
              gap={4}
            >
              <Box>
                <Image src={BigIm1} h="100%" />
              </Box>
              <Box>
                <Image src={BigIm2} h="100%" />
              </Box>
              <Box>
                <Image src={BigIm1} h="100%" />
              </Box>
              <Box>
                <Image src={BigIm2} h="100%" />
              </Box>
            </Grid>

            <Box overflow="hidden">
              <Grid
                templateColumns={[
                  "repeat(4, minmax(20px, 1fr))",
                  "repeat(8, minmax(30px, 1fr))",
                ]}
                gap={4}
              >
                <Box marginX="auto">
                  <Image src={Honda} />
                  <Text>Honda</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Honda} />
                  <Text>Honda</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Honda} />
                  <Text>Honda</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Honda} />
                  <Text>Honda</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Honda} />
                  <Text>Honda</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Honda} />
                  <Text>Honda</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Honda} />
                  <Text>Honda</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Honda} />
                  <Text>Honda</Text>
                </Box>
              </Grid>

              <Grid
                templateColumns={[
                  "repeat(4, minmax(20px, 1fr))",
                  "repeat(8, minmax(30px, 1fr))",
                ]}
                gap={4}
                align="center"
              >
                <Box marginX="auto">
                  <Image src={Cruiser} />
                  <Text>Cruiser</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Moped} />
                  <Text>Moped</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={OffRoad} />
                  <Text>OffRoad</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Scooter} />
                  <Text>Scooter</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Street} />
                  <Text>Street</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={SuperBike} />
                  <Text>SuperBike</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Touring} />
                  <Text>Touring</Text>
                </Box>
                <Box marginX="auto">
                  <Image src={Moped} />
                  <Text>EV</Text>
                </Box>
              </Grid>

              <Grid
                templateColumns="repeat(6,1fr)"
                w={["370px", "500px", "610px", "100%"]}
                gap={5}
                overflowX="scroll"
                className="hiddenScoll"
              >
                <Box textAlign="center">
                  <Button fontSize="11px">Under RM10K</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">RM10K - 20K</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">RM20K - 50K</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">RM 50K - 80K</Button>
                </Box>
                <Box textAlign="center">
                  <Button fontSize="11px">RM 80K - 100K</Button>
                </Box>
                <Box
                  textAlign="center"
                  onClick={() => {
                    navigate("/buymotorpage");
                  }}
                >
                  <Button fontSize="11px" color="blue.400">View All Motor</Button>
                </Box>
              </Grid>
            </Box>
          </Box>

          <Stack
            px={4}
            py={2}
            display={["none", "none", "none", "none", "block"]}
          >
            <Divider
              orientation="vertical"
              bgColor="red.800"
              w="5px"
              h="500px"
            />
          </Stack>

          <Box display={["none", "none", "none", "none", "block"]}>
            <SellAndBuyMotorRight />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default SellAndBuyMotor;
