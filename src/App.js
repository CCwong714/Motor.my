import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";
import Footer from "./component/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./component/Page/HomePage";
import BuyMotorPage from "./component/Page/BuyMotorPage";
import SellMotorPage from "./component/Page/SellMotorPage";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box maxW={1920} maxH={1080}>
        <Router>
          <MenuAndMenuButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Buycarpage" element={<BuyMotorPage />} />
            <Route path="/Sellcarpage" element={<SellMotorPage />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </>
  );
}

export default App;
