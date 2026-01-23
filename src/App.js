// src/App.jsx
import { useLocation } from "react-router-dom";
import AppRoutes from "./Router/Routerpages";

// Common Components
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function Layout() {
  const location = useLocation();
  const hideLayoutPages = ["/login", "/signup"];

  const hideLayout =
    location.pathname.startsWith("/admin") ||
    hideLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <AppRoutes />
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return <Layout />; // ✅ BrowserRouter removed
}

export default App;
