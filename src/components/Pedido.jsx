import { List, ListItem, Card,Avatar } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

function Pedido() {

  //colocamos un objeto de prueba

  const pedidos = [
    {
      fecha: "22/11/2023",
      total: 179900,
      numeroPedido: "TS1728372",
      imagenes: ["https://sursports.cl/wp-content/uploads/2022/07/Pure-Aero-Lite.jpg", "https://tenisygolf.cl/wp-content/uploads/2021/08/WILSON-CHAMPIONSHIP.jpg"]

    },
    {
      fecha: "22/11/2023",
      total: 179900,
      numeroPedido: "TS1728490",
      imagenes: ["https://sursports.cl/wp-content/uploads/2022/08/Instinct-Mp-3-720x720.jpg", "https://cdnx.jumpseller.com/muuk1/image/27019471/resize/640/640?1699376362"]

    }
  ]

  return (
    <Card className="w-4/5">
      <List>

        {
          pedidos.map(pedido => (
            <ListItem key={pedido.numeroPedido}>

              <Typography variant="p" color="blue-gray" className="my-5 font-bold"  >
                {pedido.fecha} | ${pedido.total}
              </Typography>
              <Typography variant="p" color="blue-gray" className="my-5 "  >
                Numero de pedido : {pedido.numeroPedido}
              </Typography>

              {
                pedido.imagenes.map(imagen => (
        
                    <Avatar src={imagen} alt="avatar" variant="square" />

                ))
              }



            </ListItem>

          ))
        }


      </List>
    </Card>
  );
}

export default Pedido