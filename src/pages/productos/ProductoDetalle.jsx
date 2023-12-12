import { useLocation } from "react-router-dom"
import { Typography, Button } from "@material-tailwind/react";
//con este hook intentamos extraer el producto

function ProductoDetalle() {

    const { state } = useLocation(); //aca estamos desestructuramos el objeto completo 

    console.log(state.producto)
    //desestructuramos las propiedades que necesitamos
    const { nombre, url_imagen, precio_anterior, precio_actual, descripcion } = state.producto



    return (
        <div className="container px-12 mx-auto">
            <Typography variant="h1" color="blue-gray" className="text-3xl my-5" >
                {nombre}
            </Typography>
            <div className="flex justify-between">
                <img
                    className="h-[30rem] w-1/2  rounded-lg object-cover object-center"
                    src={url_imagen}
                    alt="nature image"
                />

                <div>
                    <p>STOCK DISPONIBLE</p>
                    <Typography variant="h2" color="blue-gray" className="text-2xl my-5" >
                        {nombre}
                    </Typography>
                    <p>SKU: FT04898</p>
                    <p>${precio_anterior}</p>
                    <p>${precio_actual}</p>

                    <Typography variant="h2" color="blue-gray" className="text-xl my-5" >
                        {descripcion}
                    </Typography>

                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Añadir al Carro
                    </Button>

                    <p>Disponible para entrega a domicilio</p>
                    <p>Disponible para retiro en tienda</p>



                </div>



            </div>
        </div>
    )
}

export default ProductoDetalle