import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";
import ChangePhoto from "./component/ChangePhoto/ChangePhoto";
import SellAndBuyMotor from "./component/SellandBuyMotor/SellAndBuyMotor";
import CerdifiedMotorHeader from "./component/CertifiedMotor/CertifiedMotorHeader";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import HappyCustomer from "./component/HappyCustomer/HappyCustomer";
import FAQ from "./component/FAQ/FAQ.js";
import PopularUsedCarsForSale from "./component/PopularUsedCarsForSale/PopularUsedCarsForSale.js"
import Footer from "./component/Footer/Footer.js"

function App() {
  return (
    <>
    
        <MenuAndMenuButton/>
        <ChangePhoto />
        <SellAndBuyMotor />
        <CerdifiedMotorHeader />
        <HowItWorks/>
        <HappyCustomer/>
        <FAQ/>
        <PopularUsedCarsForSale/>
        <Footer/>
    </>
  );
}

export default App;
