import { NavbarTenis } from "./components/navbar/NavbarTenis"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Pelotas from "./pages/productos/Pelotas"
import Raquetas from "./pages/productos/Raquetas"
import ProductoDetalle from "./pages/productos/ProductoDetalle"

function App() {
  
  return (
    <Router>
      <NavbarTenis/>
      <div className="flex justify-center">
      <Routes>
       <Route path="/" element= {<Home/>} />
       <Route path="/login" element= {<Login/>} />
       <Route path="/registro" element= {<Registro/>} />
       <Route path="/productos/Pelotas" element= {<Pelotas/>} />
       <Route path="/productos/Raquetas" element= {<Raquetas/>} />
       <Route path="/productos/detalle" element= {<ProductoDetalle/>} />
      
      </Routes>
      </div>
    </Router>
  )
}

export default App
