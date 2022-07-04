import {
  Box,
  Heading,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function LoanFAQ() {
  return (
    <>
      <Box w="1500" marginX={["5", "5", "100", "200", "250"]}>
        <Box>
          <Heading align="center"> FAQ</Heading>

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Why buy from Motor?
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
                  What are Motor Certified Motor?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.400">
                Motor Certified motors are 1 in 100, motorefully selected
                through a stringent 175-point inspection. All Motor Certified
                motors are quality pre-owned motors that are free of major
                accident, frame, fire or flood damage, and have gone through a
                thorough refurbishment process. These motors also come with a
                fixed price with no hidden fees, a 1-year warranty, and a 5-day
                money-back guarantee.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What does the 175-point inspection include?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.400">
                All motors listed on our website have undergone a thorough
                175-point inspection which includes a short road test. The
                motor’s condition, including all underlying issues made known to
                us, will be transparently listed and refurbished at our Motor
                Certified Lab. Please refer to the full inspection list here.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What is Motor Certified Lab?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.400">
                The Motor Certified Lab is Southeast Asia's largest
                state-of-the-art motor refurbishment facility that provides
                end-to-end refurbishment services to deliver quality assured
                pre-owned motors. All motors that have gone through the process
                at our Motor Certified Lab will be labelled as Motor Certified
                on the website. The refurbishment process includes a selection
                of the best quality motor through our 175-point inspection,
                mechanical services, body work, detailing, and stringent quality
                checks to deliver the largest and widest selection of up to
                2,000 Motor Certified motors every month.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Why buy from Motor?
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
                  Why buy from Motor?
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
                  Why buy from Motor?
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
                  Why buy from Motor?
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
          </Accordion>
        </Box>
      </Box>
    </>
  );
}

export default LoanFAQ;
