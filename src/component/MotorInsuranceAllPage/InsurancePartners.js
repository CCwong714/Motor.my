import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import HongLeongBank from "../../image/HongLeongBank.svg";

function InsurancePartners() {
  return (
    <>
      <Text align="center" fontSize="3xl" fontWeight="bold" marginTop={14}>
        Our Insurance Partners
      </Text>
      <Box marginX={["0", "0", "100", "100", "200"]} marginTop={5} paddingBottom={14}>
        <Grid
          templateColumns={[
            "repeat(4,1fr)",
            "repeat(6,1fr)",
            "repeat(8,1fr)",
            "repeat(10,1fr)",
            "repeat(12,1fr)",
          ]}
          gap={4}
          justifyContent="center"
        >
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            <Image src={HongLeongBank} />
          </GridItem>

          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
            colStart={["auto", "auto", "auto", "auto", "2"]}
          >
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
            colStart={["auto", "2", "2", "3", "auto"]}
          >
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            
            <Image src={HongLeongBank} />
          </GridItem>
          <GridItem
            marginX={["4", "4", "6"]}
            marginY={5}
            alignSelf="center"
            colSpan="2"
          >
            
            <Image src={HongLeongBank} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default InsurancePartners;
