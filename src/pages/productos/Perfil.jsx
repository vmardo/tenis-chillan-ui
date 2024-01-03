import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import Cuenta from "../../components/Cuenta";
import Pedido from "../../components/Pedido";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
 
 function Perfil() {

  const {usuario} = useAuth();
  const navigate = useNavigate();

  const data = [
    {
      label: "Pedidos",
      value: "pedido",
      icon: Square3Stack3DIcon,
     
    },
    {
      label: "Cuenta",
      value: "cuenta",
      icon: UserCircleIcon,
      
    },
    
  ];

  //useEffect(() => !usuario && navigate("/"),[])
    

  if (!usuario) {
    return (
    <h1>Debes inciar sesion</h1>
    )
  }

  return (
    <Tabs value="dashboard">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value }) => (
          <TabPanel key={value} value={value}>
            
            {
                value == "cuenta" ? <Cuenta/> :  <Pedido/>

            }
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default Perfil