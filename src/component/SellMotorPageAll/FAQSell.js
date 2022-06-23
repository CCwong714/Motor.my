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

function FAQSell() {
  return (
    <>
      <Box padding="10" w="1500" marginX={["0","0","100","300"]}>
        <Box paddingX="5">
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
                Our Carsome Certified cars are pre-owned cars that are as good
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
                Carsome Certified cars are 1 in 100, carefully selected through
                a stringent 175-point inspection. All Carsome Certified cars are
                quality pre-owned cars that are free of major accident, frame,
                fire or flood damage, and have gone through a thorough
                refurbishment process. These cars also come with a fixed price
                with no hidden fees, a 1-year warranty, and a 5-day money-back
                guarantee.
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
                All cars listed on our website have undergone a thorough
                175-point inspection which includes a short road test. The car’s
                condition, including all underlying issues made known to us,
                will be transparently listed and refurbished at our Carsome
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
                The Carsome Certified Lab is Southeast Asia's largest
                state-of-the-art car refurbishment facility that provides
                end-to-end refurbishment services to deliver quality assured
                pre-owned cars. All cars that have gone through the process at
                our Carsome Certified Lab will be labelled as Carsome Certified
                on the website. The refurbishment process includes a selection
                of the best quality car through our 175-point inspection,
                mechanical services, body work, detailing, and stringent quality
                checks to deliver the largest and widest selection of up to
                2,000 Carsome Certified cars every month.
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

export default FAQSell;
