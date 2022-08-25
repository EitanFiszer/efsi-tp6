import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
import Home from "./views/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
           {/* <Route index element={<div>Hola Mundo</div>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="*" element={<div>Pagina no encontrada</div>}></Route>*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
