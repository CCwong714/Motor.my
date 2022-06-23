import React from "react";
import { Box, Heading, Grid, color } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import ReadMore from "./ReadMore";

function TrustInUs() {
  return (
    <>
      <Box
        paddingTop="10"
        bgColor="gray.100"
        paddingBottom="10"
        marginX={["0", "0", "100", "100", "200", "250"]}
      >
        <Heading align="center" fontSize={["2xl", "4xl"]}>
          Put Your Trust in Us
        </Heading>

        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
          gap={6}
          marginTop={10}
          marginX="6"
        >
          <ReadMore
            name="Nurfadhlina Ramli"
            text="We had a really smooth process at Carsome Selayang. The day before we went there, we booked appointment online. And during the appointment, they checked our car thoroughly and gave evaluation immediately. Then, after we agreed on the price, the staff there took over to settle with bank etc. So easy! Everything settled within 1.5 hours. Thank you Iqbal from Carsome Selayang! "
            showIcon={BsFacebook}
            color="blue.700"
            isFacebook
          />

          <ReadMore
            name="Prakash G.Raman"
            text="What a seamless journeny to sell off my car especially during MCO....THe Inspector was in PPE Throughout the check...then on bidding... and car handing over... very easy and fast... am indebted to Motor because i was leaving for work overseas (essential worker) and the promptness helped ALOT... the trade in value was indeed higher than the others... Thank you"
            showIcon={BsFacebook}
            color="blue.700"
            isFacebook
          />

          <ReadMore
            name="Nurfadhlina Ramli"
            text="A hassle-free car selling experience. The new Carsome's PJ Experience Center was a bliss and such a conducive environment makes the whole experience a pleasant ones. Swift live-bidding with fast same-day transaction after mutual agreement. Kudos to Mr. Naga, for the professionalism and his kind assistance. The best car-selling platform ever! Dell Chiciro Highly recommended platform to sell my car. the whole process took less than 1 week from registration, inspection, bidding, car handover & thumb print. Selling price is also good. Hassle free, f...
            
            Read"
            showIcon={FcGoogle}
          />
        </Grid>
      </Box>
    </>
  );
}

export default TrustInUs;
