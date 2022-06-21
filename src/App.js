import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";
import Footer from "./component/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/Page/HomePage";
import SellCarPage from "./component/Page/SellMotorPage";

function App() {
  return (
    <>
      <Router>
        <MenuAndMenuButton />
        <Routes> 
          <Route path="/" element={<HomePage/>}/>
          <Route path="/sellcarpage" element={<SellCarPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
