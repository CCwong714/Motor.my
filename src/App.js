import { Box } from "@chakra-ui/react";
// import NavBarMenu from './component/NavBarAll/NavBarMenu';
// import NavBarItem from './component/NavBarAll/NavBarItem';
import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";
import ChangePhoto from "./component/ChangePhoto/ChangePhoto";
import SellAndBuyMotor from "./component/SellandBuyMotor/SellAndBuyMotor";
import CerdifiedMotorHeader from "./component/CertifiedMotor/CertifiedMotorHeader";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import HappyCustomer from "./component/HappyCustomer/HappyCustomer";
import FAQ from "./component/FAQ/FAQ.js";
import PopularUsedCarsForSale from "./component/PopularUsedCarsForSale/PopularUsedCarsForSale.js"

function App() {
  return (
    <>
      <Box>
        <header>
          <MenuAndMenuButton />
        </header>
        <ChangePhoto />
        <SellAndBuyMotor />
        <CerdifiedMotorHeader />
        <HowItWorks/>
        <HappyCustomer/>
        <FAQ/>
        <PopularUsedCarsForSale/>
      </Box>
    </>
  );
}

export default App;
