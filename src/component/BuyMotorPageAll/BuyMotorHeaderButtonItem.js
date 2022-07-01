import React from "react";
import {
  Box,
  Text,
  Button,
  MenuButton,
  MenuItem,
  Menu,
  MenuList,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Accordion,
  Flex,
  Image,
  Grid,
  RangeSliderFilledTrack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderThumb,
  Slider,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
} from "@chakra-ui/react";
import { MdLightbulbOutline } from "react-icons/md";
import Moped from "../../image/BuyPageMotorStyle/moped.png";
import Scooter from "../../image/BuyPageMotorStyle/scooter.png";
import Touring from "../../image/BuyPageMotorStyle/touring.png";
import OffRoad from "../../image/BuyPageMotorStyle/offroad.png";
import Street from "../../image/BuyPageMotorStyle/street1.png";
import Cruiser from "../../image/BuyPageMotorStyle/cruiser.png";
import SuperBike from "../../image/BuyPageMotorStyle/superbike.png";

function BuyMotorHeaderButtonItem() {
  return (
    <>
      <Grid
        templateColumns={[
          "repeat(4,1fr)",
          "repeat(4,1fr)",
          "repeat(5,1fr)",
          "repeat(5,1fr)",
          "repeat(9,1fr)",
        ]}
        gap={2}
      >
        <Menu boundary="scrollParent">
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Brand {`&`} Model
          </MenuButton>
          <MenuList overflowY="scroll" h="400">
            <Accordion allowMultiple w="300px">
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Yamaha
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Honda
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Kawasaki
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Sym
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Harley-Davidson
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={2}>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Suzuki
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={2}>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Benelli
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={2}>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Ducati
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={2}>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      BMW
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Vespa
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      KTM
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    All model
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1dafds23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    1asdfasd23
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    123
                  </Button>
                  <Button fontSize="xs" marginRight={2} marginTop={2}>
                    12asdfasd3
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Body Type
          </MenuButton>
          <MenuList padding={3}>
            <Grid templateColumns="repeat(3,1fr)">
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Scooter} h="auto" w="auto"></Image>
                  <Text align="center">Scooter</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Moped} h="auto" w="auto"></Image>
                  <Text align="center">Moped</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={OffRoad} h="auto" w="auto"></Image>
                  <Text align="center"> OffRoad</Text>
                </Box>
              </MenuItem>

              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Touring} h="auto" w="auto"></Image>
                  <Text align="center">Touring</Text>
                </Box>
              </MenuItem>

              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Cruiser} h="auto" w="auto"></Image>
                  <Text align="center">Cruiser</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={SuperBike}h="auto" w="auto"></Image>
                  <Text align="center">SuperBike</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Street} h="auto" w="auto"></Image>
                  <Text align="center">Street</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Scooter} h="auto" w="auto"></Image>
                  <Text align="center">EV</Text>
                </Box>
              </MenuItem>
            </Grid>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Budget
          </MenuButton>
          <MenuList padding={5}>
            <Flex flexDirection="column">
              <Text fontSize="xs">Full & Monthly Payment(RM)</Text>

              <Flex flexDirection="column">
                <Flex fontSize="xs" justifyContent="space-between">
                  <Text bgColor="yellow.400">RM0</Text>
                  <Text bgColor="yellow.400">RM310,000</Text>
                </Flex>

                <RangeSlider defaultValue={[0, 100]}>
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack bg="yellow.300" />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>

                <Flex fontSize="xs" justifyContent="space-between">
                  <Text bgColor="yellow.400">RM0</Text>
                  <Text bgColor="yellow.400">RM310,000</Text>
                </Flex>
              </Flex>

              <Grid templateColumns="repeat(2,1fr)" gap={2}>
                <Button fontSize="xs">Under RM 10K</Button>
                <Button fontSize="xs">RM 10K - RM 20K</Button>
                <Button fontSize="xs">RM 20K - RM 50K</Button>
                <Button fontSize="xs">RM 50K - RM 80K</Button>
                <Button fontSize="xs">RM 80K - RM 100K</Button>
                <Button fontSize="xs">Above 100,000</Button>
              </Grid>
            </Flex>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Year
          </MenuButton>
          <MenuList padding={5}>
            <Slider aria-label="slider-ex-5" defaultValue={10}>
              <SliderTrack bg="yellow.300">
                <SliderFilledTrack bg="gray.200" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="tomato" as={MdLightbulbOutline} />
              </SliderThumb>
            </Slider>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Transmission
          </MenuButton>
          <MenuList padding={5}>
            <Grid templateColumns="repeat(2,1fr)" gap={2}>
              <Button>Manual</Button>
              <Button>Auto</Button>
            </Grid>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Mileage
          </MenuButton>
          <MenuList padding={5}>
            <Slider aria-label="slider-ex-5" defaultValue={10}>
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="yellow.400" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="tomato" as={MdLightbulbOutline} />
              </SliderThumb>
            </Slider>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Color
          </MenuButton>
          <MenuList padding={5}>
            <Grid templateColumns="repeat(3,1fr)" gap={3}>
              <Button fontSize="sm" color="white" bgColor="black">
                Black
              </Button>
              <Button
                fontSize="sm"
                bgColor="white"
                color="black"
                border="1px"
                borderColor="black"
              >
                White
              </Button>
              <Button fontSize="sm" bgColor="gray" color="white">
                Gray
              </Button>
              <Button
                fontSize="sm"
                bgColor="sliver"
                border="1px"
                borderColor="black"
                color="black"
              >
                Sliver
              </Button>
              <Button fontSize="sm" bgColor="red" color="white">
                Red
              </Button>
              <Button fontSize="sm" bgColor="blue" color="white">
                Blue
              </Button>
              <Button fontSize="sm" bgColor="brown" color="white">
                Brown
              </Button>
              <Button fontSize="sm" bgColor="gold" color="white">
                Gold
              </Button>
              <Button fontSize="sm" bgColor="green" color="white">
                Green
              </Button>
              <Button fontSize="sm" bgColor="orange" color="white">
                Orange
              </Button>
              <Button fontSize="sm" bgColor="beige" color="black">
                Beige
              </Button>
              <Button fontSize="sm" bgColor="purple" color="white">
                Purple
              </Button>
              <Button fontSize="sm" bgColor="#B57B70" color="white">
                Bronze
              </Button>
              <Button fontSize="sm">Other</Button>
            </Grid>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Motor Certified
          </MenuButton>
          <MenuList padding={5}>
            <Button fontSize="sm">Motor Certified Motor only</Button>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Motor Certified
          </MenuButton>
          <MenuList padding={5} overflowY="scroll" h="400">
            <Grid templateColumns="repeat(1,1fr)" gap={3}>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
              <Button fontSize="sm">Motor Certified Motor only</Button>
            </Grid>
          </MenuList>
        </Menu>
      </Grid>
    </>
  );
}

export default BuyMotorHeaderButtonItem;
