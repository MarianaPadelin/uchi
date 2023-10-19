import { AboutContainer } from "../components/pages/about/AboutContainer";
import { ContactoContainer } from "../components/pages/contacto/ContactoContainer";
import { DetalleContainer } from "../components/pages/detalle/DetalleContainer";
// import { Detalle } from "../components/pages/detalle/Detalle";
import HomeContainer from "../components/pages/home/HomeContainer";
import { InfoContainer } from "../components/pages/info/InfoContainer";
import { InteriorismoContainer } from "../components/pages/interiorismo/InteriorismoContainer";
import { ProductosContainer } from "../components/pages/productos/ProductosContainer";
import { ServiciosContainer } from "../components/pages/servicios/ServiciosContainer";

export const routesApp = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "productos",
    path: "/productos",
    Element: ProductosContainer,
  },
  {
    id: "servicios",
    path: "/servicios",
    Element: ServiciosContainer,
  },
  {
    id: "sobre uchi",
    path: "/about",
    Element: AboutContainer,
  },
  {
    id: "información útil",
    path: "/info",
    Element: InfoContainer,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: ContactoContainer,
  },
  {
    id: "detalle",
    path: "/detalleProducto/:id",
    Element: DetalleContainer,
  },
  {
    id: "categoria",
    path: "/productos/:nombreCategoria",
    Element: ProductosContainer,
  },
  {
    id: "interiorismo",
    path: "/servicios/interiorismo",
    Element: InteriorismoContainer,
  },
];
