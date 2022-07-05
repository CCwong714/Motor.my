import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";
import Footer from "./component/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/Page/HomePage";
import BuyMotorPage from "./component/Page/BuyMotorPage";
import SellMotorPage from "./component/Page/SellMotorPage";
import { Box } from "@chakra-ui/react";
import MotorLoanPage from "./component/Page/MotorLoanPage";
import ErrorPage from "./component/Page/ErrorPage";

import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import ShowMotorPage from "./component/ShowMotorPage/ShowMotorPage";
import ScrollToTopButton from "./component/ScrollToTop/ScrollToTopButton";
import MotorInsurance from "./component/Page/MotorInsurance";
import FAQpage from "./component/Page/FAQpage";

function App() {
  return (
    <>
      <Box marginX="auto" maxW={1920}>
        <Router>
          <ScrollToTopButton />
          <ScrollToTop />
          <MenuAndMenuButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buy-motor" element={<BuyMotorPage />} />
            <Route path="/sell-motor" element={<SellMotorPage />} />
            <Route path="/loan-motor" element={<MotorLoanPage />} />
            <Route path="/insurance-motor" element={<MotorInsurance />} />
            <Route path="/faq-motor" element={<FAQpage/>} />
            <Route path="/show-motor" element={<ShowMotorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </>
  );
}

export default App;
