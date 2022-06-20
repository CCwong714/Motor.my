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

function SideBarMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="gray" onClick={onOpen} display={['block','block', 'block','block','none']} justifyContent="center">
        <Icon as={GiHamburgerMenu} color="black" colorRendering="red"/>
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
                    <Link color="blue.400" fontSize="md">View all Motor > </Link>
                    <Grid templateColumns="repeat(2,1fr)">
                      <Link  fontSize="sm" padding={1}>Audi</Link>
                      <Link fontSize="sm" padding={1}>BMW</Link>
                      <Link fontSize="sm" padding={1}>Ford</Link>
                      <Link fontSize="sm" padding={1}>Honda</Link>
                      <Link fontSize="sm" padding={1}>Hyundai</Link>
                      <Link fontSize="sm" padding={1}>Inokom</Link>
                      <Link fontSize="sm" padding={1}>Isuzu</Link>
                      <Link fontSize="sm" padding={1}>Kia</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                      <Link fontSize="sm" padding={1}>...</Link>
                    </Grid>
                    <Link color="blue.400" fontSize="sm">
                      Get Motor Model Recommendations >
                    </Link>
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
