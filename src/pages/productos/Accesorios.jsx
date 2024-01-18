import { Link } from "react-router-dom";
import { Productos } from "../../components/Productos";
import { Typography,Spinner } from "@material-tailwind/react";
import { useState,useEffect} from "react";
import axios from "axios";
function Accesorios() {

    //aca vamos hacer la peticion con axios para traer todos los productos 

    const [accesorios, setAccesorios] = useState();

    const consultarAPI = async () => {
      //simular consulta a api, esto es una operacion asincrona.
      try {
        const respuesta = await axios.get("https://tenis-chillan-api-production.up.railway.app/productos/categoria/accesorios");
        setAccesorios(respuesta.data);
      } catch (error) {
        console.error("Error al obtener productos;",error)
      }
     
    }
    //para llamar la funcion
    useEffect(() => {
        consultarAPI();
    }, [])



    //aca realizamos una validacion
    if(!accesorios){
      
      return(
      <div className="flex justify-center mt-10">
        <Spinner className="h-12 w-12" color="yellow"/>
      
      </div>
      )
    }
      
  return (
    <div className='container px-12 mx-auto'>
      <Typography  variant="h1" color= "blue-gray" className="text-2xl my-5" >
      Accesorios
      </Typography>

    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

     {
      
       accesorios.map(accesorio => (
        <Productos key={accesorio._id} producto= {accesorio}/>
       ))

     }

     </div>

    </div>
    
  )
}

export default Accesorios