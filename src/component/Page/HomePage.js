import React from "react";
import ChangePhoto from "../ChangePhoto/ChangePhoto";
import SellAndBuyMotor from "../SellandBuyMotor/SellAndBuyMotor";
import CerdifiedMotorHeader from "../CertifiedMotor/CertifiedMotorHeader";
import HowItWorks from "../HowItWorks/HowItWorks";
import HappyCustomer from "../HappyCustomer/HappyCustomer";
import FAQ from "../FAQ/FAQ.js";
import PopularUsedCarsForSale from "../PopularUsedCarsForSale/PopularUsedCarsForSale";
import { Box } from "@chakra-ui/react";

function Homepage() {
  return (
    <>
      <ChangePhoto />
      <SellAndBuyMotor />
      
      <CerdifiedMotorHeader />
      <HowItWorks />
      <Box marginX={["0", "0", "100", "200", "300"]}>
        <HappyCustomer />
      </Box>
      <FAQ />
      <Box marginX={["0", "0", "100", "200", "300"]}>
        <PopularUsedCarsForSale />
      </Box>
    </>
  );
}

export default Homepage;
