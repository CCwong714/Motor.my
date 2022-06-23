import React from "react";
import { Box, Heading, Image, Grid,Text,Button } from "@chakra-ui/react";
import Image3 from "../../image/photo3.jpg";

function FeaturedOn() {
  return (
    <>
      {" "}
      <Box bgColor="gray.100">
        <Box
          paddingTop="10"
          paddingBottom="10"
          marginX={["0", "0", "100", "100", "200", "250"]}
        >
          <Heading align="center">Featured On</Heading>

          <Grid
            templateColumns={[
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(4,1fr)",
            ]}
            gap={2}
            marginTop={10}
            marginX={["5","100"]}
          >
            <Image src={Image3} />
            <Image src={Image3} />
            <Image src={Image3} />
            <Image src={Image3} />
            <Image src={Image3} />
            <Image src={Image3} />
            <Image src={Image3} />
            <Image src={Image3} />
          </Grid>
        </Box>
      </Box>

      {/* Ready to sell? */}
      <Box
          backgroundImage={[`url(${Image3})`]}
          backgroundPosition="center"
          backgroundSize="cover"
          w="100%"
          height={["30vh", "300px"]}
          align="center"
        >
        <Text color="white" fontSize="2xl" fontWeight="bold" paddingTop={["20%","100px"]}>Ready to Sell Your Motor? </Text>
        <Button marginTop={5}>Book an Inspection Now</Button>
      </Box>
    </>
  );
}

export default FeaturedOn;
