import React from "react";
import {
  DrawerBody,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Button,
  useDisclosure,
  Icon,
  DrawerCloseButton,
  AccordionButton,
  AccordionItem,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  Box,
  Grid,
  Link,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function SideBarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let navigate = useNavigate();
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="gray"
        onClick={onOpen}
        display={["block", "block", "block", "block", "none"]}
        justifyContent="center"
        
      >
        <Icon as={GiHamburgerMenu} color="black" colorRendering="red" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Buy Motor
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Link
                      color="blue.400"
                      fontSize="md"
                      onClick={() => {
                        navigate("/buymotorpage");
                      }}
                    >
                      View all Motor >
                    </Link>
                    <Grid templateColumns="repeat(2,1fr)">
                      <Link to="/sellmotorpage" fontSize="sm" padding={1}>
                        Yamaha
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Honda
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Kawasaki
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Sym
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Harley-Davidson
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Suzuki
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Benelli
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Ducati
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        BMW
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Vespa
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        KTM
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Aprilia
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Brixton
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        CMC
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Daiichi
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        GPX
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Keeway
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        KTNS
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Kymco
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Modenas
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Moto Guzzi
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Piaggio
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Royal Enfield
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Scomadi
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Sherco
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Treeletrik
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Triumph
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        AJP
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        CFMoto
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Eclimo
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Moto Morini
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        NIU
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Ottimo
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        QJ Motor
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        SM Sport
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        WMoto
                      </Link>
                      <Link fontSize="sm" padding={1}>
                        Zontes
                      </Link>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <Text>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Sell Motor
                      </Box>
                    </AccordionButton>
                  </Text>
                </AccordionItem>

                <AccordionItem>
                  <Text>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Financing
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel>
                    <Text padding={1}>Motor Loan</Text>
                    <Text padding={1}>Motor Insurance</Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <Text>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        FAQ
                      </Box>
                    </AccordionButton>
                  </Text>
                </AccordionItem>

                <AccordionItem>
                  <Text>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        About Motor
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel>
                    <Text padding={1}>Our Story</Text>
                    <Text padding={1}>Motor Certified Lab</Text>
                    <Text padding={1}>Buying form Motor</Text>
                    <Text padding={1}>Qualitu Assured Motor</Text>
                    <Text padding={1}>Motor Capital</Text>
                    <Text padding={1}>Articles</Text>
                    <Text padding={1}>News</Text>
                    <Text padding={1}>Contactt Us</Text>
                    <Text padding={1}>Locate Us</Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <Text>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Dealers
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel>
                    <Text padding={1}>Dealer Sing Up</Text>
                    <Text padding={1}>Dealer Login</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default SideBarMenu;
