import { Typography } from "@material-tailwind/react"
import EditarDatos from "./EditarDatos"
function Cuenta() {


    const usuario = {
        nombre : "Juan",
        correo : "juan@gmail.com",
        rut: "12.567.678-5",
        password: "Hola12345"
    }
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

        <Typography  variant="h2" color= "blue-gray" className="text-2xl my-5" uppercase >
            {usuario.rut}
        </Typography>

        <EditarDatos></EditarDatos>
        </div>

    </div>
  )
}

export default Cuenta