import React from "react";
import ChangePhoto from "../ChangePhoto/ChangePhoto";
import SellAndBuyMotor from "../SellandBuyMotor/SellAndBuyMotor";
import CerdifiedMotorHeader from "../CertifiedMotor/CertifiedMotorHeader";
import HowItWorks from "../HowItWorks/HowItWorks";
import HappyCustomer from "../HappyCustomer/HappyCustomer";
import FAQ from "../FAQ/FAQ.js";
import PopularUsedCarsForSale from "../PopularUsedCarsForSale/PopularUsedCarsForSale"

function Homepage() {
  return (
    <>
      <ChangePhoto />
      <SellAndBuyMotor />
      <CerdifiedMotorHeader />
      <HowItWorks />
      <HappyCustomer />
      <FAQ />
      <PopularUsedCarsForSale />
    </>
  );
}

export default Homepage;
