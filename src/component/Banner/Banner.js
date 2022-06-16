import { Box } from "@chakra-ui/react";
import MenuAndMenuButton from "./MenuAndMenuButton";
import ChangePhoto from "../ChangePhoto/ChangePhoto";
import SellAndBuyMotor from "../SellandBuyMotor/SellAndBuyMotor";



function Banner() {
  return ( 
    <>
      <Box >
        <header>
            <MenuAndMenuButton/>
        </header>
        <ChangePhoto/>
        <SellAndBuyMotor/>
        

      </Box>
    </>
   );
}

export default Banner ;
