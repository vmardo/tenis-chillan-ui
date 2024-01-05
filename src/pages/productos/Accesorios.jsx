import { Link } from "react-router-dom";
import { Productos } from "../../components/Productos";
import { Typography } from "@material-tailwind/react";

function Accesorios() {

    const accesorios = [
        {
          porcentajeDescuento: 10,
          nombre: "Grip Signum Pro Hydro High Perforated + Absorbent",
          descripcion: "Grip de máxima absorción y confort con textura perforada para perfeccionar el agarre y sacar lo mejor de ti en cada juego.",
          url_imagen: "https://sursports.cl/cdn/shop/files/GRIP02.SIG.jpg?v=1699884609&width=1100",
          cantidad: 1,
          tipo: "Grip",
          disponible_entrega: true,
          disponible_retiro: true,
          precio_anterior: 7000,
          precio_actual: 6300
        },
        {
          porcentajeDescuento: 15,
          nombre: "Muñequera Yonex 492 Azul Marino",
          descripcion: "Muñequera Yonex 492 Azul Marino mantén el sudor a raya con la muñequera de algodón elastizado diseñada con el logo característico de Yonex bordado en un lado.",
          url_imagen: "https://locosporeltenis.cl/12361-large_default/munequera-yonex-492-azul-marino.jpg",
          cantidad: 1,
          tipo: "Muñequeras",
          disponible_entrega: true,
          disponible_retiro: false,
          precio_anterior: 12000,
          precio_actual: 10200
        },
        {
          porcentajeDescuento: 20,
          nombre: "Antivibrador Stopper Yonex Azul X2",
          descripcion: "El antivibrador Yonex Vibration Stopper V tiene una nueva estructura de 3 capas que amortigua cualquier vibración no deseada incluso mejor que los amortiguadores regulares. El amortiguador está hecho de caucho de silicona antivibraciones  para reducir efectivamente la sensación de vibración durante un juego intenso.",
          url_imagen: "https://sursports.cl/cdn/shop/files/ANT03.YON_a978536a-d9ed-489d-a814-c2b34b65ae0a.jpg?v=1699885548&width=1100",
          cantidad: 1,
          tipo: "antivibrador",
          disponible_entrega: false,
          disponible_retiro: true,
          precio_anterior: 6990,
          precio_actual: 5592
        },
        {
          porcentajeDescuento: 25,
          nombre: "Bandana Hydrogen Negra Unisex",
          descripcion: "Bandana Hydrogen Negra Unisex efecto piqué 100% poliamida con calavera estampada en contraste. La bandana Hydrogen asegura la máxima comodidad y absorción de la transpiración.",
          url_imagen: "https://sursports.cl/cdn/shop/files/BAN02.HYD.jpg?v=1699885522&width=1100",
          cantidad: 1,
          tipo: "Banda",
          disponible_entrega: true,
          disponible_retiro: true,
          precio_anterior: 20000,
          precio_actual: 15000
        },
        {
          porcentajeDescuento: 12,
          nombre: "Mochila Babolat Pure Aero",
          descripcion: "Eres un jugador en constante movimiento que necesita llevar 2 raquetas. Con la Mochila Babolat Pure Aero podrás organizar todo tu material gracias a sus compartimentos específicos para raqueta, calzado, accesorios y ropa.",
          url_imagen: "https://falabella.scene7.com/is/image/Falabella/gsc_114193569_921491_1?wid=1500&hei=1500&qlt=70",
          cantidad: 1,
          tipo: "Mochila",
          disponible_entrega: true,
          disponible_retiro: false,
          precio_anterior: 110000,
          precio_actual: 96800
        },
        {
          porcentajeDescuento: 18,
          nombre: "Plantilla Wilson Para Raquetas",
          descripcion: "Dale a tu raqueta el toque profesional con una plantilla de logotipo en las cuerdas. Esta plantilla Wilson fácil de usar funciona con cualquier tinta de plantilla de raqueta y es perfecta para jugadores patrocinados por Wilson o por fanáticos de los productos Wilson. Guárdalo en tu bolsa de raqueta para retoques fáciles.",
          url_imagen: "https://wilsonstore.cl/cdn/shop/products/WILWRZ7415_002_1000x.jpg?v=1642800780",
          tipo: "Plnatilla",
          disponible_entrega: false,
          disponible_retiro: true,
          precio_anterior: 8000,
          precio_actual: 6560
        },
        {
          porcentajeDescuento: 15,
          nombre: "Botella de Agua Robin Soderling Tour Edition (700ml)",
          descripcion: "Botella de Agua Robin Soderling Tour Edition que imita un tubo de pelota con RS Tour Edition. La botella está hecha de plástico y se puede lavar en el lavavajillas.",
          url_imagen: "https://sursports.cl/cdn/shop/files/BOT02.ROB.jpg?v=1699884991&width=1100",
          cantidad: 1,
          tipo: "Porta Botella",
          disponible_entrega: true,
          disponible_retiro: true,
          precio_anterior: 12000,
          precio_actual: 10200
        }
      ];
      
  return (
    <div className='container px-12 mx-auto'>
      <Typography  variant="h1" color= "blue-gray" className="text-2xl my-5" >
      Accesorios
      </Typography>

    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

     {
      
       accesorios.map(accesorio => (
        <Link to="/productos/detalle" state={{producto:accesorio}}>
       <Productos producto= {accesorio}/>
       </Link>
       ))

     }

     </div>

    </div>
    
  )
}

export default Accesorios