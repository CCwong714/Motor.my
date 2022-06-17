import { Box } from "@chakra-ui/react";
import MenuAndMenuButton from "./MenuAndMenuButton";
import ChangePhoto from "../ChangePhoto/ChangePhoto";
import SellAndBuyMotor from "../SellandBuyMotor/SellAndBuyMotor";
import CerdifiedMotorHeader from "../CertifiedMotor/CertifiedMotorHeader";

function Banner() {
  return (
    <>
      <Box>
        <header>
          <MenuAndMenuButton />
        </header>
        <ChangePhoto />
        <SellAndBuyMotor />
        <CerdifiedMotorHeader />
      </Box>
    </>
  );
}

export default Banner;
