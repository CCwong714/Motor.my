import React from "react";
import {
  Box,
  Heading,
  Button,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function InsuranceFAQ() {
  return (
    <>
      <Box w="1500" marginX={["0", "0", "100", "300"]} marginTop={14} paddingBottom={10}>
        <Box paddingX="5">
          <Heading align="center"> FAQ</Heading>

          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  1. What is Carsome Capital’s motor insurance?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.400">
                Our Motor Certified motors are pre-owned motors that are as good
                as new, and have been selected based on customer needs and
                wants. We offer the best in quality, confidence, convenience,
                and selection.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  2. Why should I renew motor insurance at Carsome x
                  PolicyStreet?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.400">
                We want to give you a wholesome, hassle-free journey. This
                special collaboration with PolicyStreet allows you to renew your
                insurance, choose a new insurance provider, as well renew your
                road tax easily without having to leave your home, and in just a
                few clicks.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  3. How do I renew my insurance and road tax with Carsome x
                  PolicyStreet?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.400">
                You can get an instant quote, choose an insurer, and add-on road
                tax renewal, and make payment all on our website. You will need
                to provide the following details:
                <li>Vehicle Registration Number</li>
                <li>Residential Postcode</li>
                <li>Identification Card (IC) Number</li>
                <li>Mobile Number</li>
                <li>Email</li>
                <li>Marital Status</li>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  4. Which insurers are available for an instant quote?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.400">
                <li>Tune Protect Group Berhad</li>
                <li>AXA Affin General Insurance Berhad</li>
                <li>Etiqa General Takaful Berhad</li>
                <li>Berjaya Sompo Insurance Berhad</li>
                <li>Syarikat Takaful Malaysia Am Berhad</li>
                <li>RHB Insurance Berhad</li>
                <li>MSIG Insurance Berhad</li>
                <li>Zurich General Insurance Malaysia Berhad</li>
                <li>Pacific & Orient Insurance Co. Bhd</li>
                <li>Allianz General Insurance Company (Malaysia) Berhad</li>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  5. Who can use this service by Carsome x PolicyStreet?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.400">
                Malaysians who have cars registered with Jabatan Pengangkutan
                Jalan (JPJ) are eligible. For foreigners, you can contact a
                Carsome agent by emailing us at
                insuranceinquiry.capital@carsome.com.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Box align="center" marginTop="8">
            <Button
              _hover={{ boxShadow: "dark-lg" }}
              variant="link"
              textDecoration="underline"
              fontSize="lg"
              color="blue.400"
              fontWeight="bold"
            >
              More FAQs
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default InsuranceFAQ;
