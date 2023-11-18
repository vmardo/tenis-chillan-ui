import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
// Para recibir la propiedad el componente hijo.Se debe destructurar todas las propiedades que en envien para aca.
// Se abre llaves y se coloca el nombre tal como lo escribi.Ese nombre fue arbitrario (puede ser cualquier)
export function Productos({producto}) {

  // producto es el objeto completo y nos falta hacer una desuctruracion mas,queremos las propiedades individuales.
  const {nombre, url_imagen,precio_anterior,precio_actual,descripcion} = producto;

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src= {url_imagen}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {nombre}
          </Typography>
          <div className="flex gap-4">
            <Typography color="blue-gray" className="font-medium line-through">
              ${precio_anterior}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${precio_actual}
            </Typography>
          </div>
        </div>
        
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {descripcion}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}