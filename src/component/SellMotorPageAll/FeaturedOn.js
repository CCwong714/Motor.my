import React from "react";
import { Box, Heading, Image, Grid, Text, Button } from "@chakra-ui/react";
import ImageHappyCustomer from "../../image/Logo/HappyCustomer.jpg";
import Bloomberg from "../../image/bloomberg.png";
function FeaturedOn() {
  return (
    <>
      {" "}
      <Box bgColor="gray.100">
        <Box
          paddingTop="10"
          paddingBottom="10"
          marginX={["0", "0", "100", "100", "200"]}
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
            marginX={["5", "100"]}
          >
            <Image src={Bloomberg} />
            <Image src={Bloomberg} />
            <Image src={Bloomberg} />
            <Image src={Bloomberg} />
            <Image src={Bloomberg} />
            <Image src={Bloomberg} />
            <Image src={Bloomberg} />
            <Image src={Bloomberg} />
          </Grid>
        </Box>
      </Box>
      {/* Ready to sell? */}
      <Box
        backgroundImage={[`url(${ImageHappyCustomer})`]}
        backgroundPosition="center"
        backgroundSize="cover"
        w="100%"
        height={["30vh", "300px"]}
        align="center"
      >
       <Box paddingTop={20}>
          <Text
            color="blue.900"
            fontSize="2xl"
            fontWeight="bold"
            bgColor="white"
            w="300px" 
          >
            Ready to Sell Your Motor?
          </Text>
          <Button marginTop={5}>Book an Inspection Now</Button>
        </Box>
      </Box>
    </>
  );
}

export default FeaturedOn;
