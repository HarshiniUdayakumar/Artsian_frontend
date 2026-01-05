import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ceramics from "./pages/categories/Ceramics";
import Jewelry from "./pages/categories/Jewelry";
import Paintings from "./pages/categories/Paintings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/ceramics" element={<Ceramics />} />
      <Route path="/categories/jewelry" element={<Jewelry />} />
      <Route path="/categories/paintings" element={<Paintings />} />
    </Routes>
  );
}

export default App;
