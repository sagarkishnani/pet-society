import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Tienda de perritos" />
    </>
  );
}

export default App;
