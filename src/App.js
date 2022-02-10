import "./App.css";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import { ItemListContainer } from "./components/Products/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/Products/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:catId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
