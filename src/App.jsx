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
import Carrito from "./pages/Carrito"
import { AuthProvider } from "./context/authContext"
import { CarritoProvider } from "./context/carritoContext"



function App() {
  
  return (
    <AuthProvider>
      <CarritoProvider>
    <Router>
      <NavbarTenis/>
      {/* <div className="flex justify-center pt-6"> */}
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
       <Route path="/carrito" element={ <Carrito/> }/>
      
      </Routes>
      {/* </div> */}
    </Router>
     </CarritoProvider>
    </AuthProvider>
  )
}

export default App
