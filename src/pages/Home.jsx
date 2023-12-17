
import { Typography,Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import CategoriaHome from '../components/CategoriaHome'

function Home() {

  const categorias= [
    {
      nombre: "Accesorios",
      ruta: "productos/accesorios",
      urlImagen: "https://t2.uc.ltmcdn.com/es/posts/6/9/5/tipos_de_deportes_con_raqueta_52596_600.jpg",
    },
    {
      nombre: "Ropa",
      ruta: "productos/ropa",
      urlImagen: "https://cache.tradeinn.com/images/brand-page-premium/607_1_5.jpg",
    }
  ]

  return (
    <div>
      <div className=" py-2 bg-amber-400">
        <Typography variant="h4" color="white" className="text-sm text-center " >
          ENVÍO GRATUITO SUPERIORES A $100.000
        </Typography>
      </div >
      {/* Seccion Hero */}
      <div className="h-96">
        <div className="h-full bg-[url('/img/hero.webp')] bg-cover bg-no-repeat bg-center">
          <div className='h-full grid grid-cols-2'>

            <div className="flex flex-col justify-center items-center pb-16">
              <Typography variant="h1" color="white" className="mt-10" >
              🔥Tenis Store🔥
              </Typography>
            <div className="flex gap-4">
              <Link to="/productos/raquetas">
              <Button color="amber">RAQUETAS</Button>
              </Link>
              <Link to="/productos/pelotas">
              <Button color="amber">PELOTAS</Button>
              </Link>
              
              
            </div>
            </div>
            <div className=''>

            </div>

          </div>

        </div>
      </div>

      <div className="my-10 flex gap-10 justify-center">

        {
          categorias.map(categoria => (
            <CategoriaHome categoria={categoria} />
        
          )) 
        }

        

      </div>

    </div>
  )
}

export default Home
