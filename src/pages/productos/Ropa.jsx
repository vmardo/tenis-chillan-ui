import { Productos } from "../../components/Productos"
import { Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom";

function Ropa() {

    const ropa = [
        {
            porcentajeDescuento: 10,
            nombre: "Polera Hydrogen Técnica Bicolor Spray Amarilla Hombre",
            descripcion: "La versión clásica de la camiseta Spray Tech, con el estampado de aerosol solo en las mangas, mientras que el cuerpo presenta el logotipo original de Hydrogen. Sin embargo, mantiene la alta tecnología en sus tejidos para garantizar frescura y libertad de movimiento durante el juego.",
            url_imagen: "https://sursports.cl/cdn/shop/files/POL10.HYD.jpg?v=1699882788&width=1100",
            cantidad: 1,
            tipo: "Polera",
            disponible_entrega: true,
            disponible_retiro: true,
            precio_anterior: 40000,
            precio_actual: 30000
        },
        {
            porcentajeDescuento: 15,
            nombre: "Short Hydrogen Técnico Spray Blanco",
            descripcion: "Este pantalón corto ha sido creado para garantizar el máximo confort en la pista, con tejido elástico suave y tecnología que favorece la termorregulación. El estampado Spray está presente solo en una cara para darte un original y único efecto bicolor.",
            url_imagen: "https://sursports.cl/cdn/shop/files/SHO03.HYD_2_14718554-df9e-4ad7-9826-a8b38b49db86.jpg?v=1699881445&width=1200",
            cantidad: 1,
            tipo: "short",
            disponible_entrega: true,
            disponible_retiro: false,
            precio_anterior: 30000,
            precio_actual: 25500
        },
        {
            porcentajeDescuento: 20,
            nombre: "Pantalón Buzo Hydrogen Técnico Blanco",
            descripcion: "Pantalón de tejido técnico de alto rendimiento resultado de una investigación innovadora. Corte regular, cintura elástica, bolsillos. La peculiaridad de este pantalón exclusivo es sin duda el tecno-tejido de última generación.",
            url_imagen: "https://sursports.cl/cdn/shop/files/PAN01.HYD_4.jpg?v=1704298576&width=1100",
            cantidad: 1,
            tipo: "pantalon",
            disponible_entrega: false,
            disponible_retiro: true,
            precio_anterior: 55000,
            precio_actual: 44000
        },
        {
            porcentajeDescuento: 25,
            nombre: "Polera Asics Court M Polo Azul",
            descripcion: "La CAMISETA COURT POLO cuenta con una mezcla de tejido de punto que se complementa con excelentes propiedades que absorben la humedad para mejorar la comodidad y mantener a los atletas secos en la cancha.",
            url_imagen: "https://somos-tenis.cl/wp-content/uploads/2021/12/Diapositiva4-5.jpg",
            cantidad: 1,
            tipo: "polera",
            disponible_entrega: true,
            disponible_retiro: true,
            precio_anterior: 20000,
            precio_actual: 15000
        },
        {
            porcentajeDescuento: 12,
            nombre: "Polera Joma Mujer tirantes Siena II Coral Fluor",
            descripcion: "Polera Joma Mujer tirantes Siena II Coral Fluor de mujer/niña. Destaca por ser muy ligera y por favorecer la transpiración. Así, la frescura y la sequedad del cuerpo estarán garantizadas durante la práctica deportiva.",
            url_imagen: "https://sursports.cl/cdn/shop/files/PoleraJomaMujertirantesSienaIICoralFluor_1.jpg?v=1703852438&width=1100",
            cantidad: 1,
            tipo: "polera",
            disponible_entrega: true,
            disponible_retiro: false,
            precio_anterior: 12990,
            precio_actual: 11431
        },
        {
            porcentajeDescuento: 18,
            nombre: "Chaqueta Joma Montreal Verde Negra",
            descripcion: "Chaqueta Joma Montreal Verde Negra concebida para entrenamientos de tenis y pádel. Modelo para hombre/niño. Con cierre de cremallera y cuello alto para abrigar la zona y elevar el confort del tenista.",
            url_imagen: "https://sursports.cl/cdn/shop/files/CHAQ02.JOM.jpg?v=1704205183&width=1100",
            tipo: "chaqueta",
            disponible_entrega: false,
            disponible_retiro: true,
            precio_anterior: 49990,
            precio_actual: 40991
        },
        {
            porcentajeDescuento: 15,
            nombre: "Falda Nox Team Roja Logo Blanco",
            descripcion: "Falda Nox Team Roja Logo Blanco confeccionada con tejido ligero y elástico. Incorpora la tecnología “Balance Fresh” de NOX para un máximo confort en el juego.",
            url_imagen: "https://tiendaapasur.cl/wp-content/uploads/2023/05/Falda-Nox-Team-Roja-Logo-Blanco-6.jpg",
            cantidad: 1,
            tipo: "falda",
            disponible_entrega: true,
            disponible_retiro: true,
            precio_anterior: 35000,
            precio_actual: 29750
        },
        {
            porcentajeDescuento: 15,
            nombre: "Polera Hydrogen Básica Técnica Negra Logo Centro Hombre",
            descripcion: "La camiseta técnica básica es la camiseta Hydrogen por excelencia, Es de poliamida de alta tecnología diseñado para el máximo rendimiento en el juego. ",
            url_imagen: "https://www.tennispro.es/media/catalog/product/cache/7/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/t/0/t00512-007_noir_1.jpg",
            cantidad: 1,
            tipo: "polera",
            disponible_entrega: true,
            disponible_retiro: true,
            precio_anterior: 50000,
            precio_actual: 425000
        },
        {
            porcentajeDescuento: 15,
            nombre: "Short Joma Open III Azul Marino Franja Amarilla",
            descripcion: "Short con bolsillos y cintura elástica ajustable mediante cordones. Incluye aberturas en los laterales para aumentar la libertad de movimiento. Logotipo bordado.",
            url_imagen: "https://sursports.cl/cdn/shop/files/SHO14.JOM.jpg?v=1699881308&width=1100",
            cantidad: 1,
            tipo: "short",
            disponible_entrega: true,
            disponible_retiro: true,
            precio_anterior: 24000,
            precio_actual: 20400
        }
    ];

    return (

        <div className='container px-12 mx-auto'>
            <Typography variant="h1" color="blue-gray" className="text-2xl my-5" >
                Ropa
            </Typography>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {

                    ropa.map(ropa => (
                    <Link to="/productos/detalle"state={{producto:ropa}}>
                        <Productos producto={ropa} />
                        </Link>
                    ))

                }

            </div>

        </div>




    )
}

export default Ropa