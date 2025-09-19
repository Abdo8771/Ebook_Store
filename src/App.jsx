import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PaymentPage from "./pages/PaymentPage"; 
import { CartProvider } from "./pages/CartContext"; 
import AllProduct from "./pages/AllProduct";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/products" element={<AllProduct/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  
  );
}
export default App