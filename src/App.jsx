import { NavbarTenis } from "./components/navbar/NavbarTenis"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Perfil from "./pages/productos/Perfil"
import Registro from "./pages/Registro"
import Pedido from "./components/Pedido"
import Pelotas from "./pages/productos/Pelotas"
import Raquetas from "./pages/productos/Raquetas"
import Accesorios from "./pages/productos/Accesorios"
import Ropa from "./pages/productos/Ropa"
import ProductoDetalle from "./pages/productos/ProductoDetalle"


function App() {
  
  return (
    <Router>
      <NavbarTenis/>
      <div className="flex justify-center pt-6">
      <Routes>
       <Route path="/" element= {<Home/>} />
       <Route path="/login" element= {<Login/>} />
       <Route path="/registro" element= {<Registro/>} />
       <Route path="/pedido" element= {<Pedido/>} />
       <Route path="/perfil" element= {<Perfil/>} />
       <Route path="/productos/Pelotas" element= {<Pelotas/>} />
       <Route path="/productos/Raquetas" element= {<Raquetas/>} />
       <Route path="/productos/Accesorios" element= {<Accesorios/>} />
       <Route path="/productos/Ropa" element= {<Ropa/>} />
       <Route path="/productos/detalle" element= {<ProductoDetalle/>} />
      
      </Routes>
      </div>
    </Router>
  )
}

export default App
