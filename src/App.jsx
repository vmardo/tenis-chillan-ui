import { NavbarTenis } from "./components/navbar/NavbarTenis"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Pelotas from "./pages/productos/Pelotas"
import Raquetas from "./pages/productos/Raquetas"
import ProductoDetalle from "./pages/productos/ProductoDetalle"

function App() {
  
  return (
    <Router>
      <NavbarTenis/>
      <Routes>
       <Route path="/" element= {<Home/>} />
       <Route path="/productos/Pelotas" element= {<Pelotas/>} />
       <Route path="/productos/Raquetas" element= {<Raquetas/>} />
       <Route path="/productos/detalle" element= {<ProductoDetalle/>} />

      </Routes>
      
    </Router>
  )
}

export default App
