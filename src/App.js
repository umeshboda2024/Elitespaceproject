// src/App.jsx
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./Router/Routerpages";

// Common Components
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function Layout() {
  const location = useLocation();

  // Hide Navbar & Footer on Admin routes
  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}

      <AppRoutes />

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
