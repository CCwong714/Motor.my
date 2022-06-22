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
import Image3 from "../../image/photo3.jpg";
import { MdLightbulbOutline } from "react-icons/md";

function BuyMotorHeaderButtonItem() {
  return (
    <>
      <Grid templateColumns={["repeat(4,1fr)","repeat(4,1fr)","repeat(5,1fr)","repeat(5,1fr)","repeat(9,1fr)"]} gap={2}>
        <Menu boundary="scrollParent">
          <MenuButton
            as={Button}
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Brand & Model
          </MenuButton>
          <MenuList overflowY="scroll" h="400">
            <MenuItem closeOnSelect={false}>
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
                  <AccordionPanel pb={4}>
                    <Button as="Button" fontSize="xs">
                      All model
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1dafds23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1asdfasd23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
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
                  <AccordionPanel pb={4}>
                    <Button as="Button" fontSize="xs">
                      All model
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1dafds23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1asdfasd23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
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
                  <AccordionPanel pb={4}>
                    <Button as="Button" fontSize="xs">
                      All model
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1dafds23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1asdfasd23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
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
                  <AccordionPanel pb={4}>
                    <Button as="Button" fontSize="xs">
                      All model
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1dafds23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1asdfasd23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
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
                  <AccordionPanel pb={4}>
                    <Button as="Button" fontSize="xs">
                      All model
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1dafds23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1asdfasd23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
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
                  <AccordionPanel pb={4}>
                    <Button as="Button" fontSize="xs">
                      All model
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1dafds23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1asdfasd23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
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
                  <AccordionPanel pb={4}>
                    <Button as="Button" fontSize="xs">
                      All model
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1dafds23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1asdfasd23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
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
                  <AccordionPanel pb={4}>
                    <Button as="Button" fontSize="xs">
                      All model
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1dafds23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      1asdfasd23
                    </Button>
                    <Button as="Button" fontSize="xs">
                      123
                    </Button>
                    <Button as="Button" fontSize="xs">
                      12asdfasd3
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
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
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center">sdfs</Text>
                  </Box>
                </MenuItem>
                <MenuItem closeOnSelect={false}>
                  <Box alignContent="center">
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center">sdfs</Text>
                  </Box>
                </MenuItem>
                <MenuItem closeOnSelect={false}>
                  <Box alignContent="center">
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center"> sdfs</Text>
                  </Box>
                </MenuItem>
                <MenuItem closeOnSelect={false}>
                  <Box alignContent="center">
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center">sdfs</Text>
                  </Box>
                </MenuItem>
                <MenuItem closeOnSelect={false}>
                  <Box alignContent="center">
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center">sdfs</Text>
                  </Box>
                </MenuItem>
                <MenuItem closeOnSelect={false}>
                  <Box alignContent="center">
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center">sdfs</Text>
                  </Box>
                </MenuItem>
                <MenuItem closeOnSelect={false}>
                  <Box alignContent="center">
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center">sdfs</Text>
                  </Box>
                </MenuItem>
                <MenuItem closeOnSelect={false}>
                  <Box alignContent="center">
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center">sdfs</Text>
                  </Box>
                </MenuItem>
                <MenuItem closeOnSelect={false}>
                  <Box alignContent="center">
                    <Image src={Image3} h="20" w="20"></Image>
                    <Text align="center">sdfs</Text>
                  </Box>
                </MenuItem>
              </Grid>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
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

                <RangeSlider
                  aria-label={["min", "max"]}
                  defaultValue={[0, 100]}
                >
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
                <Button fontSize="xs">Under 30,000</Button>
                <Button fontSize="xs">30,000-50,000</Button>
                <Button fontSize="xs">50,000-80,000</Button>
                <Button fontSize="xs">80,000-100,000</Button>
                <Button fontSize="xs">Above 100,000</Button>
              </Grid>
            </Flex>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
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
            as={Button}
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
            as={Button}
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
            as={Button}
            variant="ghost"
            _hover={{ color: "blue" }}
            fontSize="xs"
            border="1px"
          >
            Color
          </MenuButton>
          <MenuList padding={5}>
            <Grid templateColumns="repeat(3,1fr)" gap={3}>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
              <Button fontSize="sm">Black</Button>
            </Grid>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
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
            as={Button}
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
