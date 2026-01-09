import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ceramics from "./pages/categories/Ceramics";
import Jewelry from "./pages/categories/Jewelry";
import Paintings from "./pages/categories/Paintings";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import BuyerDashboard from "./pages/BuyerDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/buyerdashboard" element={<BuyerDashboard />} />
      <Route path="/categories/ceramics" element={<Ceramics />} />
      <Route path="/categories/jewelry" element={<Jewelry />} />
      <Route path="/categories/paintings" element={<Paintings />} />
    </Routes>
  );
}

export default App;
