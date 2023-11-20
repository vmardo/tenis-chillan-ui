import { Productos } from '../../components/Productos';
import { useState, useEffect } from 'react' //useState --> maneja la respuesta de la base de datos
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
                                            
//useEffect--->de enterarse que al momento cargue el componete se haga la consulta
//creamos la consulta para la base de datos.Para ir ha buscar todas las raquetas
//Por lo cual creamos un funcion que se encargue en consultar a la base de datos (una simulacion por ahora,utulizando nuestro array)
//Para ello utilizaremos una herramienta de react que realiza una consulta mientras carga nuestro componente y haga la consulta inmediatamnete


function Raquetas() {

  const [raquetas, setRaquetas] = useState();

  const consultarAPI = async () => {
    //simular consulta a api, esto es una operacion asincrona.

    const productos = [
      {
        porcentajeDescuento: 10,
        nombre: "Wilson Pro Staff RF97 Autograph",
        descripcion: "Diseñada en colaboración con Roger Federer, la Wilson Pro Staff RF97 Autograph es una raqueta de tenis para jugadores avanzados. Ofrece potencia y control excepcionales.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2023/05/Raqueta-Wilson-Pro-Staff-97-V14.0-315gr-1-1-1024x1024.png",
        precio_anterior: 259990,
        precio_actual: 233991,
        grip_size: "4 3/8",
        head_size: "97 sq in",
        disponible_entrega: true,
        disponible_retiro: false,
      },
      {
        porcentajeDescuento: 20,
        nombre: "Babolat Pure Aero",
        descripcion: "La Babolat Pure Aero es conocida por su potencia y efecto. Utilizada por Rafael Nadal, esta raqueta es ideal para jugadores que buscan un juego agresivo y con mucho giro.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/07/Pure-Aero-Lite.jpg",
        precio_anterior: 299990,
        precio_actual: 239992,
        grip_size: "4 1/4",
        head_size: "100 sq in",
        disponible_entrega: true,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 15,
        nombre: "Head Graphene 360+ Speed Pro",
        descripcion: "La Head Graphene 360+ Speed Pro es la elección de Novak Djokovic. Ofrece una combinación perfecta de velocidad y control para jugadores avanzados.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/08/Instinct-Mp-3-720x720.jpg",
        precio_anterior: 279990,
        precio_actual: 237991,
        grip_size: "4 3/8",
        head_size: "100 sq in",
        disponible_entrega: false,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 25,
        nombre: "Yonex EZONE 98",
        descripcion: "La Yonex EZONE 98 es conocida por su sensación cómoda y su capacidad para brindar potencia y control. Ideal para jugadores intermedios y avanzados.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/11/Raqueta-Yonex-Ezone-98-Plus-Sky-Azul-2022-720x720.jpg",
        precio_anterior: 229990,
        precio_actual: 172493,
        grip_size: "4 1/4",
        head_size: "98 sq in",
        disponible_entrega: true,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 10,
        nombre: "Prince Textreme Tour 100P",
        descripcion: "La Prince Textreme Tour 100P ofrece un equilibrio perfecto entre potencia y control. Su diseño aerodinámico la hace ideal para jugadores de nivel intermedio.",
        url_imagen: "https://www.tradeinn.com/f/13699/136996818/prince-raqueta-tenis-textreme-tour-100p.jpg",
        precio_anterior: 199990,
        precio_actual: 179991,
        grip_size: "4 1/2",
        head_size: "100 sq in",
        disponible_entrega: true,
        disponible_retiro: false,
      },
      {
        porcentajeDescuento: 30,
        nombre: "Dunlop CX 200 Tour 18x20",
        descripcion: "La Dunlop CX 200 Tour 18x20 es una raqueta de tenis de precisión con un patrón de encordado cerrado. Ofrece un control excepcional en golpes planos y topspin.",
        url_imagen: "https://cdn.listingmirror.com/9600/b4e0a0c9-f8a4-5bda-9ed7-7e7e7fb9d957/full.jpg",
        precio_anterior: 239990,
        precio_actual: 167993,
        grip_size: "4 3/8",
        head_size: "95 sq in",
        disponible_entrega: false,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 12,
        nombre: "Volkl V-Feel V8 Pro",
        descripcion: "La Volkl V-Feel V8 Pro es una raqueta versátil que proporciona una combinación única de potencia y control. Adecuada para jugadores de todos los niveles.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2022/07/Raqueta-Babolat-Pure-Strike-100-7.jpg",
        precio_anterior: 209990,
        precio_actual: 184792,
        grip_size: "4 1/4",
        head_size: "100 sq in",
        disponible_entrega: true,
        disponible_retiro: true,
      },
      {
        porcentajeDescuento: 18,
        nombre: "Pacific BX2 X Force Pro",
        descripcion: "La Pacific BX2 X Force Pro es una raqueta para jugadores agresivos que buscan potencia y control. Su diseño moderno la hace destacar en la cancha.",
        url_imagen: "https://sursports.cl/wp-content/uploads/2023/10/Raqueta-Yonex-Percept-100-300gr-1.jpg",
        precio_anterior: 269990,
        precio_actual: 221393,
        grip_size: "4 3/8",
        head_size: "97 sq in",
        disponible_entrega: true,
        disponible_retiro: false,
      },
    ];
    setRaquetas(productos);
    console.log(productos)
  }
  //para llamar la funcion
  useEffect(() => {
      consultarAPI();
  }, [])

  //generamos un return en caso que las raquetas no estan disponibles
  if (!raquetas) {
    return (
      <p> Cargando...</p>
    )
  }

  //generando map

  const nombres = raquetas.map(raqueta => raqueta.nombre)

  return (
    <div className='container px-12 mx-auto'>
      <Typography  variant="h1" color= "blue-gray" className="text-2xl my-5" >
            Raquetas
      </Typography>

    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {

        raquetas.map(raqueta => (
          <Link to="/productos/detalle" state={{producto:raqueta}}>
          <Productos producto = {raqueta} />
          </Link>
        ))

      }
    </div>
      
    
    </div>
  )
}

export default Raquetas