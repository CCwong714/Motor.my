import { Box } from "@chakra-ui/react";
// import NavBarMenu from './component/NavBarAll/NavBarMenu';
// import NavBarItem from './component/NavBarAll/NavBarItem';
import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";
import ChangePhoto from "./component/ChangePhoto/ChangePhoto";
import SellAndBuyMotor from "./component/SellandBuyMotor/SellAndBuyMotor";
import CerdifiedMotorHeader from "./component/CertifiedMotor/CertifiedMotorHeader";

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
      </Box>
    </>
  );
}

export default App;
