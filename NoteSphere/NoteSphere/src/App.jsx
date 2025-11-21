import "./App.css";
import Home from "./pages/Home";
import Trash from "./pages/Trash";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
