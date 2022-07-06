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

function FAQSellingMotor() {
  return (
    <Box marginX={["5", "5", "5", "100", "200"]} paddingBottom={24}>
      <Flex gap={2} flex="1">
        <Flex flexDir="column" w="40%">
          <Text padding={5} fontWeight="bold" fontSize="xl">
            <a href="#Genaral">Genaral</a>
          </Text>
          <Divider color="gray.200" />
          <Text padding={5} fontWeight="bold" fontSize="xl">
            <a href="#HowItWorks">How It Works</a>
          </Text>
          <Divider color="gray.200" />
          <Text padding={5} fontWeight="bold" fontSize="xl">
            <a href="#PricingandCosts">Pricing and Costs</a>
          </Text>
          <Divider color="gray.200" />
        </Flex>

        <Box w="100%">
          {/* Genaral */}
          <Text id="Genaral" fontSize="2xl" fontWeight="bold" p={4}>
            General
          </Text>
          <Accordion w="100%" allowMultiple>
            <AccordionItem w="100%">
              <AccordionButton w="100%">
                <Box w="100%" flex="1" textAlign="left" fontWeight="bold">
                  Why Sell to Motor?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  Motorsome is a used motor-selling service that is
                  professional, convenient, and fast. You can sell your motor in
                  4 simple steps:
                </Text>
                <br />
                <Text>
                  1.
                  <Link color="blue.500">
                    Submit your motor and contact details on Motorsome.
                  </Link>
                  my or call our Hotline at 1800-82-3388. Our customer service
                  team will contact you to confirm your appointment details.
                </Text>
                <Text>
                  2. Attend the scheduled, free 30-minute appointment with all
                  necessary documents at our inspection center.
                </Text>
                <Text>
                  3. Accept Motorsome’s offer price on the spot OR opt for
                  online bidding.
                </Text>
                <Text>
                  4. Once you accept our offer (on-the-spot or via bidding), we
                  will complete all the transfer of ownership paperwork for you
                  on the same day as your agreed vehicle handover date.
                </Text>
                <br />
                <Text>
                  Our service ensures that you receive the best value for your
                  motor based on its condition. After the vehicle inspection,
                  you will be provided with a selling price on the spot. If you
                  accept it and have all the documents on hand without any
                  outstanding loans, payment will be transferred to your account
                  within 1 hour* upon completion of ownership transfer.
                </Text>
                <br />
                <Text>
                  Alternatively, you may choose to put your motor up for bidding
                  on our online bidding platform. Our network of over 2,300+
                  verified used motor dealers will bid for your motor, giving
                  you the best possible price.
                </Text>
                <br />
                <Text>
                  What are you waiting for? Book a free inspection appointment
                  at <Link color="blue.500"> Motorsome.my </Link> now!
                </Text>
                <br />
                <Text>*Terms and conditions apply.</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are your operation hours?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  - Our inspection centers are open on:
                  <br />
                  Monday - Sunday (9:00am - 6:00pm).
                </Text>
                <Text>
                  - Ownership transfer and transactions are available on:
                  <br />
                  Monday - Saturday (9:00am - 6:00pm).
                </Text>
                <Text>
                  - Our customer service team is available on:
                  <br />
                  Monday - Sunday (9:00am - 6:00pm).
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What other/special types of motor do you buy?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text as="u">Motors owned by non-Malaysian citizens</Text>
                <br />
                <Text>
                  We do buy motors owned by non-Malaysian citizens. However, the
                  process differs from Motorsome’s standard procedures.
                </Text>
                <br />
                <Text>
                  Non-Malaysian motor owners have to go through the following
                  processes:
                </Text>
                <Text>
                  1. Clear any outstanding bank loans and provide a Puspakom B5
                  report (transfer of ownership inspection process at Puspakom).
                  <br />
                  2. Send the motor to Motorsome for inspection and finalise
                  transaction (accept Motorsome’s on-the-spot offer or opt for
                  online bidding).
                  <br />
                  3. Perform the ownership transfer in person with Motorsome’s
                  inspector at JPJ’s (the Road and Transport Department of
                  Malaysia) center, where the motor owner’s thumbprint will be
                  recorded.
                  <br />
                  4. Wait for Motorsome to issue payment.
                </Text>
                <br />
                <Text as="u">Motors registered outside Malaysia</Text>
                <br />
                <Text>
                  At the moment, we only buy motors registered in Malaysia
                  (including Sabah and Sarawak), except Labuan and Langkawi.
                </Text>
                <br />
                <Text as="u">Motors registered under Police or Army ID</Text>
                <br />
                <Text>
                  The process for selling motors registered under Police or Army
                  ID follows our standard procedures. Motor owners with vehicles
                  registered under Police or Army ID are required to update
                  their IDs to the standard 12-digit NRIC number before
                  proceeding.
                </Text>
                <br />
                <Text as="u">Motors with engines over 3,000cc</Text>
                <br />
                <Text>
                  At the moment, we only accept the makes and models below:
                </Text>
                <br />
                <Text>
                  - Ford: Ranger, Trader
                  <br />
                  - Honda: Accord, Elysion, LaGreat
                  <br />
                  - Isuzu: Citation, D-Max
                  <br />
                  - Mazda: BT-50, CX-9, MPV
                  <br />
                  - Mitsubishi: Pajero, Storm, Triton
                  <br />
                  - Nissan: Cefiro, Elgrand, Infiniti, Murano, Skyline, Urvan
                  <br />- Toyota: Alphard, Estima, Harrier, Hiace, Hilux, Land
                  Cruiser
                </Text>
                <br />
                <Text>
                  If you are uncertain about your make and model, please write
                  to us at <Link color="blue.500"> info@motorsome.my </Link> or
                  call us at 1800-82-3388 for more information.
                </Text>
                <br />
                <Text as="u">Others</Text>
                <br />
                <Text>
                  We purchase vans, performance motors, and all reconditioned
                  motors with company or individual approved permits (AP). If
                  you are unable to find the motor model on Motorsome’s online
                  appointment booking form, please write to us at
                  info@motorsome.my or call us at 1800-82-3388 to arrange for an
                  inspection appointment.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Can I sell a motor on behalf of others?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text as="u">On behalf of friends and family.</Text>
                <br />
                <Text>
                  No. However, you can bring the motor on the owner’s behalf for
                  inspection at our inspection centers; after the inspection, we
                  require the motor owner to be present for ownership transfer
                  as the owner’s thumbprint is required.
                </Text>
                <br />
                <Text as="u">On behalf of a company.</Text>
                <br />
                <Text>Yes. We need you to bring along the following:</Text>
                <br />
                <Text>
                  - A form of photo identification for the person delivering and
                  transacting the motor.
                  <br />
                  - A letter signed by the company’s director providing
                  authorization for you to sell on the company’s behalf.
                  <br />
                  - Company account details (e.g. company bank statement).
                  <br />
                  - One form of identification on the company’s business
                  address.
                  <br />
                  - Both sets of motor keys (if available).
                  <br />- Complete motor service history (if available).
                </Text>
                <br />
                <Text>
                  Further documentation may be required depending on the
                  situation, so it is advisable to contact us at
                  info@motorsome.my if you are selling a company registered
                  motor. A separate team will handle your case and the motor
                  inspection will be done at your company’s premises instead.
                </Text>
                <br />
                <Text>
                  Note: fees and charges may apply if you are selling a company
                  registered vehicle.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* How It Works */}
          <Text id="HowItWorks" fontSize="2xl" fontWeight="bold" p={4}>
            How It Works
          </Text>
          <Accordion allowMultiple>
            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I sell my motor on Motorsome?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text fontWeight="bold">Step 1: Make an Appointment</Text>
                <br />
                <Text>
                  It takes less than 2 minutes to
                  <Link color="blue.500">
                    submit your motor and contact details on Motorsome.my
                  </Link>
                  or call our hotline at 1800-82-3388. Our Customer Service team
                  will call you to confirm your details and inspection date and
                  time.
                </Text>
                <br />
                <Text fontWeight="bold">Step 2: Attend the Inspection</Text>
                <br />
                <Text>
                  Attend the appointment with the original documents and items
                  listed below:
                </Text>
                <br />
                <Text>
                  a. Registration Motord (RC)/Vehicle Ownership Certificate
                  (VOC)
                </Text>
                <br />
                <Text>b. NRIC (or passport for non-Malaysians)</Text>
                <br />
                <Text>c. Spare keys (if available)</Text>
                <br />
                <Text>
                  d. Approved Permit (AP) (company or individual for
                  verification, if applicable)
                </Text>
                <br />
                <Text>
                  e. Hire Purchase Settlement (for motors with outstanding loan
                  amount)
                </Text>
                <br />
                <Text>f. Purchase Invoice (for motors purchased by cash)</Text>
                <br />
                <Text>
                  g. Third party authorization letter (for motors under a
                  different name)
                </Text>
                <br />
                <Text>
                  The inspection appointment takes an average of 30 minutes. A
                  Motorsome-certified auto inspector will conduct a thorough
                  175-point inspection of your motor, which includes a short
                  road test. The road drive helps us determine the realistic
                  value of your motor. Photos will also be taken for record and
                  reporting purposes.
                </Text>
                <br />
                <Text fontWeight="bold">
                  Step 3: Accept the Offer or Choose Online Bidding
                </Text>
                <br />
                <Text>
                  We will quote you a selling price, which you may accept on the
                  spot or choose to put your motor up for online bidding.
                </Text>
                <br />
                <Text fontWeight="bold">A. Sell to Motorsome directly</Text>
                <br />
                <Text>
                  Once you accept the offer, you will be given a maximum of 5
                  days to hand over your motor and the necessary documents to
                  us. If you agree to hand over your motor on the day of
                  inspection, the ownership transfer and payment process can be
                  done on the same day if you bring all the necessary documents.
                </Text>
                <br />
                <Text fontWeight="bold">
                  B. Put your motor up for online bidding
                </Text>
                <br />
                <Text>
                  We will schedule your motor for bidding at the earliest
                  available slot, where it will be bid by 1,800+ verified used
                  motor dealers. If your motor receives bids, you have 24 hours
                  to accept or reject the bid offer. If you accept, you will be
                  given 5 days to prepare all the necessary documents and hand
                  over the motor to us.
                </Text>
                <br />
                <Text>
                  If your motor does not receive any bids, you will be allowed
                  to put your motor on the bidding platform for 2 more times or
                  choose to accept the price offered by Motorsome (if
                  applicable). The subsequent starting bid price (for the 1st
                  and 2nd rebidding) will be 5% less than the previous starting
                  bid price.
                </Text>
                <br />
                <Text>
                  Currently, Motorsome has 2 bidding sessions on Mondays to
                  Saturdays (10am - 12pm and 2pm - 4pm); and 1 bidding session
                  on Sundays (2pm - 4pm).
                </Text>
                <br />
                <Text fontWeight="bold">
                  Step 4: Transfer of Ownership, Vehicle Handover, and Payment
                </Text>
                <br />
                <Text>
                  All paperwork for ownership transfer will be handled by us on
                  the agreed date of the vehicle handover. The remaining loan
                  settlement with the bank and final payment will be made
                  directly to the owner’s bank account via online transfer.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What is the process of the inspection appointment?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  Notify your inspector-in-charge when you arrive for your
                  inspection. The whole appointment should not take more than 30
                  minutes. Our professional, certified inspectors will conduct a
                  thorough 175-point inspection of your motor, which includes a
                  short road test. The road drive helps us to determine the
                  realistic value of your motor. Photos will also be taken for
                  record and reporting purposes.
                </Text>
                <br />
                <Text>
                  We will offer you a price to buy your motor on the spot. If
                  you agree to accept the offer and sell to us, we will complete
                  all the necessary paperwork for you, and pay you via online
                  transfer within 1 hour*. If you decide to try online bidding,
                  we will schedule your motor for a 2-hour online bidding among
                  our verified used motor dealer network. The starting bid price
                  will be discussed and agreed upon between you and Motorsome
                  prior to the live bidding session.
                </Text>
                <br />
                <Text>
                  *Subject to
                  <Link color="blue.500"> terms and conditions </Link> and
                  receipt of all documents.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I view my motor's live bidding session?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  You will receive an email or SMS to view the live bidding
                  session for your motor. Here are the steps:
                </Text>
                <br />
                <Text>
                  1. Click on the link sent to you and enter your email as the
                  username.
                </Text>
                <br />
                <Text>
                  2. Proceed to set up your own password (It requires at least 8
                  characters, with at least 1 capital letter, 1 numeric and 1
                  symbol).
                </Text>
                <br />
                <Text>3. Log in to view the bid.</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="sm">
                  What happens when my motor does not receive any bids?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>You have 2 options:</Text>
                <br />
                <Text>
                  (a) Accept our initial offer within 3 days of the inspection
                  date.
                </Text>
                <br />
                <Text>
                  (b) If your motor did not receive any bids from the first
                  session, it will be automatically scheduled for the next
                  available bidding session, usually on the same day or the
                  following day. The subsequent starting bid price will be 5%
                  less than the previous starting bid price for each subsequent
                  bid session. Should there be no bids after the second attempt
                  and you still want to proceed with a sale, we recommend
                  contacting your inspector-in-charge. Please note that our
                  offered price may differ depending on the situation*.
                </Text>
                <br />
                <Text>
                  *A new offer price may be provided upon customer’s request
                  should there be no bids after the first or second attempt. The
                  new offer price will differ from the original offer price
                  prior to bidding.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What happens after I agree to sell my motor, and what do I
                  need to prepare for ownership transfer?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  You need to release your motor to us within 5 days from the
                  day you accept our offer or the bid price. Motorsome will
                  contact you to arrange for the following:
                </Text>
                <br />
                <Text>
                  - Provide thumbprint
                  <br />- Provide purchase invoice (for motors purchased by
                  cash)
                </Text>
                <br />
                <Text>
                  All paperwork for ownership transfer will be handled by
                  Motorsome on the agreed date of the vehicle handover. The
                  remaining loan settlement with the bank and final payment will
                  be made directly to the motor owner’s bank account via online
                  transfer.
                </Text>
                <br />
                <Text>
                  We require the following documents and items for ownership
                  transfer:
                </Text>
                <br />
                <Text>
                  - NRIC (or passport for non-Malaysians)
                  <br />
                  - Original vehicle Registration Motord (RC) / Original Vehicle
                  Ownership Certificate (VOC)
                  <br />
                  - Spare keys (if any)
                  <br />- Outstanding hire purchase loan statement (if any)
                </Text>
                <br />
                <Text>
                  If we do not receive your vehicle RC/VOC, we will withhold
                  RM2,000 from the selling price as collateral. You must produce
                  the RC/VOC within 14 days from the ownership transfer date or
                  the RM2,000 will be forfeited.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I sell an E-Hailing Registered Vehicle Under Class
                  'HA'?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500">
                <Text>
                  1. Inform the e-hailing company that you are selling the
                  motor. The e-hailing company will inform the APAD (Agensi
                  Pengangkutan Awam Darat), who will cancel the E-Hailing
                  Vehicle Permit.
                </Text>
                <br />
                <Text>
                  2. Go to Puspakom to run the B2 and B5 Inspection and complete
                  the ownership transfer &amp; 'Tukar Kelas'.
                </Text>
                <br />
                <Text>
                  3. Do a manual thumbprint verification at the nearest JPJ
                  center.
                </Text>
                <br />
                <Text>
                  4. After steps 1-3 are complete,
                  <Link color="blue.500" marginX={1}>
                    make an appointment at Motorsome.my
                  </Link>
                  or call our hotline at 1800-82-3388.
                </Text>
                <br />
                <Text>
                  Note: you will be responsible for any fees/charges under steps
                  1-3.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What if my road tax expires?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                If your road tax has expired for more than 1 year, you have to
                renew it, or we are not able to proceed with inspection. Also,
                for reasons of the law, you should not drive on the road if your
                vehicle does not have a valid road tax.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What if my motor registration motord is with the bank?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                If you attend the inspection process without the motor grant,
                you must send a photocopy to the inspector-in-charge after the
                inspection to proceed with bidding/transaction.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Will the final bid price of my motor be guaranteed?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Motorsome may offer your vehicle to the second highest bidder if
                the highest bidder rejects the bid due to unforeseen
                circumstances. For motors with a final bid price of RM100,000
                and higher, a transaction will only be considered successful
                upon receipt of a 30% deposit paid by the successful bidder. In
                the event that the bidder fails to fulfill payment requirements,
                Motorsome reserves the final rights on the purchase of the
                vehicle.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What if my motor is in JB and my motor grant is in KL. What
                  should I do?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                <Text>
                  You are allowed to surrender your vehicle and motor grant at
                  any Motorsome location in Malaysia and do the ownership
                  transfer* at a different Motorsome location. Make sure that
                  your inspector is aware of the situation and transferring
                  location. Do note that Motorsome will be withholding RM2,000
                  from the payment if the motor and motor grant are not
                  surrendered prior to the ownership transfer.
                </Text>
                <br />
                <Text>
                  *Ownership transfer must be performed by the motor owner.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do I clear E-Batal for hire purchase financing?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} color="gray.500" fontSize="sm">
                Once your hire purchase financing has been settled in full,
                contact your bank to request for E-Batal.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Pricing and Costs */}

          <Text id="PricingandCosts" fontSize="2xl" fontWeight="bold" p={4}>
            Pricing and Costs
          </Text>
          <Accordion allowMultiple>
            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Is there a transaction fee when I sell my motor?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text as="u">Privately registered motors</Text>
                <Text>
                  If you accept Motorsome’s direct offer, there are NO
                  transaction fees. The inspection process is free of charge.
                </Text>
                <br />
                <Text as="u">Company registered motors</Text>
                <Text>
                  Fees and charges apply. Contact us at
                  <Link color="blue.500"> support@motorsome.com</Link> if you
                  are selling a company registered motor.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What are the charges/fees in regards to bidding?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text as="u">When you put your vehicle up for bidding</Text>
                <br />
                <Text>
                  No fee will be charged for vehicles that put on our nationwide
                  bidding platform.
                </Text>
                <br />
                <Text>
                  Effective 1st December 2020, a handling fee of RM500 will be
                  charged upon successful handover.
                </Text>
                <br />
                <Text as="u">If you decline the bidding offer</Text>
                <Text>All rejection fees are waived until further notice.</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  How do you calculate the price for my motor?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>
                  Our experience in buying used motors as well as our
                  comprehensive market knowledge and data mining allow us to
                  build a proprietary tool to evaluate motors realistically.
                </Text>
                <br />
                <Text>
                  The on-site assessment by our skilled professionals allows us
                  to give you the best offer. We will buy any motor we valuate;
                  if you choose to accept our offer, you can immediately sell
                  your motor to us and the entire process will be managed by us.
                  If you choose to put your motor up for bidding, we will set a
                  price (which is communicated to and agreeable by you before
                  bidding) and schedule your motor for bidding.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem w="100%">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  What if my outstanding hire purchase financing is higher than
                  the motor value?
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} mcolor="gray.500" fontSize="sm">
                <Text>There are two ways to go about this:</Text>
                <br />
                <Text>
                  - If the outstanding amount is higher than our offered price,
                  we will still offer to buy your motor. You can pay the
                  shortfall by cash or cheque to the bank.
                </Text>
                <br />
                <Text>
                  - If the outstanding finance is lower than our offered price,
                  we will settle the amount with the bank and pay you the
                  balance via online transfer.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
}

export default FAQSellingMotor;
