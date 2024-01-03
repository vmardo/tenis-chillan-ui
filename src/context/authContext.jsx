import { createContext,useContext,useState,useEffect } from "react";
import axios from "axios"

//VAMOS CREAR UN COMPONENTE PROVIDE. NOS PERMITARA MANEJAR EL ESTADO DEL USUARIO Y ALMACENAR TOKEN DE FORMA GLOBAL}

const AuthContext = createContext();

//Creando componente de provider (envuelve toda la aplicacion)
export const AuthProvider = ({children})=> {
    const [token, setToken] = useState(localStorage.getItem("token") || null )
//almacenar la informacion del usuario
    const [usuario, setUsuario] = useState(null);

    //funcion para guardar datos de inicio de sesion
    const guardarDatos = async() => {
        try {

            const respuesta = await axios.get("http://localhost:3000/usuarios/detalles",{
                headers: {
                    Authorization: "Bearer ${token}"
                }
            } ) 
            
            setUsuario(respuesta.data);
            setToken(token);
 
        } catch (error) {
            console.error(error)
        }


    }
    useEffect( async() => {
     async function getData (){
        console.log("cambio en state de token")
        if(token){
            await guardarDatos ();
        }
     } 
     getData();
     
    }, [token])
    
    
    

    //funcion para cerrar sesion
    const logout = ()=> {
        setToken(null);
        setUsuario(null);
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider
            value={{token,usuario,setToken,setToken,logout}}
         >
        {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}