import React from "react";
import {
  Button,
  Text,
  AccordionIcon,
  AccordionPanel,
  Box,
  AccordionButton,
  AccordionItem,
  Accordion,
  Flex,
  Image,
  Grid,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
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


function FullDrawerButtonRight() {
  return (
    <>
      <Flex flexDirection="column" marginX={2} bgColor="#fffffe" padding={2}>
        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Brand & Model
        </Text>
        <Accordion allowMultiple w="100%">
          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Yamaha
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Honda
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Kawasaki
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Sym
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Harlet-Davidson
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Suzuki
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Benelli
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Ducati
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  BMW
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Vespa
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  KTM
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Aprilia
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Brixton
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  CMC
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>
          
          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Daiichi
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  GPX
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Keeway
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  KTNS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Kymco
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Modenas
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Moto Guzzi
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Piaggio
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Royal Enfield
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Scomadi
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Sherco
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Treeletrik
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Triumph
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  AJP
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  CFMoto
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Eclimo
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Moto Morini
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  NIU
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Ottimo
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  QJMotor
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  SM sport
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  WMoto
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="sm">
                  Zontes
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                All model
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1dafds23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                1asdfasd23
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                123
              </Button>
              <Button as="Button" fontSize="xs" marginRight={2} marginTop={2}>
                12asdfasd3
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Body Type
        </Text>
        <Grid templateColumns="repeat(3,1fr)" gap={4}>
          <Box alignContent="center">
            <Image src={Scooter} h="20" w="20"></Image>
            <Text align="center">Scooter</Text>
          </Box>

          <Box alignContent="center">
            <Image src={Moped} h="20" w="20"></Image>
            <Text align="center">Moped</Text>
          </Box>

          <Box alignContent="center">
            <Image src={SportBike} h="20" w="20"></Image>
            <Text align="center"> Sport Bike</Text>
          </Box>

          <Box alignContent="center">
            <Image src={SportTouring} h="20" w="20"></Image>
            <Text align="center">Sport Touring</Text>
          </Box>

          <Box alignContent="center">
            <Image src={Touring} h="20" w="20"></Image>
            <Text align="center">Touring</Text>
          </Box>

          <Box alignContent="center">
            <Image src={TrialBike} h="20" w="20"></Image>
            <Text align="center">Trial Bike</Text>
          </Box>

          <Box alignContent="center">
            <Image src={CafeRider} h="20" w="20"></Image>
            <Text align="center">Cafe Rider</Text>
          </Box>

          <Box alignContent="center">
            <Image src={Chopper} h="20" w="20"></Image>
            <Text align="center">Chopper</Text>
          </Box>

          <Box alignContent="center">
            <Image src={Cruiser} h="20" w="20"></Image>
            <Text align="center">Cruiser</Text>
          </Box>

          <Box alignContent="center">
            <Image src={DualSport} h="20" w="20"></Image>
            <Text align="center">Dual Sport</Text>
          </Box>

          <Box alignContent="center">
            <Image src={Scrambler} h="20" w="20"></Image>
            <Text align="center">Scrambler</Text>
          </Box>
        </Grid>

        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Budget
        </Text>
        <Flex flexDirection="column">
          <Text fontSize="xs">Full & Monthly Payment(RM)</Text>

          <Flex flexDirection="column">
            <Flex fontSize="xs" justifyContent="space-between">
              <Text bgColor="yellow.400">RM0</Text>
              <Text bgColor="yellow.400">RM310,000</Text>
            </Flex>

            <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
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
            <Button fontSize="xs">Under 10K</Button>
            <Button fontSize="xs">RM 10K - 20K</Button>
            <Button fontSize="xs">RM 20K - 50K</Button>
            <Button fontSize="xs">RM 50K - 80K</Button>
            <Button fontSize="xs">RM 80K - RM 100K</Button>
            <Button fontSize="xs">Above RM 100K</Button>
          </Grid>
        </Flex>

        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Year
        </Text>
        <Slider aria-label="slider-ex-5" defaultValue={10}>
          <SliderTrack bg="yellow.300">
            <SliderFilledTrack bg="gray.200" />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="tomato" as={MdLightbulbOutline} />
          </SliderThumb>
        </Slider>

        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Transmission
        </Text>
        <Grid templateColumns="repeat(2,1fr)" gap={2}>
          <Button fontSize="sm">Manual</Button>
          <Button fontSize="sm">Auto</Button>
        </Grid>

        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Mileage
        </Text>
        <Slider aria-label="slider-ex-5" defaultValue={10}>
          <SliderTrack bg="gray.200">
            <SliderFilledTrack bg="yellow.400" />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color="tomato" as={MdLightbulbOutline} />
          </SliderThumb>
        </Slider>

        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Color
        </Text>
        <Grid templateColumns="repeat(3,1fr)" gap={3}>
          <Button fontSize="sm" color="white" bgColor="black">
            Black
          </Button>
          <Button
            fontSize="xs"
            bgColor="white"
            color="black"
            border="1px"
            borderColor="black"
          >
            White
          </Button>
          <Button fontSize="xs" bgColor="gray" color="white">
            Gray
          </Button>
          <Button
            fontSize="xs"
            bgColor="sliver"
            border="1px"
            borderColor="black"
            color="black"
          >
            Sliver
          </Button>
          <Button fontSize="xs" bgColor="red" color="white">
            Red
          </Button>
          <Button fontSize="xs" bgColor="blue" color="white">
            Blue
          </Button>
          <Button fontSize="xs" bgColor="brown" color="white">
            Brown
          </Button>
          <Button fontSize="xs" bgColor="gold" color="white">
            Gold
          </Button>
          <Button fontSize="xs" bgColor="green" color="white">
            Green
          </Button>
          <Button fontSize="xs" bgColor="orange" color="white">
            Orange
          </Button>
          <Button fontSize="xs" bgColor="beige" color="black">
            Beige
          </Button>
          <Button fontSize="xs" bgColor="purple" color="white">
            Purple
          </Button>
          <Button fontSize="xs" bgColor="#B57B70" color="white">
            Bronze
          </Button>
          <Button fontSize="xs">Other</Button>
        </Grid>

        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Motor Certified
        </Text>
        <Button fontSize="xs">Motor Certified Motor only</Button>

        <Text fontWeight="bold" fontSize="xs" marginY="2">
          Store
        </Text>
        <Grid templateColumns="repeat(1,1fr)" gap={3} paddingBottom="44">
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
          <Button fontSize="xs">Motor Certified Motor only</Button>
        </Grid>
      </Flex>
    </>
  );
}

export default FullDrawerButtonRight;
