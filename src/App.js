import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout.js";
import Home from "./views/home.jsx";
import Persona from "./views/persona"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/persona/:id" element={<Persona/>}></Route>
          
                                 {/* <Route index element={<div>Hola Mundo</div>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="*" element={<div>Pagina no encontrada</div>}></Route>*/}
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
