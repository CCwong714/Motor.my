import MenuAndMenuButton from "./component/Banner/MenuAndMenuButton";

import Footer from "./component/Footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/Page/HomePage";

function App() {
  return (
    <>
      <Router>
        <MenuAndMenuButton />
        <Routes> 
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
