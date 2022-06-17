import { Box } from "@chakra-ui/react";
// import NavBarMenu from './component/NavBarAll/NavBarMenu';
// import NavBarItem from './component/NavBarAll/NavBarItem';
import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";
import ChangePhoto from "./component/ChangePhoto/ChangePhoto";
import SellAndBuyMotor from "./component/SellandBuyMotor/SellAndBuyMotor";
import CerdifiedMotorHeader from "./component/CertifiedMotor/CertifiedMotorHeader";
import HowItWorks from "./component/HowItWorks/HowItWorks";

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
      </Box>
    </>
  );
}

export default App;
