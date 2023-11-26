import {
    Card,
    Input,
    Button,
    Typography,
    Alert,
  } from "@material-tailwind/react";
  import { NavLink,useNavigate } from "react-router-dom";
  import { useState } from "react";
   
  export function Registro() {
   //aca inicializamos useState como un array vacio 
   //vamos hacer una propiedad por cada input y crearemos un objeto que contenga a los tres
   //la idea es ir llenando segun lo que vaya escribiendo el usuario para ello debemos utilizar los eventos

      const [usuario, setUsuario] = useState({
          nombre: "",
          correo: "",
          password:""
      })
      //para dirreccionar al usuario al home
      const navigate = useNavigate();
      //creamos un useState de error
      const [error, setError] = useState();

      

      //Esta const es para manejar el evento onChange
      const actualizarUsuario = (e) => {
        const propiedad = e.target.name;
        const valor = e.target.value 
        //{...obj,key: "value"}
        //con esta funcion estoy tomando todos los valores de los input 
        setUsuario({...usuario, [propiedad]: valor})

      
      }
      //preventDefault ---->para no perder los datos al momento de actualizar 
      const registrarUsuario = (e)=> {
        e.preventDefault();
        //reealizaremos validaciones
        console.log("tenemos que validar el objeto user:")
        console.log(usuario);

        //desenestructuramos el objeto para trabajar con las variables por separado
        const {nombre,correo,password} = usuario;
        //vamos hacer que todos los campos sean obligatorios
        if (!nombre  || !correo  || !password ) {
          setError("Todos los campos son obligatorios")
          //return es para que no se ejecute mas codigo
          return;
        }


        //validar fuerza de passaword 
        const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

        if (!passwordRegex.test(password)){
          setError("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula")
          return;
        }

        console.log("registrando usuario...")
        navigate("/home")
        //llamar a ruta encargada de registrar usuarios

      }
      
    return (
       <Card color="transparent" shadow={false} className="mt-6">
        <Typography variant="h4" color="blue-gray">
          Registro
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
         Ingresa tus datos para registrarte 
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={registrarUsuario}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tu nombre
            </Typography>
            <Input
              name="nombre"
              onChange={actualizarUsuario}
              size="lg"
              placeholder="tu nombre"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tu correo
            </Typography>
            <Input
              name="correo"
              onChange={actualizarUsuario}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contraseña
            </Typography>
            <Input
              name="password"
              onChange={actualizarUsuario}
              type="text"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
                {
                  error && 
                  <Alert color="red" className="my-4" variant="gradient">
                    <span>{error} </span>
                  </Alert>

                }

          <Button type="submit" className="mt-6" fullWidth>
            Registarse
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Ya tienes una cuenta?{" "}
            <NavLink to="/login" className="font-medium text-gray-900">
              Inicia Sesion
            </NavLink>
          </Typography>
        </form>
      </Card>
    );
  }

  export default Registro 