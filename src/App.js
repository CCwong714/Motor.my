import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";
import Footer from "./component/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/Page/HomePage";
import BuyMotorPage from "./component/Page/BuyMotorPage";
import SellMotorPage from "./component/Page/SellMotorPage";
import { Box } from "@chakra-ui/react";
import MotorLoanPage from "./component/Page/MotorLoanPage";
import ErrorPage from "./component/Page/ErrorPage";
import SliderCustomer from "./component/HappyCustomer/SliderCustomer";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Box marginX="auto" maxW={1920}>
        <Router>
          <ScrollToTop>
            <MenuAndMenuButton />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/buymotorpage" element={<BuyMotorPage />} />
              <Route path="/sellmotorpage" element={<SellMotorPage />} />
              <Route path="/motorloanpage" element={<MotorLoanPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <SliderCustomer />
            <Footer />
          </ScrollToTop>
        </Router>
      </Box>
    </>
  );
}

export default App;
