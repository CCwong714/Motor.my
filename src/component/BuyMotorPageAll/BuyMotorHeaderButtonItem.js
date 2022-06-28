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
import CafeRider from "../../image/MotorStyle/caferider.jpg"
import Chopper from "../../image/MotorStyle/chopper.jpg"
import Cruiser from "../../image/MotorStyle/cruiser.png"
import DualSport from "../../image/MotorStyle/dualsport.jpg"
import Moped from "../../image/MotorStyle/moped.jpg"
import Scooter from "../../image/MotorStyle/scooter.jpg"
import Scrambler from "../../image/MotorStyle/scrambler.jpg"
import SportBike from "../../image/MotorStyle/sportbike.png"
import SportTouring  from "../../image/MotorStyle/sporttouring.png"
import Touring from "../../image/MotorStyle/touring.jpg"
import TrialBike from "../../image/MotorStyle/trialbike.jpg"

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
                      Buy Motor
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
                      Buy Motor
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
                      Buy Motor
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
                      Buy Motor
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
                      Buy Motor
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
                      Buy Motor
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
                      Buy Motor
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
                      Buy Motor
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
                  <Image src={Scooter} h="20" w="20"></Image>
                  <Text align="center">Scooter</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Moped} h="20" w="20"></Image>
                  <Text align="center">Moped</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={SportBike} h="20" w="20"></Image>
                  <Text align="center"> Sport Bike</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={SportTouring} h="20" w="20"></Image>
                  <Text align="center">Sport Touring</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Touring} h="20" w="20"></Image>
                  <Text align="center">Touring</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={TrialBike} h="20" w="20"></Image>
                  <Text align="center">Trial Bike</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={CafeRider} h="20" w="20"></Image>
                  <Text align="center">Cafe Rider</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Chopper} h="20" w="20"></Image>
                  <Text align="center">Chopper</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Cruiser} h="20" w="20"></Image>
                  <Text align="center">Cruiser</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={DualSport} h="20" w="20"></Image>
                  <Text align="center">Dual Sport</Text>
                </Box>
              </MenuItem>
              <MenuItem closeOnSelect={false}>
                <Box alignContent="center">
                  <Image src={Scrambler} h="20" w="20"></Image>
                  <Text align="center">Scrambler</Text>
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
              <Button fontSize="sm" color="white" bgColor="black">Black</Button>
              <Button fontSize="sm" bgColor="white" color="black" border="1px" borderColor="black">White</Button>
              <Button fontSize="sm" bgColor="gray" color="white">Gray</Button>
              <Button fontSize="sm" bgColor="sliver" border="1px" borderColor="black" color="black">Sliver</Button>
              <Button fontSize="sm" bgColor="red" color="white">Red</Button>
              <Button fontSize="sm" bgColor="blue" color="white">Blue</Button>
              <Button fontSize="sm" bgColor="brown" color="white">Brown</Button>
              <Button fontSize="sm" bgColor="gold" color="white">Gold</Button>
              <Button fontSize="sm" bgColor="green" color="white">Green</Button>
              <Button fontSize="sm" bgColor="orange" color="white">Orange</Button>
              <Button fontSize="sm" bgColor="beige" color="black">Beige</Button>
              <Button fontSize="sm" bgColor="purple" color="white">Purple</Button>
              <Button fontSize="sm" bgColor="#B57B70" color="white">Bronze</Button>
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
