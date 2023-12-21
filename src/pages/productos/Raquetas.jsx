import { Productos } from '../../components/Productos';
import { useState, useEffect } from 'react' //useState --> maneja la respuesta de la base de datos
import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import axios from "axios"
                                            
//useEffect--->de enterarse que al momento cargue el componete se haga la consulta
//creamos la consulta para la base de datos.Para ir ha buscar todas las raquetas
//Por lo cual creamos un funcion que se encargue en consultar a la base de datos (una simulacion por ahora,utulizando nuestro array)
//Para ello utilizaremos una herramienta de react que realiza una consulta mientras carga nuestro componente y haga la consulta inmediatamnete


function Raquetas() {

  const [raquetas, setRaquetas] = useState();

  const consultarAPI = async () => {
    //simular consulta a api, esto es una operacion asincrona.
    try {
      const respuesta = await axios.get("http://localhost:3000/productos");
      setRaquetas(respuesta.data);
    } catch (error) {
      console.error("Error al obtener productos;",error)
    }
   
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

  return (
    <div className='container px-12 mx-auto'>
      <Typography  variant="h1" color= "blue-gray" className="text-2xl my-5" >
            Raquetas
      </Typography>

    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {

raquetas.map(raqueta => (
  <Link key={raqueta._id} to="/productos/detalle" state={{producto:raqueta}}>
  <Productos producto = {raqueta} />
  </Link>
))

}
    </div>
      
    
    </div>
  )
}

export default Raquetas