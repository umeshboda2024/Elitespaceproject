// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../src/Router/Routerpages";

// Common Components
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
