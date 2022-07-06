import {
  Box,
  Flex,
  Text,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Link,
} from "@chakra-ui/react";
import React from "react";

function FAQBuyingMotor() {
  return (
    <Box marginX={["5", "5", "5", "100", "200"]} paddingBottom={24} >
      <Flex gap={2}>
        <Flex flexDir="column" w="40%" position="sticky" top="100px">
          <Text padding={5} fontWeight="bold" fontSize="xl">
            <a href="#Genaral">Genaral</a>
          </Text>
          <Divider color="gray.200" />
          <Text padding={5} fontWeight="bold" fontSize="xl">
            <a href="#MotorShopMotors">MotorShop Motors</a>
          </Text>
          <Divider color="gray.200" />
          <Text padding={5} fontWeight="bold" fontSize="xl">
            <a href="#OnlineBooking">Online Booking</a>
          </Text>
          <Divider color="gray.200" />
          <Text padding={5} fontWeight="bold" fontSize="xl">
            <a href="#ComingSoon">Coming Soon Motors</a>
          </Text>
          <Divider color="gray.200" />
        </Flex>

        <Box w="100%">
          {/* Genaral */}
          <Text id="Genaral" fontSize="2xl" fontWeight="bold" p={4}>
            General
          </Text>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Why buy from Carsome?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Our Carsome Certified cars are pre-owned cars that are as good
                as new, and have been selected based on customer needs and
                wants. We offer the best in quality, confidence, convenience,
                and selection.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are Carsome Certified cars?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
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

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
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
                  What is Carsome Certified Lab?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
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
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Why is Carsome Certified Lab important?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Quality is at the core of everything we do at Carsome. We place
                high importance on our Carsome Certified Refurbishment Process,
                owning every step from start to finish to ensure we deliver a
                guaranteed level of quality that only exists in Carsome. Our
                Carsome Certified Lab is here to set the new standard within the
                pre-owned car industry to give customers peace of mind when
                purchasing a car from us.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What does the refurbishment process include at the Carsome
                  Certified Lab?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Our Carsome Certified Refurbishment Process is made up of a car
                inspection, mechanical and general repairs, surface preparation,
                spray painting, polishing, detailing, and quality control
                checks. We ensure all parts of the car are covered from the
                interior and exterior parts before it becomes Carsome Certified.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Who owns the cars listed - Carsome or other dealers?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Car listings labelled as "Carsome Certified" are owned by
                Carsome. However, cars labelled as “Marketplace" are owned by
                our dealer partners and have also undergone the 175-point
                inspection.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How can I differentiate between Carsome Certified and Dealer
                  cars?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Carsome Certified cars are labelled as “Carsome Certified” and
                dealer cars are labelled as "Marketplace" on each listing.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How is the monthly installment calculated?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                The monthly installment is an estimation calculated based on a
                9-year tenure and 3.5% interest rate. This is not conclusive and
                is subject to terms and conditions from respective financial
                institutions.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Does Carsome accept trade-in cars?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Yes. Our Carsome Consultants will guide you through the trade-in
                process, where you have an option to sell your car on Carsome’s
                bidding platform. All customers that have traded-in their cars
                will receive RM500 off (if car price is below RM50,000) and
                RM1,000 off (if car price is more than RM50,000) which can be
                used when you purchase a Carsome Certified car.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Does Carsome sell cars that are still being financed by the
                  bank?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                No, all cars are free from financing.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* MotorShop Motors*/}
          <Text id="MotorShopMotors" fontSize="2xl" fontWeight="bold" p={4}>
            MotorShop Motors
          </Text>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What is Carsome Promise?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  At Carsome, we are dedicated to providing a car-buying
                  experience that is completely worry-free, which is why all
                  Carsome Certified cars come with the Carsome Promise. The
                  Carsome Promise consists of:
                </Text>
                <br />
                <Text>
                  1. 175-point inspection;
                  <br />
                  2. 1-year warranty, subject to terms and conditions;
                  <br />
                  3. 5-day money-back guarantee with a full refund, subject to
                  our Return Policy; and
                  <br />
                  4. fixed price with no hidden fees.
                  <br />
                  5. The purchase of our Carsome Certified cars shall be subject
                  to the Terms and Conditions available
                  <Link color="blue.500"> here.</Link>
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Is the price of the cars sold on Carsome's website negotiable?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  At Carsome, we offer you a haggle-free experience. The
                  all-inclusive price listed for each Carsome car is the best
                  price and as competitive as possible. The price you see is the
                  price that you will pay for your car. There are no hidden fees
                  or extra costs on top of the listed price.
                </Text>

                <Text>
                  Carsome will pay for the following taxes and fees: road tax,
                  Puspakom inspection fee, ownership transfer fee, and loan
                  application fee.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the terms for Carsome’s 5-day money back guarantee?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  Only Carsome Certified cars are eligible for the 5-day
                  money-back guarantee under the Carsome Promise. The money-back
                  guarantee is subject to our Return Policy. You can view our
                  return policy<Link color="blue.500"> here.</Link>
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="sm">
                  What is Carsome Warranty and what does it cover?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  At Carsome, we believe that you shouldn't have to constantly
                  worry about your car's condition once it gets on the road.
                  This is why every Carsome Certified car comes with a
                  free-of-charge 1-year warranty under the Carsome Promise
                  (subject to the terms and conditions under our Warranty
                  Programme).
                </Text>
                <br />
                <Text>The basic version of Carsome Warranty covers:</Text>
                <br />
                <Text>
                  1. Engine: cylinder block, crankcase, cylinder head, and
                  cylinder head gasket.
                </Text>
                <br />
                <Text>
                  2. Manual and automatic transmission: gearbox casing and all
                  inner parts, torque converter, transmission control unit, and
                  electro hydraulic switch gear unit.
                </Text>
                <btr />
                <Text>
                  3. Air conditioning system: compressor, capacitor, and
                  radiator fan.
                </Text>
                <br />
                <Text>
                  We also offer an upgraded Carsome Extended Warranty Program.
                  Please speak to our Carsome consultants at the Carsome
                  Experience Center for more information. If your car
                  manufacturer's warranty is still in effect, your coverage will
                  follow your manufacturer's warranty booklet.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How can I make a test drive appointment for the Carsome car I
                  chose?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  Simply find your preferred car(s) on our website, click on
                  'Book A Test Drive' and select your date and time. Our system
                  will show 'Booking Successful!' once your booking is
                  confirmed.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  When and where can I test drive?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500">
                <Text>
                  You may select the morning session (9am to 1pm) or afternoon
                  session (1pm to 5pm). The details of the location will be
                  listed on the appointment booking page.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Can I cancel my test drive appointment?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Yes, you can do it via "My Account-My Test Drive" on our
                website, or reach out to us at 1-800-82-3388 / info@carsome.my.
                You may book another test drive appointment once the
                cancellation is confirmed.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What happens when I make a car booking?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                You need to place a refundable deposit, which is 1% of the
                purchase price, either by cash, online transfer or credit card.
                Once the booking is confirmed, the car will be under a "Pending
                Purchase" status and will not receive further test drives or
                bookings from other customers.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the steps to apply for a used car loan?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Our Carsome consultants will assist you on loan submission
                through our panel of financial providers.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Can I apply for my own loan?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  Yes, you may apply through your preferred financial
                  institution.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the documents required for the car loan application?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                The documents required are your:
                <br />
                a.Identity Card (for Malaysians) or Passport (for
                non-Malaysians)
                <br />
                b.Driving licence
                <br />
                c.Payslip for the last three months
                <br />
                d.Bank statement of salary account for the last three months
                <br />
                e.EPF statement
                <br />
                f.Any other income supporting documents
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How does your delivery work?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                You can choose ‘Self-Collection’ and collect your car from your
                Carsome Experience Centers, or select 'Home Delivery', where we
                will deliver your car for free to a address within Peninsular
                Malaysia.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are your operating hours?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Carsome Experience Centers are open on Mondays to Sundays,
                9.00am to 6.00pm.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Online Booking */}

          <Text id="OnlineBooking" fontSize="2xl" fontWeight="bold" p={4}>
            Online Booking
          </Text>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Why should I buy a used car online on Carsome?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Carsome has an extensive list of cars which are updated daily
                  and available for online viewing at any time of the day. You
                  can browse for a car of your choice and pay the booking fee
                  for it, all from the comfort of your home! It is now faster,
                  more convenient and safer for you to buy a car. If you wish to
                  make an offline booking instead, please visit a Carsome
                  Experience Center near you.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How much is the booking fee of each car?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  The booking fee is 1% of the purchase price with no hidden
                  fees or extra charges.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I pay the booking fee if I prefer to book a car online?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Please refer to the following steps to make the payment:
                  <br />
                  Step 1: On the product page of the car of your choice, click
                  on the button "Book This Car".
                  <br />
                  Step 2: You will be directed to a page to key in your details.
                  Check that the details you have keyed in are correct, then
                  click on the button "Pay Booking Fee".
                  <br />
                  Step 3: Select your preferred payment method and confirm your
                  payment. Please complete the payment within 30 minutes. After
                  the 30 minutes, the car will be released for other customers
                  to browse and book.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I know if my booking order has been confirmed?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  There are two (2) ways to check if your booking order has been
                  confirmed.
                </Text>
                <Text>
                  i. An icon with "Payment successful. Your car has been
                  booked!" will appear in the Order Received page once your
                  order has been confirmed.
                </Text>

                <Text>
                  ii. In My Order page, you will see a "Paid" status as
                  confirmation for your order.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What payment methods do you accept?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>We accept the following payment methods:</Text>
                <Text>i. FPX Online Banking</Text>

                <Text>ii. Credit Card</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  My payment was successful but I did not get the booking
                  confirmation. Can I get a refund?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  If you payment was successful but the car of your choice has
                  unfortunately been booked, we will automatically process a
                  refund to you. The refund will only be reflected in your bank
                  account or card within 14 working days by stAndard operating
                  procedure from the banks. A SMS notification will be sent to
                  you.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What should I do if I experience any issues on the website?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Please send a message in our live chatbox on our website. If
                  you are still facing issues on the website, kindly contact a
                  CS agent from our hotline number at 1800-82-3388 for further
                  assistance.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What is the turnaround time for Carsome to contact me after I
                  have successfully booked a car from the website?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Our Carsome Consultant will contact you within 24 hours to
                  arrange:
                </Text>
                <br />
                <Text>
                  i. For a test drive. You may choose to visit our Experience
                  Center for the test drive or have the car delivered to your
                  home for a test drive.
                </Text>
                <br />
                <Text>
                  ii. To collect your car loan application documents. Please
                  prepare your documents within three (3) days after our Carsome
                  Consultant has contacted you to avoid cancellation on your
                  booking.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  I changed my mind after paying the booking fee. Can I transfer
                  the booking fee to another car of my choice?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Please contact our dedicated Carsome Consultant who will
                  assist you with the changes of the booking process.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Coming Soon Motors */}
          <Text id="ComingSoon" fontSize="2xl" fontWeight="bold" p={4}>
            Coming Soon Motors
          </Text>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  When will the car be ready for viewing and/or test drive?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Coming soon cars on the website will be ready within 14 days.
                  In the event of a delay, we will inform you beforehand via
                  call or email.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Can I view pictures of the car?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  The pictures of the car are not available yet because the car
                  is undergoing a reconditioning process. Pictures will be
                  available after the Carsome Certified refurbishment process is
                  completed, which is within approximately 14 days.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  When will the inspection report of this car becomes available
                  for viewing?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  The inspection report is not available as the car is still
                  undergoing the inspection and refurbishment process. Rest
                  assured that all Carsome Certified cars listed are quality
                  cars backed by 175-point inspection, delivering safety beyond
                  standard, comfort, and aesthetics, on top of being free from
                  major accidents and free from flood damage.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What happens when there are defects found in the car?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  The Carsome Certified Refurbishment Process ensures all cars
                  that have passed the 175-Point Inspection are refurbished to
                  perform at their peak.
                </Text>
                <br />
                <br />
                <Text>
                  If the car quality is not up to expectations, we will return
                  the car to the Carsome Certified Lab for further refurbishment
                  work.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Will the car price change after it is made available for
                  booking?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>No, the car price will remain the same.</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  When will customers be notified when a coming soon car is
                  available?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Customers will be notified after the refurbishment process has
                  been completed. This would take approximately 14 days.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What happens when someone else books the same car after it is
                  ready?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  When someone books the same car after it is ready, you can
                  leave your contact information on our website and we will
                  reach out to you.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Will I be notified when the car is available?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Yes, customers will be notified when reconditioning is
                  completed in approximately 14 days or earlier.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  When can I see more information about the car?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  All information about the car will be displayed on the website
                  after the refurbishment process has been completed,
                  approximately in 14 days.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  If I register my interest for this car now, will I be given
                  the priority to buy it once it is ready for purchase?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Once you have registered your interest, we will contact you
                  for viewing and/or a test drive. If you have made your
                  decision, you may also book the car once it is ready.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Why should I leave my interest for a coming soon car?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  There are situations where customers are unable to find the
                  right car in our current inventory as every pre-owned car is
                  unique based on its condition.
                </Text>
                <br />
                <br />
                <Text>
                  Registering your interest in a coming soon car allows us to
                  efficiently prepare the car for your preferred Carsome
                  Experience Center so that you can view or test drive the car
                  as soon as possible. You will also be updated with the latest
                  status of the car once it is ready for viewing or a test
                  drive.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
}

export default FAQBuyingMotor;
