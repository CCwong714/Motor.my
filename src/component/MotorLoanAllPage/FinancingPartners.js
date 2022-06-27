import React from "react";
import { Box, Grid, Image, Text, GridItem } from "@chakra-ui/react";
import HongLeongBank from "../../image/HongLeongBank.svg";
function FinancingPartners() {
  return (
    <Box marginX={["0", "0", "100", "100", "200"]}>
      <Text fontWeight="bold" fontSize="4xl" align="center" marginTop={14}>
        Loan Financing Partners
      </Text>
      <Grid
        templateColumns={[
          "repeat(2,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
          "repeat(6,1fr)",
          "repeat(8,1fr)",
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
      </Grid>
    </Box>
  );
}

export default FinancingPartners;
