import { Typography } from "@material-tailwind/react"
import EditarDatos from "./EditarDatos"
import { useAuth } from "../context/authContext"

function Cuenta() {



    const {usuario} = useAuth();
    

  return (
    <div>
        <div>
        <Typography  variant="h2" color= "blue-gray" className="text-2xl my-5" uppercase font-bold >
            Mis Datos
        </Typography>

        <Typography  variant="p" color= "blue-gray"  my-5 >
            Modifica tus datos personales a continuacion para que tu cuenta este actualizada
        </Typography>
        </div>

        <div>
        <Typography  variant="h2" color= "blue-gray" className="text-2xl my-5" uppercase  >
            Detalles
        </Typography>

        <Typography  variant="h2" color= "blue-gray" className="text-2xl my-5" uppercase  >
            {usuario.nombre}
        </Typography>
        <Typography  variant="h2" color= "blue-gray" className="text-2xl my-5" uppercase  >
            {usuario.email}
        </Typography>


        <Typography  variant="h2" color= "blue-gray" className="text-2xl my-5" uppercase >
       
        </Typography>

        <EditarDatos></EditarDatos>
        </div>

    </div>
  )
}

export default Cuenta