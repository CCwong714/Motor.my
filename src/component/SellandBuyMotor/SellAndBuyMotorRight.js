import { Box, Button, Text, Image, Grid, Link } from "@chakra-ui/react";
import { useState } from "react";
import Payment from "../../image/Payment.svg";
import SelectOption from "../SelectOption";

const items = [
  {
    label: "Honda",
    value: "honda",
  },
  {
    label: "Kawasaki",
    value: "kawasaki",
  },
  {
    label: "BMW",
    value: "bmw",
  },
];

const items2 = [
  {
    label: "Honda",
    value: "honda",
  },
  {
    label: "Kawasaki",
    value: "kawasaki",
  },
  {
    label: "BMW",
    value: "bmw",
  },
  {
    label: "Yamaha",
    value: "yamaha",
  },
  {
    label: "KTM",
    value: "ktm",
  },
  {
    label: "NIU",
    value: "niu",
  },
];


function SellAndBuyMotorRight() {
  const [value, setValue] = useState("");

  return (
    <>
      <Box w="450px" padding="7">
        <Text fontWeight="bold" fontSize="2xl" marginBottom="10">
          Sell Your Motor
        </Text>

        <SelectOption
          items1={items}
          items2={items2}
          onChange={(newValue) => setValue(newValue)}
          value={value}
        />

        <SelectOption
          items1={items}
          items2={items2}
          onChange={(newValue) => setValue(newValue)}
          value={value}
        />

        <Button width="380px" bgColor="yellow.400">
          Start here
        </Button>

        <Text fontSize="12px" marginTop="2">
          By proceeding,I agree to the
          <Link
            as="span"
            variant="link"
            fontSize="12px"
            marginX="1"
            color="blue.500"
          >
            Privacy Policy
          </Link>
          {`&`}
          <Link
            as="span"
            variant="link"
            fontSize="12px"
            marginX="1"
            color="blue.500"
          >
            Terms of Use
          </Link>
        </Text>
      </Box>
      <Grid templateColumns="repeat(3,1fr)" paddingTop="10" paddingX="7">
        <Box align="center">
          <Image src={Payment} />
          <Text fontSize="13px">30 minutes Inspection Time</Text>
        </Box>
        <Box align="center">
          <Image src={Payment} />
          <Text fontSize="13px">Receive Payment in 1-hour*</Text>
        </Box>
        <Box align="center">
          <Image src={Payment} />
          <Text fontSize="13px">Hassle-Free and No Paperword</Text>
        </Box>
      </Grid>
    </>
  );
}

export default SellAndBuyMotorRight;
