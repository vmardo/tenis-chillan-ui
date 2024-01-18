import { Productos } from "../../components/Productos"
import { Typography,Spinner } from "@material-tailwind/react"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios"

function Ropa() {

    const [ropa, setRopa] = useState();

    const consultarAPI = async () => {
      //simular consulta a api, esto es una operacion asincrona.
      try {
        const respuesta = await axios.get("https://tenis-chillan-api-production.up.way.app/productos/categoria/ropa");
        setRopa(respuesta.data);
      } catch (error) {
        console.error("Error al obtener productos;",error)
      }
     
    }
    //para llamar la funcion
    useEffect(() => {
        consultarAPI();
    }, [])



    //aca realizamos una validacion
    if(!ropa){
      
      return(
      <div className="flex justify-center mt-10">
        <Spinner className="h-12 w-12" color="yellow"/>
      
      </div>
      )
    }

    return (

        <div className='container px-12 mx-auto'>
            <Typography variant="h1" color="blue-gray" className="text-2xl my-5" >
                Ropa
            </Typography>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {

                    ropa.map(ropa => (
                      <Productos key={ropa._id} producto= {ropa}/>
                    ))

                }

            </div>

        </div>




    )
}

export default Ropa